class Auth < ActiveRecord::Base
  belongs_to :twitter_user, foreign_key: 'user_id'
end
