// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.font.family = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.color = '#292b2c';

// Pie Chart Example
const pieDemoData = {
    labels: [
        "Blue",
        "Red",
        "Yellow",
        "Green"
    ],
    datasets: [{
        data: [12.21, 15.58, 11.25, 8.32],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745']
    }]
};

const pieDemoConfig = {
    type: 'pie',
    data: pieDemoData
};

var ctx = document.getElementById("myPieChart");
var myLineChart = new Chart(ctx, pieDemoConfig);