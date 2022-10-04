import HistoricalDataList, {Forecast, HistoricalData} from "./weathermodel.js";

async function getWeatherDataXML() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/data');
    let data = xhr.onload = () => {
        const jsonData = JSON.parse(xhr.responseText);
        let histData = new HistoricalDataList(jsonData);
        console.log(histData.toString())
        return histData;
    }
    xhr.send();
    return data;
}

function getWeatherDataFetch() {
    return fetch('http://localhost:8080/data')
        .then(response => response.json())
        .then(data => {return new HistoricalDataList(data)}).catch(console.error)
}

async function getWeatherForecastFetch(city) {
    return fetch('http://localhost:8080/forecast/' + city)
        .then(response => response.json())
        .then(data => {
            return new Forecast(data);
        })
        .catch(console.error)
}

function findYesterday() {
    const date = new Date()
    const dayBefore = new Date(date.getTime());
    dayBefore.setDate((new Date().getDate()) - 1);
    return dayBefore;
}

function minimumTemperatureForLastDay(city){
    getWeatherDataFetch().then(data => {
        let yesterday = findYesterday();
        let yest = data.filter(d => {
            d.filter(x => {
                x.place === city && new Date(x.time) === yesterday
            })
        })
        console.log(yest.toString())
        console.log("Minimum temperature for " + city + " yesterday was " + minTemp);
    })
}
export {getWeatherDataXML, getWeatherDataFetch, getWeatherForecastFetch, minimumTemperatureForLastDay}