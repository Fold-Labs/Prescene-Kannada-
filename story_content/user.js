function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Dle3G2YNDx":
        Script1();
        break;
      case "6eFSHJv1nXJ":
        Script2();
        break;
  }
}

function submit_result(data) {
  sendDataToWebApp(data);
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] != "")
      data[sParameterName[0]] =
        sParameterName[1] === undefined ? "" : sParameterName[1];
  }
  var url = "";
  if ("url" in data) url = data.url;
  console.log("Data sent to server :");
  console.log(data);
  if (!url) {
    return;
  }
  $.ajax({
    url: url,
    type: "POST",
    data: data,
    cache: false,
    success: function (data, textStatus, jqXHR) {
      console.log("Server response" + data);
      return "ok";
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //console.log(jqXHR);
      return "Error occurred";
    },
  });
}

function Script1()
{
  var player = GetPlayer(); 
var data = {}; 
data.api_type = 'Launch'; 
submit_result(data); 
MyQuestAndroid.showingScormFirstPage(); 
}

function Script2()
{
  var player = GetPlayer(); 
var data = {}; 
data.api_type = 'End'; 
submit_result(data); 
MyQuestAndroid.showingScormLastPage();
}

function sendDataToWebApp(data) {
  window.parent.postMessage(data, "*");
}