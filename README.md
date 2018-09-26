# Mission
Write a web application that allows the end user to add text with various properties into a 500X700 canvas container, then download as image.
Estimated time of development: 5 hours

## Details
Initially the page should show empty form and blank canvas (as seen below). 
The user enters the following details into the form:
Free text - any text in english, maximum of 50 characters
Font - Prepare a dropdown list with 4-5 fonts of your choice from google fonts (https://fonts.google.com/)
The color of the text in HEX values
X, Y position of text in the canvas (0,0 is top left corner)
Size - the size of text in pixels.
Clicking Submit will update the canvas with the new text and clear the form, allowing to add another text.
Clicking the “download image” should export the canvas into an image (png or jpeg) and initiate a download of the image.
Bonus task: suggest and implement a way to delete an already added text.



Further implementation requirements
Use any client library/framework that you feel comfortable with ( Angular,React, plain javascript) 
Use bootstrap & Sass for styling the page.
Usage of HTML5 canvas for the  drawing is mandatory.
Add inline documentation in code.
Provide installation details for running the app on a windows PC.

## Other requirements
The app should be compatible with the latest Google Chrome on an 1920x1080 screen. (no need to support internet explorer / firefox or any other browser)
No need to  support non - latin languages.

