# Kristine's Daily Routine Scheduler
(Fifth Challenge: Third-Party APIs)

## Description
This application was created to fill in the JavaScript side of the code. Both HTML and CSS frameworks are already provided, hence JavaScript is the only one need to be filled using JQuery.

The fifth challenge is all about creating a simple calendar application that allows a user to save events on every hour of the day (from 9am-5pm business hours). All scheduled appointments and meetings noted are saved in Local Storage not unless it is deleted by the user.

## Installation and Usage

- Clone the repository on your local machine.
- Open VSCode to add JavaScript Code.
- For alternative, open Chrome DevTools by pressing the shortcuts:
    - For Windows and Linux: Ctrl + Shift + J
    - For MacOS: Command + Option + J
- Chrome DevTools Console to check local storage.
- Upon opening the live site, the Work Day Scheduler defaults on the present day.
- Type in an events in the text area and click the save button and it will automatically saved into the local storage.
- Under Application in Chrome DevTools > click Local Storage > file to see the text entries saved.
- For deleting the selected entry, just click "X" and it will start over in typing in the entries.

## Screenshots

- This is the application when you open the live site.
You are looking on the current event and be able to type in what event
that the company will have in a day.

![empty-scheduler](https://user-images.githubusercontent.com/122607160/232260871-5ebc9d48-ddb0-46ee-9052-9da10affe063.png)

- This is what it looks like when the scheduler was filled for example of a startup company
and what their day will be. As you can see, there will be 3 colours that you will see to highlight their day: 
gray is representing past event, red is the current or ongoing event and green will be the future events.

![current-events](https://user-images.githubusercontent.com/122607160/232260870-5614f2d8-861a-4d4e-ad8d-90000c54a5c0.png)

- This is what it looks like when you open the Chrome DevTools at the same time with the application. 
Using the Console, it is noted as well what the business hours in a 24-hour format. This is to check when logging the events and for debugging purposes.

![console-view](https://user-images.githubusercontent.com/122607160/232260869-4c92139b-f2b1-49a6-8707-bd4b19444c04.png)

- This is the local storage of the application. It is showed what you have typed. This is where you can delete the events and start all over again.
- 
![local-storage](https://user-images.githubusercontent.com/122607160/232260872-02a58eea-5317-4610-a27b-714b1a1d4c06.png)


## Live Site 
- For finish product, go to this [link](https://mcramileux.github.io/kristines-daily-routine-scheduler).
  
## Technologies Used
- HTML and CSS (already given for this challenge)
- JavaScript code using JQuery and day.js Library
    - Local Storage
    - Query Selector
    - Array
    - ID Attributes
  
## Licence
This project is [MIT](https://choosealicense.com/licenses/mit/) licence.

## References
- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
- [W3S](https://www.w3schools.com/)
- [chatGPT](https://chat.openai.com/) helped me to explain about JQuery in a plain English.
- [Day.js](https://day.js.org/)
- [jQuery](https://jquery.com/)

## Acknowledgements and Credits
- Jacob Carver - weekly tutor

## Author
- HTML and CSS codes are already provided in this challenge.
- © 2023 mcramileux (for JavaScript section only)
