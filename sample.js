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

const handleSubmit = () => {
    console.log("wereds23edx")
    const from = document.getElementById("from").value.toUpperCase();
    const to = document.getElementById("to").value.toUpperCase();
    const amount = document.getElementById("amount").value;
    convert(from, to, amount)
}

const main = () => {
    submit.addEventListener("click", handleSubmit);
    document.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSubmit();
    });
}

main()