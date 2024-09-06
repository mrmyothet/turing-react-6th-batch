var XMLHttpRequest = require('xhr2');

let url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
//     .then(data => data.json())
//     .then(json => console.log(json.toString().length));


// custom Fetch
function customFetch(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        request.onload = function () {
            console.log('Data received');
            if (request.status == 200) {
                resolve(JSON.parse(request.responseText));
            }
        }

        request.onerror = function (err) {
            console.error('Error ', err);
        }
    });
}

customFetch(url)
    .then(json => console.log(json))