/* MIT License
 *
 * Copyright (c) 2018 John Jekel
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/

/*
 * game.js is the underlying JavaScript for the text and button based role playing game
 * in our MYP Personal Project's website.
 *
 * It requires the following HTML elements to be present:
 *
 * A <form> with id="gameForm", onsubmit="return false", and inside of it...
 *  An <input> with id="nameField" and type="text"
 *  An <input> with type="submit" and onclick="setup()"
 *
 * After the form:
 *
 * A <div> with id="gameTextArea"
 * A <div> with id="gameInteractArea"
 * A <script> with src pointing to this file (game.js)
 *
 * These can more or less be in any order with other extra elements in between,
 * provided the script is the last of these.
*/

"use strict";

/**
 * The player's name
 * @type {String}
 */
let playerName = "";

/**
 * The text to use for the game and the flow of the questions
 *
 * Initlized after the playerName is known (setup() calls setupGameText())
 * @type {Object}
 */
let gameText;

/**
 * The form element for getting player info
 * @type {Element}
 */
const gameForm = document.getElementById("gameForm");

/**
 * The input field for getting the player's name
 * @type {Element}
 */
const nameField = document.getElementById("nameField");

/**
 * The div element for displaying text
 * @type {Element}
 */
const gameTextArea = document.getElementById("gameTextArea");

/**
 * The div element for buttons
 * @type {Element}
 */
const gameInteractArea = document.getElementById("gameInteractArea");

/**
 * Convience function that wipes the innerHTML of gameForm, gameTextArea and gameInteractArea
*/
function wipeGameplayAreas()
{
    gameForm.innerHTML = "";
    gameTextArea.innerHTML = "";
    gameInteractArea.innerHTML = "";
}

/**
 * Sets playerName based on nameField and starts the game
*/
function setup()
{
    if (nameField.value === "")//no name entered
        gameTextArea.innerHTML = "Whoops! Looks like you've forgotton to enter your name. Try again.";
    else
    {
        playerName = nameField.value;

        wipeGameplayAreas();

        setupGameText();

        intro();//in game.js
    }
}

/**
 * Displays introduction text and a play button
*/
function intro()
{
    gameTextArea.innerHTML += gameText.intro.greeting + "</br></br>";//eraces any existing error text
    gameTextArea.innerHTML += gameText.intro.introText + "</br></br>";

    gameInteractArea.innerHTML += `<button type=\"button\" onclick=\"play()\">${gameText.intro.startButton}</button>`;//play() button
}

/**
 * Displays a question from gameText that the user will answer
 * @param {question} The question to display, default 0
*/
function play(question = 0)
{
    wipeGameplayAreas();

    gameTextArea.innerHTML += gameText.questions[question].story + "</br></br>";


    gameInteractArea.innerHTML += gameText.questions[question].options[0];
    gameInteractArea.innerHTML += gameText.questions[question].options[1];

    if (gameText.questions[question].end)
    {
        gameInteractArea.innerHTML += "</br><button onclick=\"window.location.reload()\">Play Again</button>";
    }
}

/**
 * Creates the text for the object that is stored in gameText
 *
 * This function and the object it initilizes, gameText, greatly reduce the amount
 * of custom if statements and inline text needed, allowing me to focus on the story
 * writing more once the programming step is complete.
*/
function setupGameText()
{
    /**
     * Convience function to create questions for the user to answer
     * @param {storyText} The storylinefor the question
     * @param {firstOptionButton} The first button + tag option (options[0])
     * @param {secondOptionButton} The second button + tag option (options[0])
     * @param {isEnd} Whether the question will end the game or not (default is false)
    */
    function createQuestion(storyText, firstOptionButton, secondOptionButton, isEnd = false)
    {
        return {//blame JavaScript for forcing me to put this brace here
            story: storyText,
            end: isEnd,

            options:
            [
                firstOptionButton,
                secondOptionButton
            ]
        };
    }

    /**
     * Convience function to create buttons that onClick to the next question
     * @param {nextQuestion} The question to go to if clicked (parameter of play())
     * @param {buttonText} The text on the button
    */
    function createOptionButtonTag(nextQuestion, buttonText)
    {
        if (nextQuestion === undefined || buttonText === undefined)
            return "";
        else
            return `<button type=\"button\" onclick=\"play(${nextQuestion})\">${buttonText}</button>`;
    }


    gameText =//above functions greatly simplify populating the game with text and options
    {
        intro:
        {
            greeting:       `Placeholder greeting text (name: ${playerName})`,
            introText:      "Placeholder introduction text",
            startButton:    "Placeholder startButton text"
        },

        questions://an array of storylines and decisions
        [
            createQuestion
            (
                "Placeholder story text (questions: 0)",
                createOptionButtonTag(1, "Placeholder option text (option: 0)"),
                createOptionButtonTag(1, "Placeholder option text (option: 1)")
            ),
            createQuestion
            (
                "Placeholder story text (questions: 1)",
                createOptionButtonTag(2, "Placeholder option text (option: 0)"),
                createOptionButtonTag(2, "Placeholder option text (option: 1)")
            ),
            createQuestion
            (
                "Placeholder ending text (questions: 2)",
                "", "",//skip buttons
                true//it's an ending
            )
        ]
    };
}
