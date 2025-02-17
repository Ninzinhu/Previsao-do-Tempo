(() => {
  "use strict";
  ({
    382: function () {
      var e =
        (this && this.__awaiter) ||
        function (e, o, t, n) {
          return new (t || (t = Promise))(function (r, a) {
            function c(e) {
              try {
                l(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function i(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var o;
              e.done
                ? r(e.value)
                : ((o = e.value),
                  o instanceof t
                    ? o
                    : new t(function (e) {
                        e(o);
                      })).then(c, i);
            }
            l((n = n.apply(e, o || [])).next());
          });
        };
      const o = document.querySelector("#search-form > form"),
        t = document.querySelector("#input-loc"),
        n = document.querySelector("#tempo-info");
      null == o ||
        o.addEventListener("submit", (o) =>
          e(void 0, void 0, void 0, function* () {
            if ((o.preventDefault(), !t)) return;
            const e = t.value;
            if (e.length < 3) alert("O local precisa ter pelo menos 3 letras");
            else
              try {
                const o = yield fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=133c6feb100c12c50f6e62e50ba7d89c&lang=pt_br`
                  ),
                  t = yield o.json();
                if (200 !== t.cod)
                  return void alert("Localização não encontrada");
                const r = {
                  temperatura: (t.main.temp - 273.15).toFixed(1),
                  local: t.name,
                  icone: `https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,
                };
                n
                  ? (n.innerHTML = `\n        <p>Local: ${r.local}</p>\n        <p>Temperatura: ${r.temperatura}°C</p>\n        <img src="${r.icone}" alt="Ícone do tempo">\n      `)
                  : console.error(
                      "Elemento 'sectionTempoInfo' não encontrado."
                    );
              } catch (e) {
                console.error("Erro ao buscar informações do tempo:", e),
                  alert(
                    "Ocorreu um erro ao buscar as informações do tempo. Tente novamente mais tarde."
                  );
              }
          })
        );
    },
  })[382]();
})();
