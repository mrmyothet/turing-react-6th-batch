let url = new URL("https://example.com:8000/path/name?q=term#fragment");
console.log(url);
console.log(url.hash);
console.log(url.host);
console.log(url.hostname);
console.log(url.href);
console.log(url.origin);
console.log(url.port);
console.log(url.protocol);
console.log(url.search);
console.log(url.searchParams);

const uri = "https://mozilla.org/?x=hello java";
const encoded = encodeURI(uri);
console.log("Encoded ", encoded); // https://mozilla.org/?x=hello%20java

const newUri = decodeURI(encoded);
console.log("Decoded ", newUri); // https://mozilla.org/?x=hello java
