

// 1. Create the object 'bankSbi'
const bankSbi = {
    name: "SBI",
    branch: "Main Branch",
    accountTypes: ["Savings", "Current"],
    totalBranches: 15000
};

// 2. Create the object 'bankLocation'
const bankLocation = {
    street: "Main Street",
    city: "Mumbai",
    pin: "400001"
};

// 3. Clone the objects using Object.assign()
const clonedBankSbi = Object.assign({}, bankSbi);
const clonedBankLocation = Object.assign({}, bankLocation);

console.log("Cloned bankSbi:", clonedBankSbi);
console.log("Cloned bankLocation:", clonedBankLocation);

// 4. Create the object 'rateOfInterest'
const rateOfInterest = {
    homeLoanInterest: "8%",
    personalLoanInterest: "10%",
    duelnterest: "12%"
};

// 5. Merge the objects into a new object 'sbiDetails'
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);

console.log("Merged sbiDetails:", sbiDetails);

// 6. Traverse the merged object using for...in loop
console.log("Traversing sbiDetails:");
for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
}
