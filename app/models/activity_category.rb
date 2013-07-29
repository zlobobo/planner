class ActivityCategory < ActiveRecord::Base
  attr_accessible :name
  attr_readonly :id
  has_many :activities, dependent: :destroy
  self.per_page = 7
end
