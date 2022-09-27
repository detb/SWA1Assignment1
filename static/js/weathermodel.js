function ForecastCommon(time, place, from, to, unit){
    function toString(){
        return "time: " + time + ", place: " + place + ", from: " + from + ", to: " + to + ", unit: " + unit;
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
        return common.toString() + ", type: " + type;
    }
    
    return {
        type: type,
        toString: toString
    }
}

function Precipitation(type, time, place, from, to, unit, precipitation_type){
    let common = ForecastCommon(time, place, from, to, unit);
    
    function toString() {
        return common.toString() + ", type: " + type + ", precipitation_type: " + precipitation_type;
    }
    
    return {
        type: type,
        precipitation_type: precipitation_type,
        toString: toString
    }
}

function Wind(type, time, place, from, to, unit, directions){
    let common = ForecastCommon(time, place, from, to, unit);
    
    function toString() {
        return common.toString() + ", type: " + type + ", direction: " + directions;
    }
    
    return {
        type: type,
        direction: directions,
        toString: toString
    }
}
    
function CloudCover(type, time, place, from, to, unit){
    let common = ForecastCommon(time, place, from, to, unit);
    
    function toString() {
        return common.toString() + ", type: " + type;
    }
    
    return {
        type: type,
        toString: toString
    }
}

export default HistoricalDataList
export { HistoricalData, Temperature, Precipitation, Wind, CloudCover }