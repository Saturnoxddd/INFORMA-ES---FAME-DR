// Faz o cartão brilhar levemente com tempo
setInterval(() => {
  const cartao = document.querySelector(".cartao");
  cartao.style.boxShadow = `
    0 0 ${10 + Math.random() * 30}px rgba(173, 216, 230, 0.6)
  `;
}, 500);

// Mensagem fofa no console (só pra você ♥)
console.log("✨ Sua energia da DR está ativa ✨");
