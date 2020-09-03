const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    console.log(event);
    const fields = JSON.parse(event.body);
    try {
        const createdWeight = await table.create([{ fields }],{typecast: true});
        return formattedReturn(200, createdWeight);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};