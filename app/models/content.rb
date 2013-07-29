class Content < ActiveRecord::Base
  attr_accessible :content_category_id, :activity_id, :user_id, :data
  belongs_to :activity
  belongs_to :content_category
  belongs_to :user
  self.per_page = 7
end
