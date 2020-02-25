//Fetch Method (MetaWeather API)
//Prefix Proxy - https://cors-anywhere.herokuapp.com/ when serving locally
//Location Manila, Philippines

function getWeather(woeid){
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`;
    fetch(url, {
        headers:{'Access-Control-Allow-Origin':'*'},
    })
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(data =>{
        console.log(data);
        const today = data.consolidated_weather[2];
        console.log(`Temperature in ${data.title} is between ${today.min_temp} and ${today.max_temp} degree.`);
    })
    .catch(error => console.log('Error'));
}

//Manila
getWeather(1199477);
//Boston
getWeather(2367105);
