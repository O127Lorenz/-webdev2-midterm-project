//*-_-____________________________________________________________________________javascript test

1//synchronous JS

console.log(1)
console.log(2)
console.log(3)
console.log(4)

2//Asynchronous JS
 
console.log(1)
console.log(2)

setTimeout(() => {
          console.log('callback function is fired');
});

console.log(3)
console.log(4)

3//Simple Http Request using XMLHttpRequest

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4) {
        console.log(request.responseText);
    }
});

request.open('GET', 'pastelink');
request.send();

4//using callback return json link 

onst getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    request.open("GET", "PASTE LINK");
    request.send();
};
getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


5//promise json
const getTodos = () => {
    return new = Promise((resolve, rejected) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 
            200) {
                const data = JSON.parse(request.responseText);
                callback(undefined, data);
             } else if(request.readyState === 4) {
                callback('could not fetch data', undefined)
             }
        });
        request.open('GET', 'paste link')
        request.send()
    });


}

*//
