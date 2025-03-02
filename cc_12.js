// Task 1: Business Dashboard – DOM Element Selection and Creation

//Ensuring the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {  
    const dashBoardDiv = document.getElementById("dashboard");     //select the dashboard container
    const dashBoardDivAlt = document.querySelector("#dashboard");  //select the dashboard container

    //Appending Revenue card first
    dashBoardDiv.appendChild(createMetricCard("revenueCard", "Revenue", 1200)); 

    //function to create a metric card
    function createMetricCard(id, title, amount) {       
        const metricDiv = document.createElement("div");
        metricDiv.setAttribute("id", id);                       //Setting an ID 
        metricDiv.setAttribute("class", "metric-card");         //Assigning the class "metric-card"
        const heading = document.createElement("h3");
        heading.textContent = title;
        const paragraph = document.createElement("p")
        paragraph.textContent = `$${amount}`;
        metricDiv.appendChild(heading);
        metricDiv.appendChild(paragraph);

        return metricDiv;
    }
});

