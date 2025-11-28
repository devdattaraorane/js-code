import { Savingaccount } from "./SavingAccount.mjs";

var obj=new Savingaccount ("sav","Raj","Mathur",2000)
obj.deposit(2000);
console.log(obj.toString());
console.log(obj);
obj.withdraw(500);
