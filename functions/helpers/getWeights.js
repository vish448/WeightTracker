const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const weights = await table.select().firstPage();
        const formattedCourses = weights.map((weight) => ({
            id: weight.id,
            ...weight.fields,
        }));
        return formattedReturn(200, formattedCourses);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
