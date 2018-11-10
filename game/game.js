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

function intro()
{
    gameTextArea.innerHTML += gameText.intro.greeting + "</br></br>";//eraces any existing error text
    gameTextArea.innerHTML += gameText.intro.introText + "</br></br>";

    gameInteractArea.innerHTML += `<button type=\"button\" onclick=\"play()\">${gameText.intro.startButton}</button>`;//play() button
}

function play(question)
{
    wipeGameplayAreas();

    if (question === undefined)
    {
        question = 0;
    }

    //let i = 0;
    //for (let i = 0; i < numOfQuestions; ++i)
    //{
        gameTextArea.innerHTML += gameText.questions[question].story + "</br></br>";

        gameInteractArea.innerHTML += gameText.questions[question].options[0];
        gameInteractArea.innerHTML += gameText.questions[question].options[1];
    //}
}
