chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  let prefix = msg.send;
  let titleBase = document.getElementsByClassName("js-issue-title")[0].innerText.replace(/【.*】/, "");
  let title = prefix + " " + titleBase;

  $(".js-title-edit-button").click();
  $("#issue_title").val(title);
  $('button[data-disable-with="Updating"]').click();
});