$.getJSON( "/organization", function( data ) {
    $.each( data, function( key, val ) {
        // if your IDE complains about this, ignore it, it is wrong
        $( "#contact-list").append("<li id='" + key + "'>" + val + "</li>" );

    });
});