function extractData() {
    outputData = {};

    let pageHeaders = document.querySelectorAll('h1, h2');
    let imgTags = document.querySelectorAll('img');
    let links = document.querySelectorAll('a');

    outputData.numberOfHeaders = pageHeaders.length;
    outputData.numberOfImages = imgTags.length;
    outputData.numberOfExternal = links.length;
    console.table(outputData);
  }

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: extractData
        });
    }
});