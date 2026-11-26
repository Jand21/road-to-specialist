const applicationName: string = "Test Application";
const baseUrl: string = "https://example.com";
const timeout: number = 30000;
const headless: boolean = true;
let retryCount: number = 0;
let failedTests: number = 0;
let isTestPassed: boolean = false;

retryCount += 2;
failedTests += 1;
isTestPassed = true;

console.log(applicationName);
console.log(baseUrl);
console.log(timeout);
console.log(headless);
console.log(retryCount);
console.log(failedTests);
console.log(isTestPassed);