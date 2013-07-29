class CreateContentCategories < ActiveRecord::Migration
  def change
    create_table :content_categories do |t|
      t.string :name, null: false, default: ""
      t.timestamps
    end
  end
end
