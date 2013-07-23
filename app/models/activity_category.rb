class ActivityCategory < ActiveRecord::Base
  attr_accessible :name,:id
  has_many :activities, dependent: :destroy
end
