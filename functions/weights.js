const formattedReturn = require('./helpers/formattedReturn');
const getWeights = require('./helpers/getWeights');
const createWeights = require('./helpers/createWeights');
const deleteWeight = require('./helpers/deleteWeight');
/*const updateCourse = require('./helpers/updateCourse');*/
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getWeights(event);
    } else if (event.httpMethod === 'POST') {
        return await createWeights(event);
    } /*else if (event.httpMethod === 'PUT') {
        return await updateCourse(event);
    }*/ else if (event.httpMethod === 'DELETE') {
        return await deleteWeight(event);
    } else {
        return formattedReturn(405, {});
    }
};