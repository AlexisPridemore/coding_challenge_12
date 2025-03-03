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
        const heading = document.createElement("h3");           //CReate h3 element for title
        heading.textContent = title;                            //Setting the text content for the title
        const paragraph = document.createElement("p")           //Create Paragraph element
        paragraph.textContent = `$${amount}`;                   //Setting dollar amount
        metricDiv.appendChild(heading);                         //Append heading to the metric card
        metricDiv.appendChild(paragraph);                       //Append paragraph to the metric card

        return metricDiv;                               //Returning the created metric card
    }
});

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays



