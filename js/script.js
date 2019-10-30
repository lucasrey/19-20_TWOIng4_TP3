// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

  function getThreeDaysForecast()
{

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();

    apiWeather
    .fetchThreeDaysForecast()
    .then(function(response) 
    {

      // Récupère la donnée d'une API
      const data = response.data;

      // Modifier le DOM
      //demain
      document.getElementById('tomorrow-forecast-main').innerHTML = data.list[0].weather[0].main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML =data.list[0].weather[0].description;
      document.getElementById('icont-weather-container').innerHTML = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${data.list[0].temp.day}°C`;
      //après-demain
      document.getElementById('after_tomorrow-forecast-main').innerHTML = data.list[1].weather[0].main;
      document.getElementById('after_tomorrow-forecast-more-info').innerHTML = data.list[1].weather[0].description;
      document.getElementById('iconat-weather-container').innerHTML = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      document.getElementById('after_tomorrow-forecast-temp').innerHTML = `${data.list[1].temp.day}°C`;
      //encore après-demain
      document.getElementById('after_after_tomorrow-forecast-main').innerHTML = data.list[2].weather[0].main;
      document.getElementById('after_after_tomorrow-forecast-more-info').innerHTML = data.list[2].weather[0].description;
      document.getElementById('iconaat-weather-container').innerHTML = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);
      document.getElementById('after_after_tomorrow-forecast-temp').innerHTML = `${data.list[2].temp.day}°C`;

          })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

}