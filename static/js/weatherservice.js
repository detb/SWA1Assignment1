import HistoricalDataList, {Forecast, HistoricalData} from "./weathermodel.js";

async function getWeatherDataXML(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/data');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(new HistoricalDataList(data));
        }
    }
    xhr.send();
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

async function lastDayDataXML(city, callback) {
    await getWeatherDataXML(data => {
        let yesterday = findYesterday();
        let yest = data.filter(d => {
            return d[0].place === city && new Date(d[0].time).getDate() === yesterday.getDate()
        })
        let minTemp = Math.min(...yest.map(d => d[0].value))
        let maxTemp = Math.max(...yest.map(d => d[0].value))
        let sumOfPrecipitation = yest.reduce((a, b) => a + b[1].value, 0)
        let avgWindSpeed = yest.reduce((a, b) => a + b[2].value, 0) / yest.length

        function toString() {
            return "Min temp: " + minTemp + " Max temp: " + maxTemp + " <br>Sum of precipitation: " + sumOfPrecipitation + " <br>Avg wind speed: " + avgWindSpeed
        }

        callback({minTemp, maxTemp, sumOfPrecipitation, avgWindSpeed, toString})
    })
}

function appendForecast(forecast) {
    let container = document.getElementById("hourlyForecast");
    for (const element of forecast) {
        let div = document.createElement("div");
        div.innerHTML = element.toString();
        container.appendChild(div);
    }
}

function appendLastDay(data){
    let container = document.getElementById("lastDay");
    let div = document.createElement("div");
    div.innerHTML = data;
    container.appendChild(div);

}

export {getWeatherDataXML, getWeatherDataFetch, getWeatherForecastFetch, lastDayDataXML, appendForecast, appendLastDay}