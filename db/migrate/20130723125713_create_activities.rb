class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.integer :activity_category_id
      t.string :name, null: false, default: ""
      t.string :description, default: ""
      t.timestamps
    end
  end
end
