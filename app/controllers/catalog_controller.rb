class CatalogController < ApplicationController
  def index
    @cats = ActivityCategory.all
    @acts = Activity.all
    render layout: false
  end
end
