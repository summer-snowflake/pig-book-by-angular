# frozen_string_literal: true
class Admin < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true, uniqueness: true
end
