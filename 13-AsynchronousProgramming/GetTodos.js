// https://stackoverflow.com/questions/32604460/xmlhttprequest-module-not-defined-found

var XMLHttpRequest = require('xhr2');

function getToDo(callback) {
    let url = "https://jsonplaceholder.typicode.com/todos";
    let request = new XMLHttpRequest();
    request.open("Get", url);
    request.send();

    request.onload = function () {
        console.log("Data Received");
        if (request.status == 200) {
            callback(JSON.parse(request.responseText));
        }
    };

    request.onerror = function (err) {
        console.error("Error ", err);
    };
}

getToDo((todos) => {
    console.log("Todos ", todos);
});