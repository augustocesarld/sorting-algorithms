const colors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    pink: 'rgb(255,20,147)'
};

var options = {
        
};

function mountChart (data) {
    let ctx = document.getElementById('result').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data,
        options
    });
}

function loadChart () {
    enableSpinner();

    let min = document.getElementById('minValue').value || 0;
    let max = document.getElementById('maxValue').value || 100;
    let size = document.getElementById('size').value || 5000;

    let xhr = new XMLHttpRequest();
    let url = `http://localhost:8000/results?min=${min}&max=${max}&size=${size}`;

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            disableSpinner(true);
            let jsonData = JSON.parse(xhr.responseText);

            console.log(jsonData)

            let data = {
                labels: jsonData[0].numbers.map(number => '' + number),
                datasets: jsonData.map(result => {return {
                    label: result.name,
                    data: result.times,
                    fill: false,
                    backgroundColor: colors[Object.keys(colors)[jsonData.indexOf(result)]],
                    borderColor: colors[Object.keys(colors)[jsonData.indexOf(result)]],
                }}) 
            };

            mountChart(data);
        } else {
            console.log("ERRO AJAX: ", xhr.statusText)
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
    
}