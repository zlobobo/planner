class ContentCategoriesController < ApplicationController
  before_filter :check_admin

  def index
    @content_categories = ContentCategory.paginate(page: params[:page])
    render layout: false
  end

  def show
    @content_category = ContentCategory.find(params[:id])
  end

  def new
    @content_category = ContentCategory.new
    render layout: false
  end

  def edit
    @content_category = ContentCategory.find(params[:id])
    render layout: false
  end

  def create
    @content_category = ContentCategory.new(params[:content_category])

    respond_to do |format|
      if @content_category.save
        format.html { redirect_to admin_home_index_path, notice: 'Content category was successfully created.' }
        format.json { render json: @content_category, status: :created, location: @content_category }
      else
        format.html { render action: "new" }
        format.json { render json: @content_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /content_categories/1
  # PUT /content_categories/1.json
  def update
    @content_category = ContentCategory.find(params[:id])

    respond_to do |format|
      if @content_category.update_attributes(params[:content_category])
        format.html { redirect_to admin_home_index_path, notice: 'Content category was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @content_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /content_categories/1
  # DELETE /content_categories/1.json
  def destroy
    @content_category = ContentCategory.find(params[:id])
    @content_category.destroy

    respond_to do |format|
      format.html { redirect_to admin_home_index_path }
      format.json { head :no_content }
    end
  end
end
