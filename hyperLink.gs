function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Convert URLs to Hyperlinks', 'convertUrlsToHyperlinks')
      .addToUi();
}

function convertUrlsToHyperlinks() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.getText();
  var urls = extractUrls(text);
  Logger.log("Extracted URLs: " + urls.join(", ")); // Log extracted URLs
  
  urls.forEach(function(url) {
    Logger.log("Processing URL: " + url); // Log the URL being processed
    body.replaceText(url, "Click here"); // Replace entire URL with "Click here"
    var linkText = body.findText("Click here");
    if (linkText) {
      var linkElement = linkText.getElement().asText();
      linkElement.setLinkUrl(linkText.getStartOffset(), linkText.getEndOffsetInclusive(), url);
      Logger.log("Hyperlink set for: " + url); // Log when hyperlink is set
    } else {
      Logger.log("Replaced text 'Click here' not found"); // Log if replaced text is not found
    }
  });
}


function extractUrls(text) {
  var urls = text.match(/\bhttps?:\/\/\S+/g) || [];
  return urls;
}
