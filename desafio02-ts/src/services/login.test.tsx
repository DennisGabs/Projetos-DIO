import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
      const email = 'dennis@gmail.com'
      login({email: email})
      expect(mockAlert).toHaveBeenCalledWith(`Seja Bem vindo(a) ${email}!`)
    })
})