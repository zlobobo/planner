$(document).ready(function(){
    $.ajaxSetup ({
        cache: false
    });

    var path = Routes.catalog_index_path();
    $("#categories_list li a").bind("click",function(){
    	$("#categories_list li").removeClass("active_category");
    	$(this).parent().addClass("active_category");
        var upd_path = path + '?cat_id=' +$(this).parent().attr("id") + ' #products_container';
        $("#products_container").load(upd_path);
    });
});