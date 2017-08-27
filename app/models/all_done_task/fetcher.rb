# frozen_string_literal: true

require 'net/http'

class AllDoneTask::Fetcher
  include ActiveModel::Model

  def initialize(task_params)
    list_id = task_params['list_id']
    url = ENV['TRELLO_URL']
    key = ENV['TRELLO_API_KEY']
    token = ENV['TRELLO_API_TOKEN']
    cards_uri = "/lists/#{list_id}/cards?fields=name&key=#{key}&token=#{token}"
    res = Net::HTTP.get(URI.parse(url + cards_uri))
    @cards = JSON.parse(res)
  end

  def save_all
    AllDoneTask.transaction do
      AllDoneTask.where(confirmed_on: Time.zone.today).delete_all
      @cards.each do |card|
        AllDoneTask.create!(confirmed_on: Time.zone.today,
                            card_code: card['id'], card_name: card['name'])
      end
    end
    true
  rescue => ex
    errors[:base] << ex.message
    false
  end
end
