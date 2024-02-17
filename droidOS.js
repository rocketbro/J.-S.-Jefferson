//
// J. S. Jefferson
// A digital butler from the imagination of Asher Pope
// asher@asherpope.com
// 2024.01.31
// 
// This script was specifically written for execution in iOS Shortcuts.
// droidOS version: 1.1.0
// 


// MARK: SYSTEM CONFIG
const today = new Date();
const currentHour = today.getHours();
const currentMinutes = today.getMinutes();
const currentDay = today.getDay();

const epochTime = today.getTime();
function formatTime(epochTime) {
    const date = new Date(epochTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine AM or PM
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Add leading zero to minutes if needed
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    // Construct the formatted time string
    const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;

    return formattedTime;
}

const timeOfDay = formatTime(epochTime);

const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;

const EVERY_DAY = [
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
]

const PayloadCommand = {
    speak: `SPEAK`,
    setTimer: `SET_TIMER`,
    getWeather: `GET_WEATHER`,
    playMusic: `PLAY_MUSIC`

}

class Payload {
    constructor(prompt = ``, cmd = PayloadCommand.speak) {
        this.prompt = prompt;
        this.cmd = cmd;
    }
}

function deliverPayload(payload) {
    const payloadString = JSON.stringify(payload);
    console.log(`DELIVERING PAYLOAD:\n\n${payloadString}`);
    document.write(payloadString);
}

function generateRandomId() {
    const textCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const min = Math.pow(10, 14); // Minimum 15-digit number
    const max = Math.pow(10, 15) - 1; // Maximum 15-digit number

    // Generate 10 random text characters
    const randomText = Array.from({ length: 10 }, () => textCharacters.charAt(Math.floor(Math.random() * textCharacters.length))).join('');

    // Generate the remaining random digits
    const randomDigits = Math.floor(Math.random() * (max - min + 1)) + min;

    // Combine the text and digits
    return randomDigits.toString() + randomText;
}

function getRandomValueFromDictionary(dictionary) {
    const keys = Object.keys(dictionary);

    if (keys.length === 0) {
        return;
    }

    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomValue = dictionary[randomKey];

    return randomValue;
}



// MARK: ACTION FRAMEWORK CONFIG
class Action {
    constructor(tag = "Untitled Action", isEnabled, scheduleForDays, hour, minutes = 0, payload) {
        this.tag = tag;
        this.isEnabled = isEnabled;
        this.scheduleForDays = scheduleForDays;
        this.hour = hour; // for an always-on action, pass currentHour
        this.minutes = minutes; // for an always-on action, pass currentMinutes
        this.payload = payload;
    }
}

class Routine {
    constructor(actions, isEnabled) {
        this.actions = actions;
        this.isEnabled = isEnabled
    }

    get tags() {
        return this.actions.map(action => action.tag);
    }
}

function runActionWithTag(tag) {
    for (const routine of allSavedRoutines) {
        for (const action of routine.actions) {
            if (action.tag === tag) {
                deliverPayload(action.payload)
            }
        }
    }
}

function deliverAllActionTags(routines) {
    let allActionTags = [];
    
    routines.forEach(routine => {
        allActionTags = allActionTags.concat(routine.tags);
    });
    
    document.write(allActionTags);
}

