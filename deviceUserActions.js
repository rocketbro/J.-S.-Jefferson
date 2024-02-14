
/*

SET UP USER ACTIONS

This is where you should create all the actions you wish Jefferson to complete. 
Here is the definition of the Action class:

    class Action {
        constructor(isEnabled, scheduleForDays, hour, minutes = 0, payload) {
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

// Set up your actions here:
const test = new Action(
    false,
    EVERY_DAY,
    currentHour, // 
	currentMinutes, // minutes
    new Payload(A001PromptEngine.standard.wakeUpAlarms.alarm1)
);



const alarm1 = new Action(
    true,
    EVERY_DAY,
    4, // hour
    currentDay === SUNDAY ? 25 : 55, // minutes
    new Payload(A001PromptEngine.standard.wakeUpAlarms.alarm1)
);



const alarm2 = new Action(
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : 5, // hour
    currentDay === SUNDAY ? 30 : 0, // minutes
    new Payload(A001PromptEngine.standard.wakeUpAlarms.alarm2)
);


const bathTimeWarning = new Action(
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : 5, // hour
    currentDay === SUNDAY ? 32 : 2, // minutes
    new Payload(A001PromptEngine.standard.morningBath.warning)
);

const bathTime = new Action(
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : 5, // hour
    currentDay === SUNDAY ? 35 : 5, // minutes
    new Payload(A001PromptEngine.standard.morningBath.setTimer, PayloadCommand.setTimer)
);

const weatherReport = new Action(
    true,
    EVERY_DAY,
    currentDay === SUNDAY ? 4 : 5, // hour
    currentDay === SUNDAY ? 48 : 18, // minutes
    new Payload(A001PromptEngine.standard.weatherReport.full, PayloadCommand.getWeather)
);


// Set up your routines here:
const morningRoutine = new Routine(
    [test, alarm1, alarm2, bathTimeWarning, bathTime, weatherReport], // pass in all actions that you want to run
    true // enable or disable this routine
)

// Be sure to include all routines in this array or they will not run
const allSavedRoutines = [
    morningRoutine
]
