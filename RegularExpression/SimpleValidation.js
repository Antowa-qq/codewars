function validateUsr(username) {

    return /^[a-z0-9_]{4,16}$/.test(username);

}

console.log(validateUsr('asd43 34'));

