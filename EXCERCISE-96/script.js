function validate_regexp(value) {
    return toString.call(value) === '[object RegExp]';
}
// * Changes Done 