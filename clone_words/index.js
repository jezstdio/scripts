// With this script you can download not existing english words from thisworddoesnotexist.com
// max: download this amount of words
// count: start counting from this number
// waiting: wait this many times before downloading the next person. It's necessary, because otherwise the site will give you the same picture.

const { execSync } = require("child_process");
const fs = require("fs");
const HTMLParser = require("node-html-parser");

let count = 1;
const max = 10;
const waiting = 1;

let timeout = null;
let html = null;

timeout = setInterval(async () => {
    console.log(`downloading ${count}. word`);

    try {
        html = execSync(`curl https://www.thisworddoesnotexist.com -s`).toString();

        fs.appendFileSync("words.txt", `${HTMLParser.parse(html).getElementById("definition-word").textContent}\n`)
    } catch(err) {
        console.log(err);
        count--;
    }

    if (count === max) {
        console.log("done");
        clearTimeout(timeout);
    }

    count++;
}, waiting);