const CHAR_REGEX = /^[a-zA-Z]$/;
checkForChar = (inp) => {
    const validateString = inp.split('').find(Element => {
        return !CHAR_REGEX.test(Element);
    })
    console.log(validateString);
}