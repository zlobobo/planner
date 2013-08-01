class HomeController < ApplicationController
  before_filter :check_admin, only: [:admin]
  before_filter :redir, only: [:edit,:update,:destroy,:show,:new,:create]
  require 'rubygems'
  require 'nokogiri'
  require 'open-uri'

  def index
  end

  def about
    render layout: false
  end

  def contact
    render layout: false
  end

  def admin
    @users = User.all
  end

end
