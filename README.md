# Florida Folk Festival image display

<b>About this project:</b><br/>
This image display was created to be showcased at the annual Florida Folk Festival. It contains over 1000 photographs, handpicked by our photo lab staff, and an audio player with music from the Florida Memory audio collection.
The project was created with a Bootstrap image carousel but with more customizable features added to allow the user more control over speed, transition effects, etc.
In addition, QR codes are generated for each image that link to an item page on the Florida Memory website. The user can select between a regular QR code and a code with the current image embedded.

<b>Technologies used:</b><br/>
--<b>Javascript</b><br/>
--<b>qrcodejs:</b> Plugin to generate QR codes - <a>https://github.com/davidshimjs/qrcodejs</a><br/>
--<b>qart.js:</b> Plugin to insert an image over QR codes <a>https://github.com/kciter/qart.js</a><br/>
--<b>HTML</b><br/>
--<b>CSS</b><br/>
--<b>Bootstrap</b><br/>

<b>Takeaways:</b><br/>
The most challenging part of this project was working with QR codes and figuring out how to load the codes dynamically. Qrcode.js and Qart are not set up by default to do this, so I had to experiment with them to figure out how to make it work. In addition, designing the menu and adding extra controls to customize the Bootstrap slider was a fun little experiment.

<b>Current status:</b><br/>
The project is complete and was used at the Florida Folk Festival.

<b>Note:</b><br/>
<b>Note:</b> Due to server failure issues and a lack of reliable internet at the festival, all images are loaded into the project, and GitHub wouldn't allow such a large number of photos to be uploaded. I've provided a link to Netlify where this is not an issue.
<b>Note:</b> The Florida Department of State is very security-focused, and version control software is not allowed, so you may not see much of a detailed commit history for this project.
