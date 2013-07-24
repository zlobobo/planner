class CatalogController < ApplicationController

  def index
    category = params[:cat_id] || 'all'
    @cats = ActivityCategory.all
    if category != 'all'
      @acts = Activity.where('activity_category_id = ?', category)
    else
      @acts = Activity.all
    end
    render layout: false
  end

end
