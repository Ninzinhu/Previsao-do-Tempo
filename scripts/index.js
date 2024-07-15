"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-loc");
const sectionTempoInfo = document.querySelector("#tempo-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert("O local precisa ter pelo menos 3 letras");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=133c6feb100c12c50f6e62e50ba7d89c&lang=pt_br`);
        const dados = yield response.json();
        if (dados.cod !== 200) {
            alert("Localização não encontrada");
            return;
        }
        const temperaturaCelsius = (dados.main.temp - 273.15).toFixed(1);
        const infos = {
            temperatura: temperaturaCelsius,
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
        };
        if (sectionTempoInfo) {
            sectionTempoInfo.innerHTML = `
        <p>Local: ${infos.local}</p>
        <p>Temperatura: ${infos.temperatura}°C</p>
        <img src="${infos.icone}" alt="Ícone do tempo">
      `;
        }
        else {
            console.error("Elemento 'sectionTempoInfo' não encontrado.");
        }
    }
    catch (error) {
        console.error("Erro ao buscar informações do tempo:", error);
        alert("Ocorreu um erro ao buscar as informações do tempo. Tente novamente mais tarde.");
    }
}));
