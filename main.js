
// MARK: MAIN 'FUNCTION'

// Check for active user
if (deviceUser.isActive) {

    // Check for enabled routines
    for (const routine of allSavedRoutines) {
        if (routine.isEnabled) {

            for (const action of routine.actions) {

                // Check for actions matching current day
                if (action.scheduleForDays.includes(currentDay)) {
                    if (action.isEnabled) {

                        // Check for actions matching current time
                        if (action.hour === currentHour && action.minutes === currentMinutes) {
                            deliverPayload(action.payload);
                        }
                    }
                }
            }
        }
    }
}
