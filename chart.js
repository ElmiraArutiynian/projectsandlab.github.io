//Elmira Arutiynian, we will first create a laberls array that will hold each of the data points
//Next, datasets will hold the array of objects 
//Next I will be adding color in order for to differ each one of the labels
const data = {
    labels: ['Apples', 'Oranges', 'Bananas', 'Strawberries', 'Grapes'],
    datasets: [{
        label: 'Elmira Arutiynian',
        data: [16, 29, 17, 5, 2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgb(255, 100, 131)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 111, 255)'
        ],
        borderWidth: 1
    }]
};
//this creates doughnut chart
var ctx = document.getElementById('doughnutChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {}
});
//this creates bar chart
ctx = document.getElementById('barChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y',  
    }
});