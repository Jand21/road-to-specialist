const testName: string = "Login test";
let testStatus: "pending" | "passed" | "failed" = "pending";
let errorMessage: string | null = null;
let executionTime: number | undefined = undefined;

console.log(testName);
console.log(testStatus);
console.log(errorMessage);
console.log(executionTime);

testStatus = "failed";
errorMessage = "Login button not found";
executionTime = 1250;

console.log(testStatus);
console.log(errorMessage);
console.log(executionTime);