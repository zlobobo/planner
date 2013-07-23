class CreateActivityCategories < ActiveRecord::Migration
  def change
    create_table :activity_categories do |t|
      t.string :name, null: false, default: ""
      t.timestamps
    end
  end
end
