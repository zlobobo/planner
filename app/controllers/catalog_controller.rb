class CatalogController < ApplicationController
  before_filter :redir, only: [:edit,:update,:destroy,:show,:new,:create]

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
