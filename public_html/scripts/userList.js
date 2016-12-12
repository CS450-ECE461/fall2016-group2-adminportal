$.getJSON( "/users", function( data ) {
    $("#user-list").append("<tr> <th> UserName </th> <th> Email </th> <th> Job Title </th> </tr>");
    $.each( data, function( index, item ) {
        $("#user-list").append("<tr> id='" + index + "'><td>" + item.username + "</td><td>" + item.email + "</td><td>" + item.job_title +"</td></tr>");
    });
});
