// codewars.com
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePinCode(pin) {
    let result;
    let array = pin.split('');

    if (array.length == 4 || array.length == 6) {
        for (let i = 0; i < array.length; i++) {
            let num = parseInt(array[i]);
            if (!isNaN(num)) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
    } else {
        result = false;
    }

    return result;
}

console.log(validatePinCode('123 '));
