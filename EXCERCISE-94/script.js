function validateObject(text) {
    return text && typeof text === 'object' && text.constructor === Object;
}
// * Changes Done