function popup(e) {
    console.log(guidGenerator())
  chrome.tabs.create({url: "http://localhost:8080/index.html?id=" + guidGenerator()});
}

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

document.addEventListener('DOMContentLoaded', function() {
    var plusBtn = document.getElementById('click-this');
    plusBtn.addEventListener('click', popup);
})