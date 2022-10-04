function ForecastCommon(time, place, from, to, unit){
    function toString(){
        return "time: " + time.substring(11,19) + ", place: " + place + ", from: " + from + ", to: " + to + ", unit: " + unit;
    }
    return {
        time: time,
        place: place,
        from: from,
        to: to,
        unit: unit,
        toString: toString
    }
}

function Forecast(data){
    let list = [];

    for (let i = 0; i < data.length; i++) {
        let temperature = Temperature(data[i].type, data[i].time, data[i].place, data[i].from, data[i].to, data[i].unit);
        let precipitation = Precipitation(data[i + 1].type, data[i + 1].time, data[i + 1].place, data[i + 1].from, data[i + 1].to, data[i + 1].unit, data[i + 1].precipitation_types);
        let wind = Wind(data[i + 2].type, data[i + 2].time, data[i + 2].place, data[i + 2].from, data[i + 2].to, data[i + 2].unit, data[i + 2].directions);
        let cloudCover = CloudCover(data[i + 3].type, data[i + 3].time, data[i + 3].place, data[i + 3].from, data[i + 3].to, data[i + 3].unit);
        list.push(temperature, precipitation, wind, cloudCover);
        i+= 3;

       }

    function toString(){
        let str = "";
        for(const element of list) {
            str += element.toString() + "<br>"
        }
        return str;
    }

    return {
        forecast: list,
        toString: toString
    }
}

function HistoricalCommon(time, place, value, unit){
    function toString(){
        return "time: " + time + ", place: " + place + ", value: " + value + ", unit: " + unit;
    }
    return {
        time: time,
        place: place,
        value: value,
        unit: unit,
        toString: toString
    }
}

function HistoricalDataList(data){
    let list = [];
    if(data !== undefined){
    for(let i = 0; i < data.length; i++){
        let innerList = [];
        for(let j = 0; j < 4; j++) {
            innerList.push(HistoricalData(data[i + j]));
        }
        list.push(innerList);
        i+= 3;
    }
    }
    return list;
}

function HistoricalData(data){
    let common = HistoricalCommon(data.time, data.place, data.value, data.unit);
    
    function toString(){
        return common.toString() + ", type: " + data.type;
    }
    return {
        type: data.type,
        time: common.time,
        place: common.place,
        value: common.value,
        unit: common.unit,
        toString: toString
    }
}


function Temperature(type, time, place, from, to, unit) {
    let common = ForecastCommon(time, place, from, to, unit);
    
    function toString() {
        return "<b>type:</b> " + type + " | " + common.toString();
    }
    
    return {
        common: common,
        type: type,
        toString: toString
    }
}

function Precipitation(type, time, place, from, to, unit, precipitation_types){
    let common = ForecastCommon(time, place, from, to, unit);
    
    function toString() {
        return "<b>type:</b> " + type + " | " + common.toString() + " precipitation_types: " + precipitation_types;
    }
    
    return {
        common: common,
        type: type,
        precipitation_types: precipitation_types,
        toString: toString
    }
}

function Wind(type, time, place, from, to, unit, directions){
    let common = ForecastCommon(time, place, from, to, unit);
    
    function toString() {
        return '<b>type:</b> '+ type + " | " + common.toString() + " directions "+ directions;
    }
    
    return {
        common: common,
        type: type,
        directions: directions,
        toString: toString
    }
}
    
function CloudCover(type, time, place, from, to, unit){
    let common = ForecastCommon(time, place, from, to, unit);
    
    function toString() {
        return "<b>type:</b> " + type + " | " + common.toString();
    }
    
    return {
        common: common,
        type: type,
        toString: toString
    }
}

export default HistoricalDataList
export { HistoricalData, Temperature, Precipitation, Wind, CloudCover, Forecast }