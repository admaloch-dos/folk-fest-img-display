# folk-fest-img-display

<b>About this project:</b><br/> 
This image display was created to be showcased at the annual Florida Folk Festival. It contains over 1000 photographs, handpicked by our photo lab staff, and an audio player with music from the Florida Memory audio collection.
The project was created with a bootstrap image carousel, but with more customizable features added to allow the user more control over speed, transition effects etc. 
In addition, qr codes are generated for each image that link to an item page on the Florida Memory website. The user can select between a regular qr code and a code with the current image imbedded. Qrcode.js and Qart.js were used to generate these codes.

<b>Technologies used:</b><br/> 
--Javascript<br/>
--qrcodejs: Plugin to generate qr codes - https://github.com/davidshimjs/qrcodejs<br/>
--qart.js: Plugin to insert image over qr codes https://github.com/kciter/qart.js<br/>
--HTML<br/>
--CSS<br/>
--Bootstrap<br/>

<b>Takeaways:</b><br/> 
The most challenging part of this project was working with qr codes and figuring out how to load the codes dynamically. Qcodejs and Qart are not setup by default to do this so I had to experiment with them to figure out how to make it work. In addition, designing the menu and adding extra controles to customize the bootstrap slider was a fun little experiment. 

<b>Current status:</b><br/> 
The project is complete and was used at the Florida Folk Festival.

<b>Note:</b><br/> 
Note: Due to server failure issues and lack of reliable internet at the festival, all images are loaded into the project and github wouldn't allow such a large amount of photos to be uploaded so I've provided a link to netlify where this is not an issue.
Note: The Florida Department of State is very security focused and version control software is not allowed so you may not see a much of a detailed commit history for this project.
