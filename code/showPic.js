function showPic(pic){
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    
}

function countBodyChildren(){
    var body_element = document.getElementsByTagName('body')[0];
    // alert(body_element.childNodes.length)
    alert(body_element.nodeType)
}

window.onload = countBodyChildren