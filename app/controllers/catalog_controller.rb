class CatalogController < ApplicationController
  def index
    @test=ActivityCategory.all
    render layout: false
  end
end
