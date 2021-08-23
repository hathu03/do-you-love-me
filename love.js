function yesClick()
{
    alert("Yes. I love you too <3 ");
}
function noHover()
{
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('No').style.left = x + 'px';
    document.getElementById('No').style.top = y + 'px';
}