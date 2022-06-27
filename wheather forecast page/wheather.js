$(function(){
 $("#submit").on("click",function(){
document.getElementById("output").innerHTML='<div id="place">Loading...</div><div id="temp"></div><hr><div id="main">Loading...</div><div id="min_max">Loading...</div><hr><div id="humidity">Loading...</div><div id="r"></div><div id="sun">Loading...</div></div>'; 
var x = $("#searchBar").val();
    var api = "https://api.openweathermap.org/data/2.5/weather?q="+x+"&units=metric&appid=af50bbd7309f973b6a2318253e78ad20";


    $.getJSON(api, response);
 });   
});

function response(data){
console.log(Object.keys(data.main));
    $("#place").text(data.name);
    $("#temp").text(data.main.temp+"°C");
    $("#main").text(data.weather[0].main);
    $("#min_max").text(data.main.temp_min +"°C  | " +data.main.temp_max+"°C");
    $("#humidity").text("Humidity : "+data.main.humidity+"°C");
    $("#r").text("SunRise : SunSet");
    $("#sun").text(data.sys.sunrise +" : "+data.sys.sunset);
};