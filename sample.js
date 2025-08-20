import currency_symbols from "./currency.js";
const submit = document.getElementById("submit")

const getRate = async (country) => {
    try{
        const response = await fetch(`https://open.er-api.com/v6/latest/${country}`)
        .then(response => response.json())
        return response
    }
    catch (err){
        console.error(err)
        return null
    }
}

const convert = (from,to,amount) =>{
    getRate(from).then(data =>{
        const money = document.getElementById("money")
        const rate = data.rates[to]
        amount = rate * amount
        money.innerText = currency_symbols[to] +' '+ amount
    });
    
}

const main = () => {
    submit.addEventListener("click", function(){
        const from = document.getElementById("from").value.toUpperCase();
        const to = document.getElementById("to").value.toUpperCase();
        const amount = document.getElementById("amount").value.toUpperCase();
        convert(from, to, amount)
    })
}

main()