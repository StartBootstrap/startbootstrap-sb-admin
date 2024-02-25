// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.font.family = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.color = '#292b2c';

const barDemoData = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
    ],
    datasets: [{
        label: "Revenue",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [4215, 5312, 6251, 7841, 9821, 14984],
    }]
};

const barDemoConfig = {
    type: 'bar',
    data: barDemoData,
    options: {
        scales: {
            x: {
                ticks: {
                    maxTicksLimit: 6
                }
            },
            y: {
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 4
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

var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, barDemoConfig);
