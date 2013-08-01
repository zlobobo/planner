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
    doc.css("#lnkPlayerInfo").each do |item|
      newpath = 'http://nightcity.en.cx' + item.attr("href")
      items[item.text] = newpath
    end
    items.each do |key,value|
      link = Nokogiri::HTML(open(value))
      whole = link.at_css("#enTeamDetailsPanel_divInfo div+span+div+span").text
      whole.gsub!(/\u00a0/, '')
      whole.gsub!(',', '.')
      itm = []
      link.css("#aspnetForm .white_bold14+table .padL10 span").each do |item|
        itm.push(item.text)
      end
      res = 0
      itm.each do |el|
        el.gsub!(/\u00a0/, '')
        el.gsub!(',', '.')
        res += el.to_f
      end
      final = whole.to_f.round(2) - res.round(2)
      @itog = []
      @itog.push("Team: "+ key + " have " + whole.to_s + " points|Active part: "+ final.round(2).to_s)

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
