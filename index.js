//Click the paragraph with id = "someText"

var element = document.querySelector("#someText");
element.onclick = function () {
    console.log("Text clicked!");
}

//Click the link with id = "link"

var element = document.querySelector("#link");
element.onclick = function () {
    console.log("Link clicked!");
}