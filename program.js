//Fetch Method (MetaWeather API)
//Prefix Proxy - https://cors-anywhere.herokuapp.com/ when serving locally
//Location Manila, Philippines
/*
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
*/

async function getWeatherAW(woeid){
    try{

        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);

        const data = await result.json();
        //console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Today's temperature in ${data.title} is between ${today.min_temp} and ${today.max_temp} degree.`);
        const tomorrow = data.consolidated_weather[1];
        console.log(`Tomorrow's temperature in ${data.title} is between ${tomorrow.min_temp} and ${tomorrow.max_temp} degree.`);
        //Return promises so we can use then and catch method
        return data;
    }
    catch(error){
        alert(error);

    }

}
//Boston
getWeatherAW(2367105);

//Manila
//getWeatherAW(1199477);
let dataManila;
getWeatherAW(1199477).then(response => {
    dataManila = response;
    console.log(dataManila);

})




