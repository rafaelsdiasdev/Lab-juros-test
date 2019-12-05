
// import { jurosSimples, montanteJurosSimples } from './juros.js';
const juros = require('./lib/juros')
const jurosSimples = juros.jurosSimples
const montanteJurosSimples = juros.montanteJurosSimples
const montanteJurosCompostos = juros.montanteJurosCompostos
const somenteJuros = juros.somenteJuros

jurosSimples(1200,0.02, 15)

montanteJurosSimples(1200,0.02, 15)

montanteJurosCompostos(1200,0.02, 15)

somenteJuros(0.02, 15)

