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
"use strict";

/**
 * The player's name
 * @type {String}
 */
let playerName = "";

/**
 * The text to use for the game and the flow of the questions
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
 * Sets playerName based on nameField and starts the game
*/
function setup()
{
    playerName = nameField.value;

    if (playerName === "")
        gameTextArea.innerHTML = "Whoops! Looks like you've forgotton to enter your name. Try again.";
    else
    {
        wipeGameplayAreas();

        setupGameText();

        intro();//in game.js
    }
}

/**
 * Wipes the innerHTML of gameForm, gameTextArea and gameInteractArea
*/
function wipeGameplayAreas()
{
    gameForm.innerHTML = "";
    gameTextArea.innerHTML = "";
    gameInteractArea.innerHTML = "";
}

/**
 * Creates an object that is stored in gameText
*/
function setupGameText()
{
    /**
     * Convience function to create questions for the user to answer
     * @param {storyText} The storylinefor the question
     * @param {firstOptionButton} The first button + tag option (options[0])
     * @param {secondOptionButton} The second button + tag option (options[0])
    */
    function createQuestion(storyText, firstOptionButton, secondOptionButton)
    {
        return {//blame JavaScript for making me for put this brace here
            story: storyText,

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

    gameText =
    {
        intro:
        {
            greeting:       `Placeholder greeting text (name: ${playerName})`,
            introText:      "Placeholder introduction text",
            startButton:    "Placeholder startButton text",
        },

        outro:
        {

        },

        questions://an array of storylines and decisions
        [
            createQuestion
            (
                "Placeholder story text (story: 0)",
                createOptionButtonTag(1, "Placeholder option text (option: 0)"),
                createOptionButtonTag(1, "Placeholder option text (option: 1)")
            ),

            createQuestion
            (
                "Placeholder story text (story: 1)",
                createOptionButtonTag(0, "Placeholder option text (option: 0)"),
                createOptionButtonTag(0, "Placeholder option text (option: 1)")
            ),

        ]
    };
}
