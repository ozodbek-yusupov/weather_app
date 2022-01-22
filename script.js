function openWeather() {
    city_name = document.getElementById("city_name").value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&APPID=b2b2ce6e7999964cf46c1849fe69edc0')
        .then(response => response.json())
        .then(data => {
            let kelvin = data.main.temp;
            let celsius = Math.round(kelvin - 273.15);
            console.log(data);
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('temp').innerHTML = celsius;
            document.getElementById('humidity').innerHTML = data.main.humidity;
            document.getElementById('pressure').innerHTML = data.main.pressure;
            document.getElementById('wind').innerHTML = data.wind.speed;
            document.querySelector('.gmaps').innerHTML = `<iframe
            src="https://maps.google.com/maps?q=${city_name}&t=&z=7&ie=UTF8&iwloc=&output=embed" 
            frameborder="0"
            scrolling="no"
            marginheight="0" 
            marginwidth="0">
        </iframe>`;
        })
}


function dateTimeNow() {
    let date = new Date();
    let str = date.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    document.getElementById('time').innerHTML = str;
}
setInterval(dateTimeNow, 1000);