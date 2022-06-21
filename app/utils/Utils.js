function isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
    if (value == "") {
        setEmailError("")
    }
    else if (isValidEmail(value)) {
        setEmailError("")
    }
    else {
        setEmailError("Email inválido")
    }
}

function validatePassword(value, setPasswordError) {
    if (value.length < 9) {
        setPasswordError("A senha deve ter 9 caracteres")
    } else {
        setPasswordError("")
    }
}

function calculateAngle(coordinates) {
    let startLat = coordinates[0]["latitude"]
    let startLng = coordinates[0]["longitude"]
    let endLat = coordinates[1]["latitude"]
    let endLng = coordinates[1]["longitude"]
    let dx = endLat - startLat
    let dy = endLng - startLng

    return Math.atan2(dy, dx) * 180 / Math.PI
}

const utils = {
    isValidEmail,
    validateEmail,
    validatePassword,
    calculateAngle
};

export default utils;