import HistoricalData from "./weathermodel.js";
import HistoricalDataList from "./weathermodel.js";

async function init(){
    let model;
    await getAllWeather().then(data => {
        model = new HistoricalDataList(data)
        console.log(model);
    });
}
async function getAllWeather() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/data');
    xhr.onload = function () {
        const jsonData = JSON.parse(xhr.responseText);
        let histData = new HistoricalDataList(jsonData);
        console.log(histData.toString())
        return jsonData;
    }
    xhr.send();
}

function getAllWeatherFetch() {
    fetch('http://localhost:8080/data')
        .then(response => response.json())
        .then(data => console.log(data))
}

init();