// Imediately Invoked Function Expression

(function add(a,b){
    console.log(a+b);
})(2,3);

(()=>console.log("i am ES-6"))();

//Creating a async function

//const data = ( async()=> await fetch())();

const atm = (initialBalance) =>{
    let balance = initialBalance;
    function withDraw(amt){
        if(amt>balance){
            return "Are u Kidding";
        }
        else{
            balance-=amt;
            return balance;
        }
    }
    return {withDraw}
}

const hey = atm(1000);
console.log(hey.withDraw(10001));