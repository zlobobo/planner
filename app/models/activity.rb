class Activity < ActiveRecord::Base
  attr_accessible :name, :description, :activity_category_id
  belongs_to :activity_category
end