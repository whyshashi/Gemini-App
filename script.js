console.log("hello");
const inputText = document.getElementById('inputText').value;
const resultDiv = document.getElementById('result');
const button1 = document.querySelectorAll(".one");
const button2 = document.querySelectorAll(".two");
const button3 = document.querySelectorAll(".tree");
button1.addEventListener("click",processText('generate'));
button2.addEventListener("click",processText('summarize'));
button3.addEventListener("click",processText('translate'));


import {api_key} from './api_key.js';
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


async function run(action) {
    let prompt = action;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    resultDiv.innerText="";
    resultDiv.innerText = text;
  }

run("horse");

  function processText(action) {
     
    // Simulate processing
    let resultText = '';
    if (action === 'generate') {
        run(`generate text on the topic : ${inputText}`);
    } else if (action === 'summarize') {
        run(`summarize the given text : ${inputText}`);
    } else if (action === 'translate') {
        run(`translate this text to english : ${inputText}`);
    }
}
