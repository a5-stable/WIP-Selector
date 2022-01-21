$(function(){
  $(".js-select-status-btn").click(function() {
    let status = $(this).text();

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        send: status
      });
    });
  });
});