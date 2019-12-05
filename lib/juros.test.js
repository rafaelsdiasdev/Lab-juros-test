const juros = require('./juros')

test('Juros Simples', () => {
  expect(juros.jurosSimples(100, 0.10, 1)).toBe(10)
})

test('Juros Simples', () => {
  expect(juros.jurosSimples(100, 0.10, 0)).toBe(0)
})

test('Juros Simples', () => {
  expect(juros.jurosSimples(100, 0.10, 10)).toBe(100)
})

test('Montante Juros Simples', () => {
  const jurosSimples = jest.fn()
  jurosSimples.mockImplementation(() => 10)
  const montanteJurosSimples = juros.pure.montanteJurosSimples({ jurosSimples })
  expect(montanteJurosSimples(100,0.10,1)).toBe(110)
  expect(jurosSimples.mock.calls[0][0]).toEqual(100,0.10,1)
})

test('Montante Juros Compostos', () => {
  expect(juros.montanteJurosCompostos(1200,0.02, 15)).toBe(1620)
})

test('Juro Compostos', () => {
  const montanteJurosCompostos = jest.fn()
  montanteJurosCompostos.mockImplementation(() => 1100)
  const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
  expect(jurosCompostos(100,0.10,1)).toBe(1000)
  expect(montanteJurosCompostos.mock.calls[0][0]).toEqual(100,0.10,1)
})