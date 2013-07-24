$(document).ready(function(){
    $("#categories_list li a").bind("click",function(){
    	$("#categories_list li").removeClass("active_category");
    	$(this).parent().addClass("active_category");
    });   
});