import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#fff");

  // Função para atualizar a cor do Hello World ao clicar
  const changeColor = () => {
    const colors = ["#FF5733", "#33FF57", "#33A6FF", "#FFD633", "#F0A6D6"];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Lato', sans-serif", // Fonte mais fina e moderna
        backgroundImage: "url('https://i.pinimg.com/736x/06/3c/4c/063c4c714fb06b7826e25721e72d2504.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={changeColor} // Altera a cor ao clicar no Hello World
    >
      <div
        style={{
          position: "relative",
          padding: "30px 60px",
          borderRadius: "20px",
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)", // Desfoque de fundo para efeito estético
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          transition: "transform 0.3s ease-in-out",
          transform: "scale(1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)"; // Aumenta a escala ao passar o mouse
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"; // Retorna ao tamanho original
        }}
      >
        <h1
          style={{
            fontSize: "3rem", // Tamanho ajustado
            fontWeight: "300", // Peso mais leve da fonte
            color: color,
            transition: "color 0.5s ease, text-shadow 0.5s ease",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)", // Sombra suave para destacar o texto
            letterSpacing: "1px", // Espaçamento entre as letras
            textTransform: "uppercase", // Letras maiúsculas para um estilo mais forte
            display: "inline-block",
          }}
        >
          <span
            style={{
              animation: "fadeInOut 12s infinite", // Aumenta a duração da animação
            }}
          >
            Hello
          </span>
          <span
            style={{
              animation: "fadeInOut 12s infinite", // Mesma animação para "World"
            }}
          >
            {" "}
            World!
          </span>
        </h1>

        <p
          style={{
            fontSize: "1.2rem", // Tamanho ajustado do texto
            fontWeight: "200", // Peso mais leve para o parágrafo
            color: "white",
            marginTop: "20px",
            opacity: 0.7,
            transition: "opacity 0.10s ease",
          }}
        >
          
        </p>
      </div>

      {/* Estilo da animação */}
      <style>
        {`
          @keyframes fadeInOut {
            0% {
              opacity: 0;
              transform: translateY(40px); /* Entrada suave, de baixo para cima */
            }
            25% {
              opacity: 1;
              transform: translateY(0); /* Atraso suave na entrada */
            }
            50% {
              opacity: 1;
              transform: translateY(0);
            }
            75% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-40px); /* Saída suave para cima */
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
