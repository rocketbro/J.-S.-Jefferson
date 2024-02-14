
// Enter up your user info here
const deviceUser = {
    givenName: '',
    surname: '',
    sex: '', // Must be 'MALE' or 'FEMALE' (if this is confusing read Genesis)
    isActive: true // If this is false, Jefferson will do nothing, regardless of routines & actions
};

if (deviceUser.sex === 'MALE') {
    deviceUser.addressOptions = {
        1: 'my lord',
        2: 'sir'
    };
    deviceUser.spouseAddress = {
        1: 'her ladyship'
    };
} else if (deviceUser.sex === 'FEMALE') {
    deviceUser.addressOptions = {
        1: 'my lady',
        2: 'ma\'am'
    };
    deviceUser.spouseAddress = {
        1: 'his lordship'
    };
}

Object.defineProperty(deviceUser, 'address', {
    get: function () {
        return getRandomValueFromDictionary(this.addressOptions);
    }
});
