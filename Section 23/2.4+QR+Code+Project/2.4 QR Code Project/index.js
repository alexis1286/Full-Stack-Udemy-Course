/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import fs from 'fs';
import qr from 'qr-image';
var ans;
inquirer
	.prompt([
		{
			name: "url",
			message: "What is the URL you want to be made into a QR Code?",
		},
	])
	.then((answers) => {
        ans = answers.url;
   
        fs.writeFile("userInput.txt", ans, (err) => {
			if (err) {
				console.error(err);
			} else {
                console.log("File written successfully");
				// file written successfully
			}
		});


        //create the qr code 
		const qr_png = qr.image(ans, { type: "png" });
        //save the qr image
		qr_svg.pipe(fs.createWriteStream("UsersURL.png"));

	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});


		