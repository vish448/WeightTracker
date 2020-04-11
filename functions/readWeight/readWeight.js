const fetch = require('node-fetch');

exports.handler = async() => {
  const response = await fetch(
    'https://graphql.fauna.com/graphql',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_API_SECRET}`
      },
      body: JSON.stringify({
        query: `
        {allweight{data{weight}}}
        `
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    console.log(response.data.allweight.data.map(w=>console.log(w.weight)));

  return {
    statusCode: 200,
    body: "Success"
  }
}

/*const fauna = require("faunadb");
const q = fauna.query;

const client = new fauna.Client({
  secret : process.env.FAUNA_API_SECRET
})


//console.log('client'+client);

exports.handler = async (event) => {
  console.log(event);
  return client.query(
    //q.Get(q.Ref(q.Collection('addWeight'),'262356781205815827'))
    //q.Paginate(q.Match(q.Ref('indexes/weight')))
    q.Map(
      q.Paginate(q.Match(q.Ref('indexes/weight'))),
      //q.Lambda("X", q.Get(q.Var("X"))),
      q.Select(['weight'])
    )
  )
  .then(ret => {
    console.log(ret.data)
    return {
    statusCode: 200,
    body: JSON.stringify(ret.data)
    } 
  })
}*/
