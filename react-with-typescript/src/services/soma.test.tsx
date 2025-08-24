import {soma} from "./soma"

describe('soma', () => {
  it('deve somar 1 ao número passado', () => {
    const value = soma(1)
    expect(value).toBe(2);
  })
})