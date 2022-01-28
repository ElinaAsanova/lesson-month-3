let search = document.getElementById('search')

let cName = document.getElementById('name'),
    regionHtml = document.getElementById('region'),
    subregionHtml = document.getElementById('subregion'),
    capitalHtml = document.getElementById('capital'),
    flagHtml = document.getElementById('flag'),
    flagsImg = document.getElementById('flags')

search.addEventListener('keyup', (e) => {
    let countries = e.target.value
    if (countries.length >= 2) {
        fetchCountry(countries)
    }
})
function fetchCountry(countries) {
    fetch(`https://restcountries.com/v3.1/name/${countries}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data))
}

function renderCountry(data) {
    console.log(data[0])
    const {altSpellings, region, subregion, capital, flag, flags} = data[0]
    cName.innerHTML = altSpellings[2]
    regionHtml.innerText = region
    subregionHtml.innerText = subregion
    capitalHtml.innerText = capital
    flagHtml.innerText = flag
    flagsImg.src = flags.svg
}