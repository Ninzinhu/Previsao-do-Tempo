document.getElementById('loc').addEventListener('click', function() {
  const location = document.getElementById('input-loc').value;
  
   // Chamar a API do tempo com a localização
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b187af6e8555c121214527c3c808a72e
&lang=pt_br`)
.then(response => response.json())
.then(data => {
  const weather = data.weather[0].main.toLowerCase();
  const body = document.body;


    // Resetar classes do body
    body.className = '';


     // Adicionar classe baseada no tempo
     if (weather.includes('sun')) {
      body.classList.add('ensolarado');
    } else if (weather.includes('rain')) {
      body.classList.add('chovendo');
    } else if (weather.includes('night')) {
      body.classList.add('noite');
    } else {
      body.classList.add('noite');
    }

    // Atualizar informações do tempo
    document.getElementById('tempo-dados').innerText = `Condição: ${data.weather[0].description}`;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  })
  .catch(error => console.error('Erro ao buscar os dados do tempo:', error));
});
