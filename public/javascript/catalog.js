$(document).ready(function(){
    $.ajaxSetup ({
        cache: false,
        timeout: 2000
    });

    var cat_path = Routes.catalog_index_path();
    $("#categories_list li a").bind("click",function(){
    	$("#categories_list li").removeClass("active_category");
    	$(this).parent().addClass("active_category");
        upd_path = cat_path + '?cat_id=' +$(this).parent().attr("id") + ' #products_container';
        $("div .span9").load(upd_path);
    });
});