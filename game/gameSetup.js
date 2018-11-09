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
const gameTextArea = document.getElementById("gameTextArea");
const gameInteractArea = document.getElementById("gameInteractArea");


function setup()
{
    playerName = document.getElementById("nameField").value;

    if (playerName == "")
        gameInteractArea.innerHTML = "Whoops! Looks like you've forgotton to enter your name. Try again.";
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
    gameText =
    {
        intro:
        {
            greeting: "greeting",
            introText: "introText",
            startButton: "startButton",
        },

        questions://an array
        [
            {
                story: "story",
                options: ["option0", "option1", "option2", "option3"]
            },

        ]
    };
}
