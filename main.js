document.getElementById("button").onclick=function()
    {
        var a = Math.round(Math.random()*256);
        var b = Math.round(Math.random()*256);
        var c = Math.round(Math.random()*256);
        var random = 'rgb('+a+','+b+','+c+')';
   document.getElementById("button").style.backgroundColor = random;
};
var kitorol = document.getElementById("torol");
var hozzaadd = document.getElementById("hozzaad");
function hozzaad() {
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cella1 = row.insertCell(0);
    var cella2 = row.insertCell(1);
    var y = document.getElementById("table").rows.length;
    cella1.innerHTML = y;
    cella2.innerHTML = document.getElementById("input").value;
}
function torles() {
    document.getElementById("table").deleteRow(0);
}