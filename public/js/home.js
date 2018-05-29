var nav = document.getElementById('nav');
var oA = nav.getElementsByTagName('a');

var old = oA[0], news = oA[0];
for (var i = 0; i < oA.length; i++) {
    oA[i].onclick = function () {
        news = this;
        old.className = '';
        news.className = 'active';
        old = news;
    }
}