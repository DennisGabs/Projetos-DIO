import { CompanyAccount } from "./CompanyAccount";
import { DioAccount } from "./DioAccount";
import { EmployeeAccount } from "./EmployeeAccount";
import { PeopleAccount } from "./PeopleAccount";

const companyAccount = new CompanyAccount('Empresa X', 123456);
companyAccount.deposit(1000);
companyAccount.getBalance(); // 1000
companyAccount.getLoan(500);
companyAccount.getBalance(); // 1500
companyAccount.withdraw(300);
companyAccount.getBalance(); // 1200
companyAccount.setName('Empresa Y');
console.log(companyAccount.toString());

const peopleAccount = new PeopleAccount(123456789, 'João Silva', 654321);
peopleAccount.deposit(200);
peopleAccount.getBalance(); // 200
peopleAccount.withdraw(50);
peopleAccount.getBalance(); // 150
peopleAccount.setName('Maria Oliveira');
console.log(peopleAccount.toString());

const employeeAccount = new EmployeeAccount('Funcionário A', 111222)
employeeAccount.deposit(300);
employeeAccount.getBalance(); // 310 (300 + 10)
employeeAccount.withdraw(100);
employeeAccount.getBalance(); // 210
employeeAccount.setName('Funcionário B');
console.log(employeeAccount.toString());

// Throw error
companyAccount.withdraw(2000); // Saldo insuficiente, conta: 123456
peopleAccount.withdraw(500); // Saldo insuficiente, conta: 654321
employeeAccount.withdraw(500); // Saldo insuficiente, conta: 111222