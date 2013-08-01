desc "Fetch teams"
task fetch: :environment do
require 'rubygems'
require 'nokogiri'
require 'open-uri'

url = "http://nightcity.en.cx/GameDetails.aspx?gid=43073"
doc = Nokogiri::HTML(open(url))
items = {}
doc.css("#lnkPlayerInfo").each do |item|
  newpath = 'http://nightcity.en.cx' + item.attr("href")
  items[item.text] = newpath  
end
items.each do |key,value|
	link = Nokogiri::HTML(open(value))
	sum = link.at_css("#enTeamDetailsPanel_divInfo div+span+div+span").text
	puts "Team: "+ key + " have " + sum + "points"		
end
end