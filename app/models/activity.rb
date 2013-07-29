class Activity < ActiveRecord::Base
  attr_accessible :name, :description, :activity_category_id
  attr_readonly :id
  belongs_to :activity_category
  has_many :contents, dependent: :destroy

  self.per_page = 7

end
