$(document).ready(function(){

    if(!$('#myCanvas').tagcanvas({
        textColour: '#ff0000',
        outlineColour: '#ff00ff',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05
    },'tags')) {
        // something went wrong, hide the canvas container
        $('#myCanvasContainer').hide();
    }

    $.ajaxSetup ({
        cache: false,
        timeout: 2000
    });


    var cat_path = Routes.catalog_index_path();

    function refresh(){
        upd_path = cat_path + '?cat_id=' + $('.active_category').attr("id")
        tag = tags()
        if (tag.length>0) upd_path += '&tag=' + tag
        upd_path += ' #products_container';
        $("div .span9").load(upd_path);
    }

    function tags(){
        var tags = []
        $('#selected_tags li a').each(function(){
            tags.push(this.text);
        });
        return tags
    }

    $("#categories_list li a").bind("click",function(){
    	$("#categories_list li").removeClass("active_category");
    	$(this).parent().addClass("active_category");
        refresh()
    });

    $("#tags li a").bind("click",function(event){
        event.preventDefault();
        $('#tag_header').removeClass("hidden");
        $('#clear_tag').removeClass("hidden");
        $('#selected_tags').prepend($(this).parent().get(0));
        refresh()
    });

    $('#selected_tags').on('click','#clear_tag', function(){
        location.href = Routes.catalog_index_path();
    });

});