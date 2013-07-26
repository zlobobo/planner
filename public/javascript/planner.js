$(document).ready(function(){
    $.ajaxSetup ({
        cache: false,
        timeout: 2000
    });

    var plan_path = Routes.planner_index_path();
    $("#categories option").bind("click",function(){
        upd_path = plan_path + '?cat_id=' +$(this).attr("value") + ' #act_container';
        $("#act_list").load(upd_path);
    });

    $('#act_list').on('click','.action.plus', function(){
        $('#list_container').prepend($(this).parent().get(0));
        $(this).children().removeClass("ui-corner-all ui-icon ui-icon-plus").addClass("ui-corner-all ui-icon ui-icon-minus");
        $(this).removeClass("plus").addClass("minus");
    });

    $('#list_container').on('click','.action.minus', function(){
        $(this).parent().get(0).remove();
    });

});