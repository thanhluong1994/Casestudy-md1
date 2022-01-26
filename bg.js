let tens=0;
let sec=0;
let minute=0;
function start(){
    document.forms[0].display.value=minute+":"+sec+":"+tens;
    a=setTimeout("start()",10)
    tens++
    if(tens==100)
    {
        tens=0
        sec++
    }
    if(sec==60)
    {
        sec=0
        minute++
    }
}
function transfer(){
        clearTimeout(a)
        document.getElementById("stop").innerHTML += minute+":"+sec+":"+tens+"<br>";
    start()
}
function stop()
{
    clearTimeout(a)
}
function reset()
{
    window.location.reload()
}
function over1(test) {document.getElementById('over1').style.background=test}
function out1(test) {document.getElementById('over1').style.background=test}
function over2(test) {document.getElementById('over2').style.background=test}
function out2(test) {document.getElementById('over2').style.background=test}
function over3(test) {document.getElementById('over3').style.background=test}
function out3(test) {document.getElementById('over3').style.background=test}
function over4(test) {document.getElementById('over4').style.background=test}
function out4(test) {document.getElementById('over4').style.background=test}

