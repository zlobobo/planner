class ActivitiesController < ApplicationController
  before_filter :check_admin

  def index
    @activities = Activity.includes(:activity_category).paginate(page: params[:page])
    render layout: false
  end

  def show
    @activity = Activity.find(params[:id])
    render layout: false
  end

  def new
    @activity = Activity.new
    @category = ActivityCategory.all
    render layout: false
  end

  def edit
    @activity = Activity.find(params[:id])
    @category = ActivityCategory.all
    render layout: false
  end

  def create
    @activity = Activity.new(params[:activity])

    respond_to do |format|
      if @activity.save
        format.html { redirect_to admin_home_index_path, notice: 'Activity was successfully created.' }
        format.json { render json: @activity, status: :created, location: @activity }
      else
        format.html { render action: "new" }
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @activity = Activity.find(params[:id])

    respond_to do |format|
      if @activity.update_attributes(params[:activity])
        format.html { redirect_to admin_home_index_path, notice: 'Activity was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy

    respond_to do |format|
      format.html { redirect_to admin_home_index_path }
      format.json { head :no_content }
    end
  end
end
