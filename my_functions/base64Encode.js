var base64 = require('base-64');
var utf8 = require('utf8');

exports.handler = async function (event, context) {

    let response = {
        statusCode:500,
        body: "Not processed, Netlify function is not working"
    }

    if(event.httpMethod!=="POST"){
        return {...response, statusCode: 400, body:"This function only works via a post request"}
    };


    if(event.body===undefined){
        return  {...response, statusCode:400, body: "Payload is empty"}
    }

    const {username, password} = JSON.parse(event.body);

    let stringToEncode = utf8.encode(`${username}:${password}`);
    
    let reponseBody = JSON.stringify({
        "Authorization": "Basic "+base64.encode(stringToEncode)
    });
    
    return {...response, statusCode:200, body: reponseBody}

}