// Task 1: Business Dashboard – DOM Element Selection and Creation

const dashboardById = document.getElementById("dashboard");
const dashboardByQuery = document.querySelector("#dashboard");

function createMetricCard(id, title) {
    const card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);
    card.innerHTML = `
    <h3>${title}</h3>
    <p>$0</p>
    `;
    return card;
};

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCards = document.querySelectorAll(".metric-card");   //Selected all metric cards
const metricCardArray = [...metricCards];                        //Convert list to an Array

metricCardArray.forEach((card) => {
    const title = card.querySelector("h3");
    title.innerText += " - Updated";
    card.computedStyleMap.backgroundColor = "lightPurple";
});

//Added 3 metric cards 
dashboardById.appendChild(createMetricCard("revenueCard", "Revenue"));
dashboardById.appendChild(createMetricCard("profitCard", "Profit"));
dashboardById.appendChild(createMetricCard("expensesCard", "Expenses"));
//Added starting values
document.getElementById("revenuueCard").querySelector("p").innerText = "$400";
document.getElementById("profitCard").querySelector("p").innerText = "$600";
document.getElementById("expensesCard").querySelector("p").innerText = "$800";

// Task 3: Dynamic Inventory Management – Adding and Removing Items

function addInventoryItem(productName) {
    const inventroyList = document.getElementById("inventoryList");
    const productItem = document.createElement("li");
    productItem.setAttribute("class", "product-item");
    productItem.innerText = productName;
    productItem.addEventListener("click", () => {
        removeProductItem(productItem);
    });
    inventroyList.appendChild(productItem);
};

//Test case: adding products
addInventoryItem("Mocha");
addInventoryItem("Latte");

document.getElementById("addProductButton").addEventListener("click", () => {
    addInventoryItem("Exclusive: Blondie");
});

// Task 4: Business Customer Section – Handling Event Bubbling

const customerSection = document.getElementById("customerSection");

customerSection.addEventListener("click", () => {
    console.log("This item has been selected");
});

const customers = ["Customer 1", "Customer 2"];

customers.forEach((name) => {
    const customerCard = document.createElement("div");
    customerCard.classList.add("customer-card");
    customerCard.innerText = name;

    customerCard.addEventListener("click", (event) => {
        console.log(name + " has been selected");
        event.stopPropagation();
    });
    customerSection.appendChild(customerCard);
});


