$.getJSON( "/users", function( data ) {
    $.each( data, function( key, val ) {
        // if your IDE complains about this, ignore it, it is wrong
        $( "#user-list").append("<li id='" + key + "'>" + val + "</li>" );
        //$('#user-list tr:last').after('<tr>' key '</tr><tr>'val'</tr>');
    });
});
