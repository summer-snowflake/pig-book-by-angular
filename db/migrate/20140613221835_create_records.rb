class CreateRecords < ActiveRecord::Migration[4.2]
  def change
    create_table :records do |t|
      t.date :published_at
      t.integer :charge
      t.integer :breakdown_id
      t.text :memo
      t.timestamp :deleted_at

      t.timestamps
    end
  end
end
