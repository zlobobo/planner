class Activity < ActiveRecord::Base

  attr_accessible :name, :description, :activity_category_id, :tag_list
  attr_readonly :id

  belongs_to :activity_category
  has_many :contents, dependent: :destroy

  acts_as_taggable

  scope :very_first, where(id: 1)
  scope :exact_name, where(name: "Hilton")

  scope :first_hilton, very_first.exact_name

end
