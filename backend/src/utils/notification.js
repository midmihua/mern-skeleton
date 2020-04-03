class Notification {

    enterValidField(field) {
        return `Please enter a valid ${field}`;
    }

    entityCreated(entity) {
        return `${entity} created successfully`;
    }

    entityNotCreated(entity) {
        return `${entity} is not created`;
    }

    entityUpdated(entity) {
        return `${entity} updated successfully`;
    }

    entityNotUpdated(entity) {
        return `${entity} is not updated`;
    }

    entityRemoved(entity) {
        return `${entity} removed successfully`;
    }

    entityNotRemoved(entity) {
        return `${entity} is not removed`;
    }

    entityNotFound(entity) {
        return `${entity} can not be found`;
    }

    fieldExists(field) {
        return `${field} already exists`;
    }

    fieldSymbolsEqualOrMore(field, count) {
        return `${field} should be ${count} symbol(s) or more`;
    }

    fieldSymbolsBetween(field, min, max) {
        return `${field} should be between ${min} and ${max} symbols`;
    }

    collectionNotFetched(collection) {
        return `${collection} collection not fetched`;
    }

    collectionFetched(collection) {
        return `${collection} collection fetched successfully`;
    }

    incorrectEntityProvided(entity) {
        return `Incorrect ${entity} provided`;
    }

    incorrectHeaderValue(header) {
        return `${header} value is incorrect`;
    }

    generalIncorrectData() {
        return `Validation failed due to incorrect data`;
    }

    generalNotAuthenticated() {
        return `You are not authenticated`;
    }

    paramsIdNotFound(prop) {
        return `params.${prop} is not provided or does not exist`;
    }
}

module.exports.notify = new Notification();
