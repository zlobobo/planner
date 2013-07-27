class PlannerController < ApplicationController
  before_filter :redir, only: [:edit,:update,:destroy,:show,:new,:create]

  def index
    category = params[:cat_id]
    @cats = ActivityCategory.paginate(page: params[:page])
    if category
      @acts = Activity.where('activity_category_id = ?', category).paginate(page: params[:page])
    end
    render layout: false
  end

end
