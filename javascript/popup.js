$(document).ready(function () {
  startDNH();

  $.get('http://daynhauhoc.com/' , function() {
    console.log('Send Success !');
  })
  .done(function(response) {
    matches = response.match(/<a.*?href=\'([^']*?)\'.*?itemprop=\'item\'>\n.*?(.+?)\n.*?<\/a>/gi);

    if ( matches != null) {
      for ( i = 0; i < 20; i++ ) {
      re = new RegExp("<a.*?href=\'([^']*?)\'.*?itemprop=\'item\'>\n.*?<span.*?itemprop=\'name\'>(.+?)<\/span>\n.*?<\/a>", "gi");
      myArray = re.exec(matches[i]);
      $("#rawContainer ul").append('<li><i class="fa fa-chevron-right"></i> <a href="http://daynhauhoc.com' + myArray[1] + '">' + myArray[2] + '</a></li>');
      }
    }
    endDNH();

  })
  .fail(function() {
    $("#rawContainer").html("<strong>Có lỗi xảy ra !</strong>");
    endDNH();

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
