// With this script you can download not existing persons from thispersondoesnotexist.com
// max: download this amount of image
// count: start counting from this number
// waiting: wait this many times before downloading the next person. It's necessary, because otherwise the site will give you the same picture.

const { execSync } = require("child_process");

let count = 1;
const max = 100;
const waiting = 2000;

let timeout = null;

timeout = setInterval(() => {
    console.log(`downloading ${count}. image`);

    try {
        execSync(`curl https://thispersondoesnotexist.com/image -o persons/person_${count}.jpeg -s`);
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