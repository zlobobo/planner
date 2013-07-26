class PlannerController < ApplicationController
  def index
    category = params[:cat_id]
    @cats = ActivityCategory.all
    if category
      @acts = Activity.where('activity_category_id = ?', category)
    end
    render layout: false
  end
end
