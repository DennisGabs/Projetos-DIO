export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (value: number) => {
    this.balance = value
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): void => {
    this.validValue(value)

    if(this.validateStatus()){
      this.balance += value
    }
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  getSaldo = (): number => {
    return this.balance
  }

  withdraw = (value: number): void => {
    this.validValue(value)

    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
    } else {
      console.log(`Saldo insuficiente, conta: ${this.accountNumber}`)
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  protected validValue = (value: number): boolean => {
    if(value <= 0) {
      throw new Error(`Valor: ${value} inválido`)
    }
    return true
  }
}
