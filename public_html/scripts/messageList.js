$.getJSON( "/messages", function( messages ) {
  $("#message-list").append ("<thead>" +
    "<tr>" +
    "<th> Sender </th>" +
    "<th> Receiver </th>" +
    "<th> Title </th>" +
    "<th> Content </th>" +
    "</tr>" +
    "</thead>");
  $.each (messages, function (index, message) {
    $("#message-list").append ("<tr id='" + index + "'>" +
      "<td>" + message.sender + "</td>" +
      "<td>" + message.receiver + "</td>" +
      "<td>" + message.title + "</td>" +
      "<td>" + message.content + "</td>" +
      "</tr>");
  });
});
