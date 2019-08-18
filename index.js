const nlp = require('compromise');

exports.handler = async (event) => {
  let body = JSON.parse(event.body);
  let names = body.names;
  let name = body.name;

  let res =  nlp(name, names).people().data();
  return {
    statusCode: 200,
    headers: {
      "x-custom-header" : "my custom header value"
    },
    body: JSON.stringify({ people: res, names: names })
  };
};

