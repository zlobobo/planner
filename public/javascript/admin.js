$(document).ready(function(){
    $.ajaxSetup ({
        cache: false,
        timeout: 5000
    });
    $("#cat_tab").click(function(){
        $("#B").load(Routes.activity_categories_path());
    });
    $("#act_tab").click(function(){
        $("#C").load(Routes.activities_path());
    });

    $('#B').on('click','#new_cat', function(){
        $("#B").load(Routes.new_activity_category_path());
    });

    $('#B').on('click','.edit_cat', function(){
        $("#B").load(Routes.edit_activity_category_path($(this).attr('value')));
    });

    $('#C').on('click','#new_act', function(){
        $("#C").load(Routes.new_activity_path());
    });

    $('#C').on('click','.edit_act', function(){
        $("#C").load(Routes.edit_activity_path($(this).attr('value')));
    });

});