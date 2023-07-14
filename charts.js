window.onload = function() {
    Chart.defaults.color = 'rgba(255, 255, 255, 0.9)'; // text color
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.9)'; // border color
    Chart.defaults.plugins.legend.labels.color = 'rgba(255, 255, 255, 0.9)'; // legend color

    var ctx = document.getElementById('myChart').getContext('2d');

    var weightData = data.map(item => item.weight);
    var muscleMass = data.map(item => item.muscleMass);
    var grassMass = data.map(item => item.fatMass);

    var extendBy = 1;

    var trendlineWeight = calculateTrendline(weightData);
    var trendlineMM = calculateTrendline(muscleMass);
    var trendlineGM = calculateTrendline(grassMass);

    // Extend date labels
    var lastDateStr = data[data.length - 1].date;  // Assumes date is in 'DD-MM-YYYY' format
    var parts = lastDateStr.split("-");
    var lastDate = new Date(parts[2], parts[1] - 1, parts[0]);

    var extendedLabels = data.map(item => item.date);  // Start with existing labels

    for (var i = 0; i < extendBy; i++) {
        lastDate.setDate(lastDate.getDate() + 1);  // Increment date by 1 day
        var nextDateStr = ('0' + lastDate.getDate()).slice(-2) + "-" + ('0' + (lastDate.getMonth() + 1)).slice(-2) + "-" + lastDate.getFullYear();
        extendedLabels.push(nextDateStr);
    }

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: extendedLabels,
            datasets: [
                {
                    label: 'Weight (kg)',
                    data: data.map(item => item.weight),
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 1
                },
                {
                    label: 'Trendline',
                    data: trendlineWeight,
                    backgroundColor: 'rgba(255, 255, 0, 0.1)',
                    borderColor: 'rgba(255, 255, 0, 1)',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                    pointHoverRadius: 0
                },
                {
                    label: 'Fat Mass (kg)',
                    data: data.map(item => item.fatMass),
                    backgroundColor: 'rgba(255, 0, 123, 0.2)',
                    borderColor: 'rgba(255, 0, 123, 1)',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 1
                },
                {
                    label: 'Trendline',
                    data: trendlineGM,
                    backgroundColor: 'rgba(255, 255, 0, 0.1)',
                    borderColor: 'rgba(255, 255, 0, 1)',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                    pointHoverRadius: 0
                },
                {
                    label: 'Muscle Mass (kg)',
                    data: data.map(item => item.muscleMass),
                    backgroundColor: 'rgba(0, 255, 123, 0.2)',
                    borderColor: 'rgba(0, 255, 123, 1)',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 1
                },
                {
                    label: 'Trendline',
                    data: trendlineMM,
                    backgroundColor: 'rgba(255, 255, 0, 0.1)',
                    borderColor: 'rgba(255, 255, 0, 1)',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                    pointHoverRadius: 0
                },
                {
                    label: 'IMC',
                    data: data.map(item => item.imc),
                    backgroundColor: 'rgba(82, 82, 82, 0.2)',
                    borderColor: 'rgba(82, 82, 82, 1)',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)', // grid line color
                    },
                    ticks: {
                        color: 'rgba(255, 255, 250, 0.9)', // ticks color
                        stepSize: 1,
                        precision: 0,
                        max: 100, 
                        suggestedMax: 100
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)', // grid line color
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.9)', // ticks color
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        filter: function(legendItem, chartData) {
                            return legendItem.text !== 'Trendline';
                        }
                    }
                },
                title: {
                    color: 'rgba(255, 255, 255, 0.9)' // title color
                }
            }
        }
    });
};

function calculateTrendline(data) {
    var n = data.length;
    var extendBy = Math.floor(n * 0.2);  // Extend the trendline by 20% 

    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumXX = 0;

    for (var i = 0; i < n; i++) {
        sumX += i;
        sumY += data[i];
        sumXY += i * data[i];
        sumXX += i * i;
    }

    var slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;

    var trendline = [];
    for (var i = 0; i < n + extendBy; i++) {  // Extend the loop to generate more points
        trendline.push(slope * i + intercept);
    }

    return trendline;
}

