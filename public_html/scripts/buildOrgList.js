$.getJSON( "/organization", function( data ) {
    $("#contact-list").append("<tr> <th> Organization </th> <th> Location </th> <th> Website </th> </tr>");
    $.each( data, function( index, item ) {
        $("#contact-list").append("<tr> id='" + index + "'><td>" + item.name + "</td><td>" + item.location + "</td><td>" + item.website +"</td></tr>");
    });
});
