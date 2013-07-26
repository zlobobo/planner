$(document).ready(function(){
    $.ajaxSetup ({
        cache: false,
        timeout: 2000
    });
    $("#cat_tab").click(function(){
        $("#B").load(Routes.activity_categories_path());
    });
    $("#act_tab").click(function(){
        $("#C").load(Routes.activities_path());
    });

});