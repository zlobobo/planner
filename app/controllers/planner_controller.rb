class PlannerController < ApplicationController
  before_filter :redir, only: [:edit,:update,:destroy,:show,:new,:create]

  def index
    category = params[:cat_id]
    @cats = ActivityCategory.all
    if category
      @acts = Activity.where('activity_category_id = ?', category)
    end
    render layout: false
  end

end
