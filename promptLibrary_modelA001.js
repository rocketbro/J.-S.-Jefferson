
function createA001PromptEngine(deviceUser, timeOfDay, weatherData) {
    return {
        standard: {
            wakeUpAlarms: {
                get alarm1() {
                    const prompts = [
                        `Good morning ${deviceUser.address}. The time is ${timeOfDay}. 
                        Take a few minutes to wake up - I shall be back momentarily.`,

                        `Good morning ${deviceUser.address}. The time is now ${timeOfDay}. 
                        Please take a moment to awaken fully; I shall return shortly.`,

                        `Greetings ${deviceUser.address}. It is ${timeOfDay}, 
                        I suggest a brief respite before I rejoin you to begin the day.`,

                        `Good day ${deviceUser.address}. The hour is ${timeOfDay}. 
                        I am prescribing a tranquil awakening; take a few minutes 
                        and I shall be back momentarily.`,

                        `Greetings ${deviceUser.address}. It's currently ${timeOfDay}. 
                        May I suggest a moment of repose - I have a brief list of matters 
                        to attend to and I shall return directly.`
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                },
                get alarm2() {
                    const prompts = [
                        `I have returned ${deviceUser.address}. If you would be so kind as to get yourself out of your 
                        sleeping quarters, I shall meet you directly in the bathroom.`,
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                }
            },
            morningBath: {
                get warning() {
                    const prompts = [
                        `${deviceUser.address}, I will begin drawing your bath in 3 minutes.`
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                },
                get setTimer() {
                    const prompts = [
                        `Greetings ${deviceUser.address}. I trust you had a restful night. I am now starting an *8* minute 
                        timer for your morning bath. Do try not to spend too long staring at the walls, and perhaps hang 
                        your towel over the curtain rod to dry for the time being.`,
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                }
            },
            weatherReport: {
                get brief() {
                    const prompts = [
                        `${deviceUser.address}, I have a brief update on the weather. Currently, the temperature 
                        is ${weatherData.temp}, and the sun will rise at ${weatherData.sunrise}. The high will be 
                        ${weatherData.high}. Remember to collect your watch and headphones, and have a 
                        sip of water before you leave. Enjoy your run ${deviceUser.address}!`,

                        `Greetings, ${deviceUser.address}. Allow me to provide a succinct weather update. Presently, the temperature 
                        stands at ${weatherData.temp}, and the sun shall grace us with its presence at ${weatherData.sunrise}. The forecasted high 
                        for the day is ${weatherData.high}. Before you venture out, do remember to gather your watch and headphones, and 
                        perhaps indulge in a sip of water. Wishing you a delightful outing, ${deviceUser.address}!`,

                        `${deviceUser.address}, may I offer you a brief weather update? The current temperature reads ${weatherData.temp}, 
                        with sunrise expected at ${weatherData.sunrise}. We anticipate a high of ${weatherData.high} for the day. 
                        Do ensure you have your essentials at hand before departing.`,

                        `Good day, ${deviceUser.address}. I thought it prudent to inform you of the weather conditions. At present, 
                        the temperature is ${weatherData.temp}, and sunrise is scheduled for ${weatherData.sunrise}. A high of 
                        ${weatherData.high} is expected. Please take appropriate precautions before stepping outside.`,

                        `${deviceUser.address}, if I may, a quick weather update. The current temperature is ${weatherData.temp}, 
                        with sunrise expected at ${weatherData.sunrise}. We're looking at a high of ${weatherData.high} 
                        for the day. Do ensure you're prepared for the weather ahead.`,

                        `Good morning, ${deviceUser.address}. I've taken the liberty of checking the weather for you. 
                        Currently, it's ${weatherData.temp}, and sunrise is expected at ${weatherData.sunrise}. 
                        The day's high is forecasted to be ${weatherData.high}. Please plan your activities accordingly.`,
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                },
                get full() {
                    const prompts = [
                        `${deviceUser.address}, I have collected and prepared today's weather report. 
                        It appears that at the moment, the temperature outside is ${weatherData.temp}, 
                        and today shall be ${weatherData.conditions}. The high will be ${weatherData.high}? While the 
                        low will be ${weatherData.low}. Humidity is ${weatherData.humidity} percent? And the 
                        probability of rain is ${weatherData.precipitationChance} percent. Choose your wardrobe accordingly!`,

                        `Greetings, ${deviceUser.address}. I've meticulously curated today's weather report for your perusal. 
                        The current temperature stands at ${weatherData.temp}, and the prevailing conditions are ${weatherData.conditions}. 
                        We anticipate a high of ${weatherData.high}, while the low shall dip to ${weatherData.low}. 
                        Humidity levels are at ${weatherData.humidity} percent, with a ${weatherData.precipitationChance} percent 
                        chance of rain. May I suggest attire suitable for the occasion?`,

                        `${deviceUser.address}, here is the comprehensive weather report for today. The current temperature reads 
                        ${weatherData.temp}, with ${weatherData.conditions} conditions expected. A high of ${weatherData.high} 
                        is anticipated, while the low will be ${weatherData.low}. Humidity stands at ${weatherData.humidity} percent, 
                        with a ${weatherData.precipitationChance} percent chance of rain. Please take appropriate measures.`,

                        `Good day, ${deviceUser.address}. I've compiled a detailed weather update for your consideration. 
                        Presently, it's ${weatherData.temp}, and we're expecting ${weatherData.conditions}. The high temperature 
                        will reach ${weatherData.high}, with a low of ${weatherData.low}. Humidity stands at ${weatherData.humidity} percent, 
                        and there's a ${weatherData.precipitationChance} percent chance of rain. Please plan your day accordingly.`,

                        `${deviceUser.address}, if I may, here's the detailed weather update for today. The current temperature is 
                        ${weatherData.temp}, with ${weatherData.conditions} conditions expected. We anticipate a high of 
                        ${weatherData.high} and a low of ${weatherData.low}. Humidity stands at ${weatherData.humidity} percent, 
                        with a ${weatherData.precipitationChance} percent chance of rain. Please be mindful of the weather conditions.`,

                        `Good morning, ${deviceUser.address}. I've gathered all the pertinent details for today's weather. 
                        The current temperature is ${weatherData.temp}, and we're expecting ${weatherData.conditions}. 
                        The high temperature will reach ${weatherData.high}, and the low will be ${weatherData.low}. 
                        Humidity stands at ${weatherData.humidity} percent, with a ${weatherData.precipitationChance} percent 
                        chance of rain. Please plan your day accordingly and stay informed of any weather changes.`,
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                }

            },
            alerts: {
                get coffeeIsReady() {
                    const prompts = [
                        `${deviceUser.address}, the coffee is ready. I recommend a glass of water beforehand.`
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                },
                get departure() {
                    const prompts = [
                        `${deviceUser.address}, it would be prudent to begin preparations for your departure in the 
                        next quarter hour. \n\nIf I may, do not neglect to pack yourself a lunch. 
                        And remind her lady-ship to bring meat for the dog if she is to join you.`,

                        `${deviceUser.address}, we must be going. Please make your way to the automobile. 
                        Forgive my presumption ${deviceUser.address}, but if the little lady is to come along, 
                        do remember the paddle.`
                    ];
                    return prompts[Math.floor(Math.random() * prompts.length)];
                }
            }

        }
    };
}

const A001PromptEngine = createA001PromptEngine(deviceUser, timeOfDay, weatherData);
