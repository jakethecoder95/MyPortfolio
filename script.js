function alignWidth() {
    var imageWidth = document.getElementsByClassName('project-img').offsetWidth;
    var headers = document.getElementsByClassName('project-subheader');
    for(i=0; i<headers.length; i++) {
        headers[i].style.width = imageWidth;
    }
}

function disabledMessege() {
    alert("This link is temporarily disabled until some bugs are fixed.  Thank you for your patience");
}
