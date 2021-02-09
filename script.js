const countries = () => {
    const url = `https://restcountries.eu/rest/v2/all`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = data => {
    document.getElementById('countryInfo').innerHTML = ''
    document.getElementById('countryCard').innerHTML = ''
    const countryCard = document.getElementById('countryCard')
    data.forEach(country => {
        const card = document.createElement('div')
        card.classList.add('card', 'col-md-6', 'col-lg-3', 'mb-3', 'border-0')
        card.innerHTML = `
                        <div class="country-card">
                        <img src="${country.flag}" class="card-img-top rounded mx-auto d-block" alt="image not found">
                        <div class="card-body p-2 mt-3">
                            <h6 class="card-title text-color">Country: ${country.name}</h6>
                            <h6 class="card-title text-color">Capital: ${country.capital}</h6>
                            <a href="#" class="btn btn-outline-success mt-3 mb-0" onclick="searchCountryInfo('${country.alpha2Code}')">More Info</a>
                        </div>
                        </div>`

        countryCard.appendChild(card)
    })
}

const searchCountry = () => {
    const searchText = document.getElementById('searchText').value
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}

const displayCountry = country => {
    document.getElementById('countryInfo').innerHTML = ''
    const countryCard = document.getElementById('countryCard')
    const card = document.createElement('div')
    document.getElementById('countryCard').innerHTML = ''
    card.classList.add('card', 'col-md-6', 'col-lg-3', 'mb-3', 'border-0')
    card.innerHTML = `
                        <div class="country-card">
                        <img src="${country.flag}" class="card-img-top rounded mx-auto d-block" alt="image not found">
                        <div class="card-body p-0 pt-3">
                            <h6 class="card-title text-color">Country: ${country.name}</h6>
                            <h6 class="card-title text-color">Capital: ${country.capital}</h6>
                            <a href="#" class="btn btn-outline-success mt-3 mb-0" onclick="searchCountryInfo('${country.alpha2Code}')">More Info</a>
                        </div>
                        </div>`

    countryCard.appendChild(card)
}


const searchCountryInfo = countryCode => {
    const url = ` https://restcountries.eu/rest/v2/alpha/${countryCode}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryInfo(data))

}

const displayCountryInfo = country => {
    document.getElementById('countryInfo').innerHTML = ''
    const countryInfo = document.getElementById('countryInfo')
    const countryInfoCard = document.createElement('div')
    countryInfoCard.innerHTML = `
        <div class="card country-info-card">
            <img src="${country.flag}" class="card-img-top rounded-top" alt="...">
            <div class="card-body" id = "ingredient-body">
                <h5 class="card-title fw-bold text-color">Country: ${country.name}</h5>
                <h6 class="fw-bold mt-4 text-color">Capital: ${country.capital}</h6>
                <h6 class="card-title mt-4 text-color">Region: ${country.region}</h6>
                <h6 class="card-title text-color">Sub-Region: ${country.subregion}</h6>
                <h6 class="text-color mt-4">Area: ${country.area}</h6>
                <h6 class="text-color">Population: ${country.population}</h6>
                <h6 class="text-color">Offical Name: ${country.altSpellings[1]}</h6>
                <h6 class="text-color">Offical Name: ${country.languages[0].name}</h6>
                <h6 class="text-color">Demonym: ${country.demonym}</h6>
            </div>
        </div>
    `
    countryInfo.appendChild(countryInfoCard)
}