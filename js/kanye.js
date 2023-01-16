const loadQuots = () => {
    fetch('https://api.kanye.rest/')
    .then(Response => Response.json())
    .then(data => displayQuoat(data));
}

const displayQuoat = (quote) =>{
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}
