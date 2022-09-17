function validateJSONObject(str) {
    try {
        JSON.parse(str);
    }
    catch (err) {
        return false;
    }
    return true
}