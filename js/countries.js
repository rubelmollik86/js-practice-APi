const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(Response => Response.json())
    .then( data => displayCounties(data))
}
loadCountries();

const displayCounties = countries => {
    
    const countryDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Deatails</button>
        `;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countryDiv.appendChild(div);



    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    // console.log(url);
    fetch(url)
    .then(Response => Response.json())
    .then(data => displayCountryDeatail(data[0]));
}

displayCountryDeatail = country => {
    const countryDiv = document.getElementById('country-deatail');
    countryDiv.innerHTML = `
        <h3>${country.name}</h3>
        <p>population: ${country.population}</p>
        <img width="250px" src="${country.flag}">
    `
}
  