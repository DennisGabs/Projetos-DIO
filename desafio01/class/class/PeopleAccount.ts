import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  toString = (): string => {
    return `Conta Empresa: ${this.getName()}, Número: ${this.getAccountNumber()}, Saldo: ${this.getSaldo()}`
  }
}