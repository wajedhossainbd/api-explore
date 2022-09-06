// Do Not show API Key on your JS file

const Weather_API_KEY = `7a99c4d7cd6d9c14ff26e7b0ae062d06`;
const loadTemp = city => {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_API_KEY}&units=metric`;
fetch (url)
.then(res => res.json())
.then(data => displayTemp(data));
}



const displayTemp = data =>{
setInnertextByID('temp', data.main.temp);
setInnertextByID('clouds', data.weather[0].main);
}

document.getElementById('src-btn').addEventListener('click', function(){


    const srcField = document.getElementById('src-field');
    const city = srcField.value;
    loadTemp(city);

    setInnertextByID('city-name', city);
    srcField.value = '';
})







loadTemp('Dhaka');
