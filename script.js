function alignWidth() {
    var imageWidth = document.getElementsByClassName('project-img').offsetWidth;
    var headers = document.getElementsByClassName('project-subheader');
    for(i=0; i<headers.length; i++) {
        headers[i].style.width = imageWidth;
    }
}

function runCode() {
    alert("hello world");
}