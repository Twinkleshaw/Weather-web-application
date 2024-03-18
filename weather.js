
const apikey="707e0db49bf18b258aa07cc364d84ab7";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".card input");
const searchBtn=document.querySelector(".card button");
const weatherIcon=document.querySelector(".weather");

async function checkWeather(city){
const response =await fetch(apiurl  + city + `&appid=${apikey}`);
if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".details").style.display="none";

}
else{
    var data=await response.json();

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +" °c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
if(data.weather[0].main=="Clouds"){
   weatherIcon.src="cloud.png";
}
else if(data.weather[0].main=="Clear"){
   weatherIcon.src="clear-sky.png";
}
else if(data.weather[0].main=="Rain"){
   weatherIcon.src="rain.png";
}
else if(data.weather[0].main=="Wind"){
   weatherIcon.src="wind.png";
}
else if(data.weather[0].main=="Mist"){
   weatherIcon.src="cloudy.png";
}
document.querySelector(".details").style.display="block";
document.querySelector(".error").style.display="none";
}
}


searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
})





