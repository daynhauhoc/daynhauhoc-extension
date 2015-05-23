var bA = chrome.browserAction;

function updateBadge(count) {
    var unreadCount = 0;
    unreadCount = count;

    var txt = "";
    var title = "Dạy Nhau Học";

    if (unreadCount > 0) {
        txt = ""+unreadCount;
        title = title +" - có "+unreadCount+" thông báo mới";
    } else txt = "";

    bA.setTitle({title: title});
    bA.setBadgeBackgroundColor({ color: [0, 0, 0, 150] });
    bA.setBadgeText({
        text: txt
    });
}

function updateUnreadCount() {
    count = getNotifications();
    updateBadge(count);
}

function getNotifications(){
    var count = 0;

    $.ajax({
        url: 'http://daynhauhoc.com/notifications.json',
        type: 'GET',
        dataType: 'json',
        data: {}
    })

    .done(function(data) {
    if (data.notifications != undefined) {
        $.each(data.notifications, function(key, val){
          if(val.read == false){
            count++;
          }
        });
    };
    updateBadge(count);
  });
}

setInterval(function(){ getNotifications(); }, 1000);
