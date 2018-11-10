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

let playerName = "";
let gameText;//object with all text to use for the game


const gameForm = document.getElementById("gameForm");
const nameField = document.getElementById("nameField");

const gameTextArea = document.getElementById("gameTextArea");
const gameInteractArea = document.getElementById("gameInteractArea");


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

function wipeGameplayAreas()
{
    gameForm.innerHTML = "";
    gameTextArea.innerHTML = "";
    gameInteractArea.innerHTML = "";
}

function setupGameText()
{
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
            greeting:       `greeting ${playerName}`,
            introText:      "introText",
            startButton:    "startButton",
        },

        questions://an array
        [
            {
                story: "story0",
                options://both just go back and forth between questions 0 and 1 so far
                [
                    createOptionButtonTag(1, "option0"),
                    createOptionButtonTag(1, "option0")
                ]
            },

            {
                story: "story1",
                options://both just go back and forth between questions 0 and 1 so far
                [
                    createOptionButtonTag(0, "option0"),
                    createOptionButtonTag(0, "option1")
                ]
            },

        ]
    };
}
