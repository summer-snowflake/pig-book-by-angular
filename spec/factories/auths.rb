FactoryGirl.define do
  factory :auth do
    provider 'twitter'
    sequence(:screen_name) { |n| "名前#{n}" }
    sequence(:name) { |n| "name#{n}" }
  end
end