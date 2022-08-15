import "./App.css";

function App() {
  return (
    <div className="App">
      <img src="../src/images/logo.svg" alt="logo" className="logo" />
      <div className="Form1">
        <form action="">
          <label>Velocidade</label>
          <input
            type="range"
            name="velocidade"
            id="velocidade"
            min="0"
            max="100"
            onChange={() => {
              let resultado = document.getElementById("valor-vel");
              let valor = document.getElementById("velocidade").value + " rpm";
              resultado.innerHTML = valor;
            }}
          />
          <p id="valor-vel"></p>

          <label>Quantidade de fotos</label>
          <input
            type="range"
            name="quantidade-fotos"
            id="quantidade-fotos"
            min="0"
            max="50"
            onChange={() => {
              let resultado = document.getElementById("fotos");
              let valor = document.getElementById("quantidade-fotos").value;
              resultado.innerHTML = valor + " fotos";
            }}
          />
          <p id="fotos"></p>

          <div className="Direcao">
            <h2>Direção</h2>
            <input
              type="radio"
              name="direcao"
              id="horario"
              value="horario"
            />{" "}
            <label>Horário</label>
            <input
              type="radio"
              name="direcao"
              id="anti-horario"
              value="anti-horario"
            />{" "}
            <label>Anti-horário</label>
          </div>
        </form>
      </div>
      <div className="Angulo-plataforma">
        <form action="">
          <label>Ângulo da plataforma</label>
          <input
            type="range"
            name="angulo"
            id="angulo"
            min="0"
            max="360"
            onChange={() => {
              let resultado = document.getElementById("angulo-valor");
              let valor = document.getElementById("angulo").value;
              resultado.innerHTML = valor + "º";
            }}
          />
          <p id="angulo-valor"></p>
          <div className="Imagens-play">
            <button>
              <img src="../src/images/setas.svg" alt="play1" />
            </button>
            <button>
              <img src="../src/images/setas.svg" alt="play2" id="play2" />
            </button>
          </div>
        </form>
      </div>

      <button type="submit" className="Botao">
        INICIAR
      </button>
    </div>
  );
}

export default App;
