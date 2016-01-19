require 'rails_helper'

describe 'GET /categories', autodoc: true do
  context 'ログインしていない場合' do
    it '401が返ってくること' do
      get '/categories'
      expect(response.status).to eq 401
    end
  end

  context 'メールアドレスのユーザーがログインしている場合' do
    let!(:user) { create(:email_user, :registered) }
    let!(:category) { create(:category, user: user) }
    let!(:category2) { create(:category, user: user) }

    it '200とカテゴリ一覧を返すこと' do
      get '/categories', '', login_headers(user)
      expect(response.status).to eq 200

      json = {
        categories: [
          {
            id: category2.id,
            name: category2.name
          },
          {
            id: category.id,
            name: category.name
          }
        ]
      }
      expect(response.body).to be_json_as(json)
    end
  end
end
