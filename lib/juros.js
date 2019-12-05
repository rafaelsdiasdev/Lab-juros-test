const jurosSimples = (c, i, t) => c * i * t

const montanteJurosSimples = ({ jurosSimples }) => (c, i, t) => c + jurosSimples(c, i, t)

const montanteJurosCompostos = (c, i, t) => c * Math.pow((1 + i), t).toFixed(2)

const jurosCompostos = ({ montanteJurosCompostos }) => (c,i,t) => montanteJurosCompostos(c,i,t) - c


module.exports = {
  jurosSimples,
  montanteJurosSimples: montanteJurosSimples({ jurosSimples }),
  montanteJurosCompostos,
  jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
  pure: {
    montanteJurosSimples,
    jurosCompostos
  }
}