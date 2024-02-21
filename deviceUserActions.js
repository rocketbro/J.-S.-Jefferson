
/*

SET UP USER ACTIONS

This is where you should create all the actions you wish Jefferson to complete. 
Here is the definition of the Action class:

    class Action {
        constructor(tag = "Untitled Action", isEnabled, scheduleForDays, hour, minutes = 0, payload) {
            this.tag = tag;
            this.isEnabled = isEnabled;
            this.scheduleForDays = scheduleForDays;
            this.hour = hour;
            this.minutes = minutes;
            this.payload = payload;
        }
    }

An example action follows below. Note that for an always-on action, you can
pass 'currentMinutes' and 'currentHour' to the action constructor. This means
the action will trigger anytime that iOS runs the script.

*/


// Use hourModifier to bump your all of your actions forward or backward by hour increments.
// Default is 0 (does not change anything):
const hourModifier = 0;

// Use the modify function below to easily factor the hourModifier into any number:
function m(num) {
    return num + hourModifier;
}



// Set up your actions here:
const test = new Action(
    "Test Action",
    false,
    EVERY_DAY,
    currentHour, // 
	currentMinutes, // minutes
    new Payload("Yolo my dude")
);



const alarm1 = new Action(
    "Alarm 1",
    true,
    EVERY_DAY,
    m(4), // hour
    currentDay === SUNDAY ? 25 : 55, // minutes
    new Payload(A001PromptEngine.standard.wakeUpAlarms.alarm1)
);



const alarm2 = new Action(
    "Alarm 2",
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : m(5), // hour
    currentDay === SUNDAY ? 30 : 0, // minutes
    new Payload(A001PromptEngine.standard.wakeUpAlarms.alarm2)
);


const bathTimeWarning = new Action(
    "Bath Time Warning",
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : m(5), // hour
    currentDay === SUNDAY ? 32 : 2, // minutes
    new Payload(A001PromptEngine.standard.morningBath.warning)
);

const bathTime = new Action(
    "Bath Time Timer",
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : m(5), // hour
    currentDay === SUNDAY ? 35 : 5, // minutes
    new Payload(A001PromptEngine.standard.morningBath.setTimer, PayloadCommand.setTimer)
);

const weatherReport = new Action(
    "Weather Report (iOS only)",
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : m(5), // hour
    currentDay === SUNDAY ? 48 : 18, // minutes
    new Payload(A001PromptEngine.standard.weatherReport.full, PayloadCommand.getWeather)
);


const amMusic = new Action(
    "AM Music (iOS only)",
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : m(5), // hour
    currentDay === SUNDAY ? 49 : 19, // minutes
    new Payload("AM", PayloadCommand.playMusic)
);


// Set up your routines here:
const morningRoutine = new Routine(
    [ // pass in all actions that you want to run
        test, 
        alarm1, 
        alarm2, 
        bathTimeWarning, 
        bathTime, 
        weatherReport, 
        amMusic
    ],
    true // enable or disable this routine
)

// Be sure to include all routines in this array or they will not run
const allSavedRoutines = [
    morningRoutine
]
