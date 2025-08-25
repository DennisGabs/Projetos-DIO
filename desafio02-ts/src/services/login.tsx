interface ILogin {
  email: string
}

export const login = ({email}: ILogin): void => {
  alert(`Seja Bem vindo(a) ${email}!`)
}
