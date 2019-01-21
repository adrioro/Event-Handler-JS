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

//onmouseenter

var element = document.querySelector("#onmouseenterLink");
element.onmouseenter = function () {
    document.write("onmouseenter done! Refresh page to try again.");
}