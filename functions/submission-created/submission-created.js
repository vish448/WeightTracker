const fetch = require('node-fetch');
exports.handler = async (event) => {
  console.log(event)
  const body = JSON.parse(event.body)
  const {weight} = body.payload.data
  const response = await fetch(
    'https://graphql.fauna.com/graphql',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_API_SECRET}`
      },
      body: JSON.stringify({
        query: `
          mutation($weight:Float!){
            createAddWeight(data:{
              weight: $weight
            }) {
              _id
            }
          }
        `,
        variables: {weight: parseFloat(weight)},

      }),
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    console.log(response);

  return {
    statusCode: 200,
    body: "Boop"
  }
}
