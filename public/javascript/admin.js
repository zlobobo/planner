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
    $("#cont_cat_tab").click(function(){
        $("#D").load(Routes.content_categories_path());
    });
    $("#cont_tab").click(function(){
        $("#E").load(Routes.contents_path());
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

    $('#D').on('click','#new_cont_cat', function(){
        $("#D").load(Routes.new_content_category_path());
    });

    $('#D').on('click','.edit_cont_cat', function(){
        $("#D").load(Routes.edit_content_category_path($(this).attr('value')));
    });

    $('#E').on('click','#new_cont', function(){
        $("#E").load(Routes.new_content_path());
    });

    $('#E').on('click','.edit_cont', function(){
        $("#E").load(Routes.edit_content_path($(this).attr('value')));
    });

    $('#B,#D,#E').on('click','.pagination a', function(event){
        event.preventDefault();
        path = $(this).attr('href');
        $(event.target).parent().parent().load(path);
    });

});