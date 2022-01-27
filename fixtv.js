$(function(){
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });
    console.log("tvfixer started working")
    setInterval(tvFixer, 1000);
});

function tvFixer(){ //backdrop wrap  
    if($('#header-toolbar-start-trial div').text()!=='Pro'){
        $('#header-toolbar-start-trial div').text('Pro');
    }

    if($("article[class*='toast']").length > 0){
        $("article[class*='toast']").remove();
    }
    if($("div[class*='backdrop']").length > 0){
        $("div[class*='backdrop']").remove();
        $("#overlap-manager-root > div:nth-child(2) > div > div[class*='wrap']").remove();
    }
}