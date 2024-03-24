// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.font.family = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.color = '#292b2c';

const areaDemoData = {
    labels: [
        "Mar 1",
        "Mar 2",
        "Mar 3",
        "Mar 4",
        "Mar 5",
        "Mar 6",
        "Mar 7",
        "Mar 8",
        "Mar 9",
        "Mar 10",
        "Mar 11",
        "Mar 12",
        "Mar 13",
    ],
    datasets: [{
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        fill: 'origin',
        data: [10000, 22310, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 38451]
    }]
};

const areaDemoConfig = {
    type: 'line',
    data: areaDemoData,
    options: {
        scales: {
            x: {
                ticks: {
                    maxTicksLimit: 7
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    min: 0,
                    max: 40000,
                    maxTicksLimit: 7,
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, areaDemoConfig);
