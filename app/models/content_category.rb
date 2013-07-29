class ContentCategory < ActiveRecord::Base
  attr_accessible :name
  attr_readonly :id
  has_many :contents, dependent: :destroy
  self.per_page = 7
end
