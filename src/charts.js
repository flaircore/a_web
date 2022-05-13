
// see docs @ https://www.chartjs.org/docs/next/getting-started/integration.html#bundlers-webpack-rollup-etc
import Chart from 'chart.js/auto';
import 'bootstrap/js/dist/modal';
const chart01 = document.getElementById('chart01').getContext('2d')
const chart02 = document.getElementById('chart02').getContext('2d')
const todoListDiv = document.querySelector('#todo-list')

const todoList = {
    value: ["Walk Dog", "Publish Blog", "Renew expired subscriptions"]
}

todoList.value = [...todoList.value, "Buy groceries"]
todoList.value = [...todoList.value, "Fix reactivity Bug"]

for (const todo of todoList.value) {
    // Creates a "todo" document
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    const newItem = document.createElement("li")
    newItem.innerText = todo
    newItem.classList.add("item")
    todoDiv.appendChild(newItem)


    // Add item to list
    todoListDiv.appendChild(todoDiv)
}

const myChart = new Chart(chart01, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const myChart02 = new Chart(chart02, {
    type: 'bar',
    data: {
        labels: ['Houses', 'Hotels', 'Lofts', 'Parks', 'Cottage', 'Cruise-Ships'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});