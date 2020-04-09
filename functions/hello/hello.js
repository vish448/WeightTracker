const random = require('random-name');

async function hello(){
    return Promise.resolve(`Hey ${random.first()}`);
}

exports.handler = async () => {
    try {
        const body = await hello();
        return { statusCode: 200, body};

    }catch(err){
        return { statusCode: 500, body: err.toString()};

    }
};