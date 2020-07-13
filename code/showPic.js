function showPic(pic){
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    // 针对元素使用，此处得是pic.getAttribute,不能用document
    var text = pic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue  = text;
}

function countBodyChildren(){
    var body_element = pic.getElementsByTagName('body')[0];
    // alert(body_element.childNodes.length)
    alert(body_element.nodeType)
}

window.onload = countBodyChildren