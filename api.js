function OnSelectionChange() {
    let selectedOption = document.querySelector('.citySelect').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedOption}&appid=a409b913ea0108c58c4c7c75d69d3d8f`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.name').textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.description').textContent = data.weather[0]['description'];
            document.querySelector('.icon').innerHTML = `<img class='icon_item' src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {

        });
}

function OnSelectionClick() {
    let searchCity = document.querySelector('.insert').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=a409b913ea0108c58c4c7c75d69d3d8f`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.name').textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.description').textContent = data.weather[0]['description'];
            document.querySelector('.icon').innerHTML = `<img class='icon_item' src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {

        });
}




document.querySelector('.button').onclick = OnSelectionClick;

document.querySelector('.citySelect').onchange = OnSelectionChange;

