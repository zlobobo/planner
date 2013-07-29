class ChangeDataTypeForDescription < ActiveRecord::Migration
  def change
    change_table :activities do |a|
      a.change :description, :text
    end
  end
end
