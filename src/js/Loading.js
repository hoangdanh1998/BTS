

function showcontent(x){

  if(window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 1) {
        document.getElementById('content').innerHTML = "<i class='huge notched circle loading icon' style='margin:auto auto;'></i>";
    }
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById('content').innerHTML = xmlhttp.responseText;
    }
  }

  xmlhttp.open('POST', x+'.html', true);
  xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  xmlhttp.send(null);

}
