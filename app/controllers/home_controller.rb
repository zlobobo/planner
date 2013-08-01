class HomeController < ApplicationController
  before_filter :check_admin, only: [:admin]
  before_filter :redir, only: [:edit,:update,:destroy,:show,:new,:create]
  require 'rubygems'
  require 'nokogiri'
  require 'open-uri'

  def index
    url = "http://nightcity.en.cx/GameDetails.aspx?gid=43073"
    doc = Nokogiri::HTML(open(url))
    items = {}
    @res = []
    doc.css("#lnkPlayerInfo").each do |item|
      newpath = 'http://nightcity.en.cx' + item.attr("href")
      items[item.text] = newpath
    end
    items.each do |key,value|
      link = Nokogiri::HTML(open(value))
      sum = link.at_css("#enTeamDetailsPanel_divInfo div+span+div+span").text
      @res.push(key + " have " + sum + "points")
    end
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
