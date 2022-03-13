# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alberto Hernandez**

Time spent: **7** hours spent in total

Link to project: https://glitch.com/edit/#!/lemon-coordinated-hygienic

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Allowed user to modify the game difficulty. 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here: http://g.recordit.co/o3Njqp3nE2.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Coding with Mosh. “HTML Tutorial for Beginners: HTML Crash Course.” Youtube, 11 Jan. 2021, https://www.youtube.com/watch?v=qz0aGYrrlhU. 

Wood, Adam, and Adam is a technical writer who specializes in developer documentation and tutorials. “Creating a Button with the HTML Button Element: Here's How ".” Creating A Button With The HTML Button Element: Here's How ", 22 Dec. 2019, https://html.com/tags/button/#:~:text=The%20element%20is%20used,the%20button%20with%20a%20form.

“How to Move a Form Button Left or Right Using CSS.” Marketing Nation, 30 Dec. 2014, https://nation.marketo.com/t5/knowledgebase/how-to-move-a-form-button-left-or-right-using-css/ta-p/248907#:~:text=Add%20css%20style%20using%20adding,in%20a%20custom%20html%20block.  

“How to - Round Buttons.” How To Create Round Buttons, https://www.w3schools.com/howto/howto_css_round_buttons.asp. 

Tommy KTommy K 1, et al. “Change Color of Button When Clicked.” Stack Overflow, 1 Jan. 1963, https://stackoverflow.com/questions/28530641/change-color-of-button-when-clicked. 

“Math.random() - Javascript: MDN.” JavaScript | MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random. 

“How to Create Button with Line Breaks.” W3docs, https://www.w3docs.com/snippets/html/button-with-line-breaks.html. 

CSS Backgrounds, https://www.w3schools.com/css/css_background.asp. 

The Net Ninja. “JavaScript Tutorial for Beginners #40 - Youtube.” Youtube, https://www.youtube.com/watch?v=XQEfWd1lh4Q. 

“How to Make Beep Sound in Javascript - Javatpoint.” Www.javatpoint.com, https://www.javatpoint.com/how-to-make-beep-sound-in-javascript. 

Onmousedown Event, https://www.w3schools.com/jsref/event_onmousedown.asp. 

Arribas, Duarte, et al. “Math.random with Decimal Places and Code Errors in Javascript.” Stack Overflow, 1 Apr. 1965, https://stackoverflow.com/questions/44031871/math-random-with-decimal-places-and-code-errors-in-javascript. 

JavaScript Popup Boxes, https://www.w3schools.com/js/js_popup.asp. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I encountered when creating the memory game project was coding the program to show the user the pattern of button presses they need to mimic. For the longest time, I was struggling with the program making the buttons all press at the same time, making it so the user had no clue which buttons came first or how many times they had to be pressed when displaying the pattern. Thankfully, I realized that the problem was that, when using a for loop, javascript does not give the setTimer() function enough time to buffer each button press, therefore, making the error. To fix this, I formed the game() function into a recursive function, which makes the function itself loop and gave the setTimer() function enough time to delay each button press in the preview.  Other than that problem, the only other challenge I faced was learning html, css, and javascript. I used many resources around the web in order to understand the functionalities, keywords, and syntax of each language. I also did not use the given step-by-step guide for this project in order to truly learn from scratch which I believe helped me greatly to understand the three languages.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

- Why is web development one of the biggest demands in the programming market?

- If web development is so sought after in the market, why isn’t it taught more often in computer science curriculums?

- Is it possible to code everything onto one file instead of separating it into three (I.E: .html, .css, .js)?

- Is it possible to use the three languages outside of web development?

- Are there more languages that need to be utilized outside of the three main ones?

- Coding on html and css seems to be very simple, do jobs often demand a person to have a degree on the subject? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more hours on this project, I would have most likely spent my time cleaning up the code for my javascript file. Since it was my first time working on the language, I had very little knowledge on various features it may have had. Although I did my best to clean up the code when I finished it, I believe I could have done a far better job given more time. I would also have liked to add more features such as: an option for buttons to change shapes every press, an option to add a black and white filter on each button to increase difficulty, an option to add more options into the game, and an option to move the buttons to different locations every button press.

## Interview Recording URL Link

https://drive.google.com/file/d/1oKK5-897sFgc1efkcnF7xMe41YeLTQO5/view?usp=sharing


## License

    Copyright [Alberto Hernandez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
