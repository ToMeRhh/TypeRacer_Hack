firstWord = null;
for (i=0; i<99; ++i) {
    firstWord = document.getElementById("nhwMiddlegwt-uid-" + i);
    if (firstWord != null) {
        break;
    }
}
answer = null;
for (i=0; i<99; ++i) {
    answer = document.getElementById("nhwRightgwt-uid-" + i);
    if (answer != null) {
        break;
    }
}
console.log("Found text-boxes, the full text is:");
console.log(str);
str = firstWord.innerText + answer.innerText;
var box = document.getElementsByClassName("txtInput")[0];
box.setAttribute("onkeyup", "a()");
var words = str.split(" ");


var i=0;
function a(){
box.value="";
	box.value = words[i++].substring(0, words[i-1].length);
}
