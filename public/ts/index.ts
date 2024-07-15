const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-loc");
const sectionTempoInfo = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("O local precisa ter pelo menos 3 letras");
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=133c6feb100c12c50f6e62e50ba7d89c&lang=pt_br`);
    const dados = await response.json();

    if (dados.cod !== 200) {
      alert("Localização não encontrada");
      return;
    }

    const infos = {
      temperatura: Math.round(dados.main.temp),  // Correção aqui, deve ser 'temp' e não 'temperatura'
      local: dados.name,
      icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,  // Correção aqui
    };

    if (sectionTempoInfo) {
      sectionTempoInfo.innerHTML = `
        <p>Local: ${infos.local}</p>
        <p>Temperatura: ${infos.temperatura}°C</p>
        <img src="${infos.icone}" alt="Ícone do tempo">
      `;
    } else {
      console.error("Elemento 'sectionTempoInfo' não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao buscar informações do tempo:", error);
    alert("Ocorreu um erro ao buscar as informações do tempo. Tente novamente mais tarde.");
  }
});
