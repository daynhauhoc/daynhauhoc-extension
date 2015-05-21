$(document).ready(function () {
  startDNH();

  $.ajax({
    url: 'http://daynhauhoc.com/latest.json',
    type: 'GET',
    dataType: 'json',
    data: {page: 0}
  })
  .done(function(data) {
    console.log("success");
    var topics = data.topic_list.topics;

    $.each(topics, function(index, value) {
      $("#rawContainer ul").append('<li><i class="fa fa-chevron-right"></i> <a href="http://daynhauhoc.com/t/' + value["slug"] + '/" target="_blank">' + value["title"] + '</a></li>');
    });
    endDNH();
  })
  .fail(function() {
    console.log("error");

    $("#rawContainer").html("<strong>Có lỗi xảy ra !</strong>");
    endDNH();
  })
  .always(function() {
    console.log("complete");
  });

  function startDNH(){
    $("#rawContainer ul").html();
    $("#rawContainer").fadeOut('slow');
    $("#loading").fadeIn('slow');
  }

  function endDNH(){
    $("#rawContainer").fadeIn('slow');
    $("#loading").fadeOut('slow');
  }
});
