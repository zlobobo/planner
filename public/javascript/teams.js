$(document).ready(function(){

    $('body').on('click','#gen_list', function(){
        var items = [];
        $(".gameInfo tbody tr div a").each(function( index ) {
            var str = $(this).attr('href');
            str.split("/")[2]
            str = "http://nightcity.en.cx" + str;
            items.push(str);
            $('#list').append('<li><a href="'+ str +'">'+ $(this).text()  +'</a></li>');
        });
        $('#target').empty();
    });

    $('body').on('click','#gen_first', function(){
        //$('#target').load('http://nightcity.en.cx/Teams/TeamDetails.aspx?tid=95496');
        //$("#enTeamDetailsPanel_divInfo").appendTo('#cont2')
        //$('#target').empty();
    });


});
