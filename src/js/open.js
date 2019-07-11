// function openUrl(url) {
// var a = $('<a href="' + url + '" target="_blank"></a>')[0];
// var e = document.createEvent('MouseEvents');
// e.initEvent('click', true, true);
// a.dispatchEvent(e);
// }
var requetUrl = 'http://10.200.27.110:3600/test';
var tempUrl = 'http://zx-math.test.17zuoye.net/v/index';
var realUrl = tempUrl;
var c = 1;
$(document.body).on('click', '.btn', function() {
    // var tempWin = window.open(tempUrl, 'name' + (c++), '_black ');
    var tempWin = window.open(tempUrl, '_blank');
    setTimeout(function() {

        tempWin.close();
    },500)
    // $.get(requetUrl, function() {
    // if(tempWin){
    // }else{
    // tempWin.location.href = realUrl
    // }
    // })
});
