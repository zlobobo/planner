$(document).ready(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results){return results[1];};
    }

    var tab_path = $.urlParam('tab') || 'A'
    if (tab_path)
    {
        console.log(tab_path);
        path = '#tab1 a[href="#'+tab_path+'"]';
        $(path).tab('show');
    }


    $.ajaxSetup ({
        cache: false,
        timeout: 5000,
        beforeSend: function() {
            $('#preloader').removeClass('hidden');
        },
        complete: function() {
            $('#preloader').addClass('hidden');
        }

    });

    $("#cont_cat_tab").show(function(){
        $("#D").load(Routes.content_categories_path());
    });
    $("#cont_tab").show(function(){
        $("#E").load(Routes.contents_path());
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


    $("#cat_tab").click(function(){
        $("#B").load(Routes.activity_categories_path());
    });

    $("#cat_tab").show(function () {
        $("#B").load(Routes.activity_categories_path());
    });

    $('#B').on('click','#new_cat', function(){
        $("#B").load(Routes.new_activity_category_path());
    });

    $('#B').on('click','#edit_cat', function(){
        $("#B").load(Routes.edit_activity_category_path($(this).attr('value')));
    });

    $('#B').on('click','tbody tr', function(){
        temp = $(this).attr('value');
        $('#edit_cat,#delete_cat').removeClass('hidden');
        $(this).siblings().removeClass('tab_selected');
        $(this).addClass('tab_selected');
        $('#edit_cat').attr('value',temp);
        $('#delete_cat').attr('href',Routes.activity_category_path(temp));
    });


    $("#act_tab").show(function(){
        $("#C").load(Routes.activities_path());
        $.getJSON( Routes.activities_path(),function(data){
            var items = [];
            $.each(data, function(i,item) {
                var temp = '<tr value="'+item.id+'"><td>'+item.activity_category.name+'</td><td>'+item.name+'</td><td>'+item.description+
                    '</td></tr>'
                items.push(temp);
            });
            $('#act1 tbody').prepend(items);
            $('#act1').dataTable();
        });
    });

    $("#act_tab").click(function(){
        $("#C").load(Routes.activities_path());
        $.getJSON( Routes.activities_path(),function(data){
            var items = [];
            $.each(data, function(i,item) {
                var temp = '<tr value="'+item.id+'"><td>'+item.activity_category.name+'</td><td>'+item.name+'</td><td>'+item.description+
                    '</td></tr>'
                items.push(temp);
            });
            $('#act1 tbody').prepend(items);
            $('#act1').dataTable();
        });
    });

    $('#C').on('click','tbody tr', function(){
        temp = $(this).attr('value');
        $('#edit_act,#delete_act').removeClass('hidden');
        $(this).siblings().removeClass('DTTT_selected');
        $(this).addClass('DTTT_selected');
        $('#edit_act').attr('value',temp);
        $('#delete_act').attr('href',Routes.activity_path(temp));
    });

    $('#C').on('click','#new_act', function(){
        $("#C").load(Routes.new_activity_path());
    });

    $('#C').on('click','#edit_act', function(){
        $("#C").load(Routes.edit_activity_path($(this).attr('value')));
    });
});