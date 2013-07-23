// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//= require js-routes
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){

    $("#menu li").mouseover(function(){
        $(this).stop().animate({height:'120px'},{queue:false, duration:600})
    });
    $("#menu li").mouseout(function(){
        $(this).stop().animate({height:'50px'},{queue:false, duration:600})
    });
    $("#home").click(function(){
        location.href = Routes.home_index_path();
    });
    $("#catalog").click(function(){
        $("#container").load(Routes.catalog_index_path());
    });
    $("#planner").click(function(){
        $("#container").load(Routes.planner_index_path());
    });
    $("#about").click(function(){
        $("#container").load(Routes.about_home_index_path());
    });
    $("#contact").click(function(){
        $("#container").load(Routes.contact_home_index_path());
    });
    $("#admin").click(function(){
        location.href = Routes.admin_home_index_path();
    });



});