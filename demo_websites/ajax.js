
function loadDoc(){
    const xhttp = new XMLHttpRequest() ;/// create ajax request
    xhttp.onload = function(){/// here is the call back function
        document.getElementById('demo').innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send() ;
}

function load()
{
    const xhttp = new XMLHttpRequest() ;
    xhttp.onload = function (){
        document.getElementById('output').innerHTML = this.responseText ;
    }
    xhttp.open("GET" , "index.html" );
    xhttp.send();
}

function te(){
    const xhttp1 = new XMLHttpRequest() ;
    xhttp1.onload = function(){
    const xmldoc = this.responseXML ;
    const x = xmldoc.getElementsByTagName('COUNTRY');
    let text = "";
    for(let i = 0 ; i < x.length ; ++i)
    {
        text = text + x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById('dm').innerHTML = text ;
    }
    xhttp1.open("GET", "catalog.xml");
    xhttp1.send() ;
}
function fake_love(){
    console.log("yes clicked");
    const xhttp = new XMLHttpRequest() ;
    xhttp.onload = function()
    {
        myfunction(this);
    }
    xhttp.open("GET", "catalog.xml");
    xhttp.send() ;
}
function myfunction(xml)
{
    const xmldoc = xml.responseXML ;
    const x = xmldoc.getElementsByTagName('CD');
    let table="<tr><th>Artist</th><th>Title</th></tr>";
        for (let i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
        document.getElementById('sameout').innerHTML = table ;
    }
}
///ajax and php connection 
function showHint(str) {
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("txtHint").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "gethint.php?q="+str);
    xhttp.send();   
  }