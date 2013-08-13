class CatalogController < ApplicationController
  before_filter :redir, only: [:edit,:update,:destroy,:show,:new,:create]

  def index
    category = params[:cat_id] || 'all'
    @cats = ActivityCategory.all
    if category != 'all'
      if params[:tag]
        @acts = Activity.tagged_with(params[:tag]).where('activity_category_id = ?', category)
      else
        @acts = Activity.where('activity_category_id = ?', category)
      end
    else
      if params[:tag]
        @acts = Activity.tagged_with(params[:tag])
      else
        @acts = Activity.all
      end
    end
  end

end
