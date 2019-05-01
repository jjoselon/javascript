fetch('https://raw.githubusercontent.com/jjoselon/Software/master/JavaScript/heroe.json').
then( function (response) {
  console.log(response);
  if (response.ok == false && response.status == 404) {
    window.alert("HTTP 404 (Page Not Found)");
    return response.text()
  } else {
    return response.json()
  }
}).
then( Json => console.log(Json));
