class HomeController < ApplicationController
  def index
  end

  def about
    render layout: false
  end

  def contact
    render layout: false
  end

  def admin
  end

end
