document.getElementById('loc').addEventListener('click', function() {
  const location = document.getElementById('input-loc').value;
  
   // Chamar a API do tempo com a localização
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b187af6e8555c121214527c3c808a72e
&lang=pt_br`)
.then(response => response.json())
.then(data => {
  const weather = data.weather[0].main.toLowerCase();
  const body = document.body;

});