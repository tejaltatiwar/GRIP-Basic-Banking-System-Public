/** @format */

//dummy database

function client(name, email, number, balance) {
  this.name = name;
  this.email = email;
  this.number = number;
  this.balance = balance;
}
client.prototype.moneyTransfere = function (reciver, money) {
  if (this.balance > 0) {
    console.log(this.balance, reciver,money);
    this.balance -= money;
    reciver.balance += money;
    console.log(this.balance, reciver.balance);
  }
};
client.prototype.status = function () {
  console.log(`
    client name = ${this.name}
     email = ${this.email}
     number = ${this.number}
     balance = ${this.balance}
    `);
};
//dummy database

let ahmed = new client("ahmed", "ahmed123@gmail.com", 058596554, 500000);
let aya = new client("aya", "aya3@gmail.com", 051966750, 1200000);
let mohamed = new client("mohamed", "mohamed_23@gmail.com", 059874256, 6950000);
let yomna = new client("yomna", "yomna24@gmail.com", 058889125, 964500);
let yehia = new client("yehia", "yehia4456@gmail.com", 0589812354, 10000);
let maha = new client("maha", "maha4456@gmail.com", 0589812354, 7000);
let rania = new client("rania", "rania94@gmail.com", 0500089211, 15000);
let omar = new client("omar", "omar88@gmail.com", 058799995, 30500);
let mariam = new client("mariam", "mariam44006@gmail.com", 055557784, 3000);
let hanaa = new client("hanaa", "hanaa06@gmail.com", 055664852, 300550);
let clientArray = [
  ahmed,
  aya,
  mohamed,
  yomna,
  yehia,
  maha,
  rania,
  omar,
  mariam,
  hanaa,
];


let clientsPage = document.getElementById("clientsPage");
let transfereMoneypage = document.getElementById("transfereMoneypage");
let transactionspage = document.getElementById("transactionspage");
let clients = document.getElementById("clients");
let transfereMoney = document.getElementById("transfereMoney");
let transactions = document.getElementById("transactions");

clients.addEventListener("click", showClientsPage);
transfereMoney.addEventListener("click", showtransfereMoneyPage);
transactions.addEventListener("click", showtransactionsPage);

function showClientsPage() {
  clientsPage.style.display = "block";
  transactionspage.style.display = "none";
  transfereMoneypage.style.display = "none";
}
function showtransfereMoneyPage() {
  clientsPage.style.display = "none";
  transactionspage.style.display = "none";
  transfereMoneypage.style.display = "block";
}
function showtransactionsPage() {
  clientsPage.style.display = "none";
  transactionspage.style.display = "block";
  transfereMoneypage.style.display = "none";
}

//transfere money

let senderName = document.getElementById("senderName");
let senderEmail = document.getElementById("senderEmail");
let reciverName = document.getElementById("reciverName");
let reciverEmail = document.getElementById("reciverEmail");
let moneyAmount = document.getElementById("moneyAmount");
let submitBtn = document.getElementById("submitBtn");
let transfereConfirmation= document.getElementById("transfereConfirmation");
let sender;
let reciever;
let money;
let transactionsSenderName = document.getElementById("transactionsSenderName");
let transactionsReciverName = document.getElementById("transactionsReciverName");
let transactionsMoneyAmount = document.getElementById("transactionsMoneyAmount");
let transactionsSenderCurrency = document.getElementById("transactionsSenderCurrency");
let transactionsReciverCurrency = document.getElementById("transactionsReciverCurrency");
let senderInfo,recieverInfo,moneyInfo,newSenderBalance,newrecieverBalance;
console.log(transactionsSenderName.innerText);

submitBtn.addEventListener("click", submitTransfereMoney);
function submitTransfereMoney(e) {
  e.preventDefault();
  formValidation();

}
function formValidation() {
  for (i = 0; i <= 10; i++) {
    if (senderName.value === clientArray[i].name) {
      sender = clientArray[i];
    }

    if (reciverName.value === clientArray[i].name) {
      reciever = clientArray[i];
    }
    console.log(sender,reciever);
    if (sender && reciever && moneyAmount.value > 0) {
      //important  (to change string to number use * 1 ex: '100'*1 = 100)
      money = moneyAmount.value*1;
      alert(`are you sure you want to send ${money} from ${sender.name} to ${reciever.name} `)
      sender.moneyTransfere(reciever, money);
      sender.status();
      reciever.status();
      let senderBalance = document.getElementById(`${sender.name}Currency`);
      let recieverBalance = document.getElementById(`${reciever.name}Currency`);
      senderBalance.innerText = sender.balance;
      senderBalance.style.background='red';
      recieverBalance.innerText = reciever.balance;
      recieverBalance.style.background='green';
      transfereConfirmation.innerText=`${money}$ is successfully sent from ${sender.name} to ${reciever.name}`;
      transactionsInfo();
      sender='';
      reciever=''
      break;
    }
  }

  console.log(sender,reciever,senderInfo,recieverInfo);
}
function transactionsInfo() {
  senderInfo=sender.name;
        transactionsSenderName.innerText=senderInfo;
        recieverInfo=reciever.name;
        transactionsReciverName.innerText=recieverInfo;
        moneyInfo=money;
        transactionsMoneyAmount.innerText=moneyInfo;
        newSenderBalance=sender.balance;
        transactionsSenderCurrency.innerText=newSenderBalance;
        newrecieverBalance=reciever.balance;
        transactionsReciverCurrency.innerText=newrecieverBalance;
}