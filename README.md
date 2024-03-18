# Goggle-Apps-Script---hyperlink-converter
Converts urls to a hyperlink that says click here
### Readme

This Google Apps Script adds a custom menu to a Google Document, allowing users to convert URLs in the document's body into hyperlinks.

#### How to Use:

1. **Installation:**
   - Open the Google Document where you want to enable the functionality.
   - Navigate to `Extensions` > `Apps Script`.
   - Replace any existing code with the provided script.
   - Save the script.

2. **Run the Script:**
   - After saving the script, close and reopen the document.
   - A new menu titled `Custom Menu` will appear.
   - Click on `Custom Menu` and select `Convert URLs to Hyperlinks`.
   - All URLs in the document will be converted to hyperlinks.

#### Functions:

- **onOpen():**
  - Initializes the custom menu on opening the Google Document.

- **convertUrlsToHyperlinks():**
  - Finds all URLs in the document's body.
  - Replaces each URL with the text "Click here".
  - Converts the replaced text into hyperlinks linking to the original URL.

- **extractUrls(text):**
  - Extracts URLs from the provided text using a regular expression.

#### Note:

- This script will replace all URLs in the document's body with the text "Click here" and convert them into clickable hyperlinks.
- The original URL is retained as the hyperlink destination.
- Logs are generated during the process, providing insights into the URLs being processed and the setting of hyperlinks. You can view these logs in the Google Apps Script editor.
- Make sure to review the script and adjust it according to your specific requirements before running it.
