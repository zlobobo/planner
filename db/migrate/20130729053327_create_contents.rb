class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.integer :content_category_id
      t.integer :activity_id
      t.integer :user_id
      t.text :data, null: false, default: ""
      t.timestamps
    end
  end
end
