document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = `bulunduğumuz tab: ${tabs[0].title}`;
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
  );

const getBarkedTitle = (tabTitle) => {
    const barkTitle = `${getRandomBark()} Ahem.. I mean, we are at: ${tabTitle}`
    return barkTitle;
}

const barks = [
    'Barf barf!',
    'Birf birf!',
    'Woof woof!',
    'Arf arf!',
    'Yip yip!',
    'Biiiirf!'
]

const getRandomBark = () => {
    const bark = barks[Math.floor(Math.random() * barks.length)];
    return bark;
}