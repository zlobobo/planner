class ActivityCategoriesController < ApplicationController
  # GET /activity_categories
  # GET /activity_categories.json


  def index
    @activity_categories = ActivityCategory.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @activity_categories }
    end
  end

  # GET /activity_categories/1
  # GET /activity_categories/1.json
  def show
    @activity_category = ActivityCategory.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @activity_category }
    end
  end

  # GET /activity_categories/new
  # GET /activity_categories/new.json
  def new
    @activity_category = ActivityCategory.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @activity_category }
    end
  end

  # GET /activity_categories/1/edit
  def edit
    @activity_category = ActivityCategory.find(params[:id])
  end

  # POST /activity_categories
  # POST /activity_categories.json
  def create
    @activity_category = ActivityCategory.new(params[:activity_category])

    respond_to do |format|
      if @activity_category.save
        format.html { redirect_to activity_categories_path, notice: 'Activity category was successfully created.' }
        format.json { render json: @activity_category, status: :created, location: @activity_category }
      else
        format.html { render action: "new" }
        format.json { render json: @activity_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /activity_categories/1
  # PUT /activity_categories/1.json
  def update
    @activity_category = ActivityCategory.find(params[:id])

    respond_to do |format|
      if @activity_category.update_attributes(params[:activity_category])
        format.html { redirect_to activity_categories_path, notice: 'Activity category was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @activity_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /activity_categories/1
  # DELETE /activity_categories/1.json
  def destroy
    @activity_category = ActivityCategory.find(params[:id])
    @activity_category.destroy

    respond_to do |format|
      format.html { redirect_to activity_categories_url }
      format.json { head :no_content }
    end
  end
end
