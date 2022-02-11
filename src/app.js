const searchInput = document.getElementById('search_box');
const main_case = document.querySelector('.allCase_data');
const main_country = document.querySelector('.data_search')

// Refresh button 
const refresh_data = document.querySelectorAll('.refresh');
for (let i = 0; i < refresh_data.length; i++) {
  refresh_data[i].addEventListener('click', () => {
    window.location.reload();
  });
};

// Dark mode
const icon = document.getElementById("icon");
icon.onclick = () => {
document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    icon.src = "public/img/dark.png";
  }
  else {
    icon.src = "public/img/light.png";
  }
}

// Delete Value input
const search_icon = document.querySelector('.search-icon');
search_icon.addEventListener('click', () => {
  searchInput.value = "";
});


searchInput.addEventListener('input', async function(e) {
  e.preventDefault();
  const value = e.target.value;
  await searchData(value);
  main_case.style.display ="none";
});

async function searchData(country) {
  const url_country = 'https://disease.sh/v3/covid-19/countries/';
  const apiFetch = await fetch(url_country + country);
  const apiFetch_data = await apiFetch.json();
  
  CountryData(apiFetch_data);
}


async function global_case() {
  const url_allCases = "https://disease.sh/v3/covid-19/all"; 
  const apiFetch = await fetch(url_allCases);
  const apiFetch_data = await apiFetch.json();
  GlobalData(apiFetch_data); 
}

// call function all_case
global_case()

function GlobalData(data) {
  const cardCases = `
    <div class="img-world">
      <img src="./public/img/world.png" width="200">
      <h2>Global</h2>
      <div class="card-content" >
        <div class="card_template ">
          <h3>Population</h3>
          <h1>${data.population.toLocaleString('id-ID')}</h1>
        </div>
      </div>
    </div> 

    <div class="card">
      
      
      <div class="card-content" >
        <div class="card_template ">
          <h3>Cases</h3>
          <h1>${data.cases.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      

      <div class="card-content">
        <div class="card_template ">
          <h3>Today Cases</h3>
          <h1>${data.todayCases.toLocaleString('id-ID')}</h1>
        </div>
      </div>


      <div class="card-content">
        <div class="card_template x">
          <h3>recovered</h3>
          <h1>${data.recovered.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>today Recovered</h3>
          <h1>${data.todayRecovered.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>Deaths</h3>
          <h1>${data.deaths.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>Today Deaths</h3>
          <h1>${data.todayDeaths.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>active</h3>
          <h1>${data.active.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>critical</h3>
          <h1>${data.critical.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>tests</h3>
          <h1>${data.tests.toLocaleString('id-ID')}</h1>
        </div>
      </div>

    </div>
  
  `
  main_case.innerHTML = cardCases;

}

function CountryData(data) {
  const country_card = `
    <div class="card-flag">
      <h1>${data.country} - ${data.countryInfo.iso2}</h1>
      <img src="${data.countryInfo.flag}" width="250" height="167">
      <div class="card-content" >
        <div class="card_template ">
          <h3>Population</h3>
          <h1>${data.population.toLocaleString('id-ID')}</h1>
        </div>
      </div>
    </div>
    <div class="card-country" style="">
      


      <div class="card-content" >
        <div class="card_template ">
          <h3>Cases</h3>
          <h1>${data.cases.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      

      <div class="card-content">
        <div class="card_template ">
          <h3>Today Cases</h3>
          <h1>${data.todayCases.toLocaleString('id-ID')}</h1>
        </div>
      </div>


      <div class="card-content">
        <div class="card_template x">
          <h3>recovered</h3>
          <h1>${data.recovered.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>today Recovered</h3>
          <h1>${data.todayRecovered.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>Deaths</h3>
          <h1>${data.deaths.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>Today Deaths</h3>
          <h1>${data.todayDeaths.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>active</h3>
          <h1>${data.active.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>critical</h3>
          <h1>${data.critical.toLocaleString('id-ID')}</h1>
        </div>
      </div>

      <div class="card-content">
        <div class="card_template ">
          <h3>tests</h3>
          <h1>${data.tests.toLocaleString('id-ID')}</h1>
        </div>
      </div>

    </div>

  `

  main_country.innerHTML = country_card;
}



