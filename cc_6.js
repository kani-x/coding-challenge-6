// Task 1: Business Profit Calculation

// Function declaration to calculate profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

// Test data
calculateProfit(20, 30, 100);  // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200);  // Expected output: "Total Profit: $4000"

// Task 2: Sales Tax Computation

// Function expression to calculate sales tax
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
};

// Test data
calculateSalesTax(100, 0.07);  // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);   // Expected output: "Sales Tax: $50"

// Task 3: Employee Bonus Calculation

// Arrow function to calculate bonus
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage;
    if (performanceRating === "Excellent") {
        bonusPercentage = 0.2;
    } else if (performanceRating === "Good") {
        bonusPercentage = 0.1;
    } else if (performanceRating === "Average") {
        bonusPercentage = 0.05;
    }
    const bonus = salary * bonusPercentage;
    console.log(`Bonus: $${bonus}`);
};

// Test data
calculateBonus(5000, "Excellent");  // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");       // Expected output: "Bonus: $700"

// Task 4: Subscription Pricing Model

// Function to calculate subscription cost
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricePerMonth;
    if (plan === "Basic") {
        pricePerMonth = 10;
    } else if (plan === "Premium") {
        pricePerMonth = 20;
    } else if (plan === "Enterprise") {
        pricePerMonth = 50;
    }

    const totalCost = (pricePerMonth * months) * (1 - discount / 100);
    console.log(`Total Cost: $${totalCost}`);
}

// Test data
calculateSubscriptionCost("Basic", 6, 10);   // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0);  // Expected output: "Total Cost: $240"
