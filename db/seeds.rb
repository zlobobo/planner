# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActivityCategory.create([
                { :id => 1, :name => "Hotels"},
                { :id => 2, :name => "Restaurants"},
                { :id => 3, :name => "Sport"},
                { :id => 4, :name => "Disco"},
            ], :without_protection => true )



Activity.create([
                     { :activity_category_id => 1, :name => "Hilton", :description => ""},
                     { :activity_category_id => 1, :name => "Orbita", :description => ""},
                     { :activity_category_id => 2, :name => "Mac", :description => ""},
                     { :activity_category_id => 2, :name => "KFC", :description => ""},
                     { :activity_category_id => 3, :name => "Bicycles", :description => ""},
                     { :activity_category_id => 4, :name => "Club", :description => ""},
                 ], :without_protection => true )
