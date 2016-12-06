$.getJSON( "/users", function( data ) {
    $("#user-list").append("<tr> <th> UserName </th> <th> Email </th> <th> Job Title </th> </tr>");
    $.each( data, function( index, item ) {
        // if your IDE complains about this, ignore it, it is wrong
        //$( "#user-list").append("<li id='" + key + "'>" + val + "</li>" );
        $("#user-list").append("<tr> id='" + index + "'><td>" + item.username + "</td><td>" + item.email + "</td><td>" + item.job_title +"</td></tr>");
    });
});
