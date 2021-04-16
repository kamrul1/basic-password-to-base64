var base64 = require('base-64');
var utf8 = require('utf8');

exports.handler = async function (event, context) {

    // let payloadBody = {
    //     message: "",
    //     otherMsg:""
    // }

    let response = {
        statusCode:500,
        body: "Not processed, Netlify function is not working"
    }
    console.log(event.httpMethod);

    if(event.httpMethod!=="POST"){
        return {...response, statusCode: 400, body:"This function only works via a post request"}
    };

    console.log(event.body);
    const {username, password} = JSON.parse(event.body);

    // let base64Script = base64.encode(userName+":"+password);

    let stringToEncode = utf8.encode(`${username}:${password}`);
    console.log(stringToEncode);

    let reponseBody = JSON.stringify({
        "Authorization": "Basic "+base64.encode(stringToEncode)
    });
    
    // payloadBody = {...payloadBody, message:base64Script};

    // let body = event.body;

    // console.log(JSON.stringify());


    return {...response, statusCode:200, body: reponseBody}

}