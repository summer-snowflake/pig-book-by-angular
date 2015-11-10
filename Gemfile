source 'https://rubygems.org'

ruby '2.2.3'

gem 'rails', '4.2.3'
gem 'mysql2', '~> 0.3.20'
gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'
gem 'jquery-rails'
gem 'jbuilder'
gem 'sdoc'
gem 'bcrypt'
gem 'puma'
gem 'rails-i18n'
gem 'rest-client'
gem 'settingslogic'
gem 'active_decorator'
gem 'therubyracer'
gem 'rails-erd'
gem 'tokens', git: 'https://bitbucket.org/pasonatquila/tokens.git'
gem 'validates_email_format_of'
gem 'slim-rails'
gem 'doc_raptor'
gem 'pusher'
gem 'rack-cors'
gem 'sidekiq'
gem 'rdefs'

group :development, :test do
  gem 'rspec-rails'
  gem 'rspec-collection_matchers'
  gem 'pry-rails'
  gem 'pry-rescue'
  gem 'pry-byebug'
  gem 'dotenv', github: 'bkeepers/dotenv'
  gem 'dotenv-rails', github: 'bkeepers/dotenv'
  gem 'factory_girl_rails'
  gem 'faker', group: :developmen
  gem 'gimei'
  gem 'bullet'
end

group :development do
  gem 'web-console', '~> 2.0'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'guard-rspec'
  gem 'terminal-notifier-guard'
  gem 'rubocop', require: false
  gem 'letter_opener'
  gem 'letter_opener_web'
  gem 'lol_dba'
  gem 'ridgepole'
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :test do
  gem 'database_rewinder'
  gem 'shoulda-matchers', '~> 3.0', require: false
  gem 'rspec-json_matcher', require: false
  gem 'autodoc'
  gem 'timecop'
  gem 'webmock'
  gem 'vcr'
  gem 'rspec-power_assert'
  gem 'capybara-email'
end

group :production do
  gem 'newrelic_rpm'
  gem 'rails_12factor'
end
