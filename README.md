
### Unit testing
- Unit - A building block of your app
- e.g. a function, a class, a componnet

### Types of testing
- Unit testing
- Integration testing
- End-to-end(E2E) testing

### Test-Driven Development (TDD)
1. Write a failing test first
2. Implement the code to make the test success
3. Refactor the code

### Test Runner
- Runs your tests (i.e. the testing code)
- Automatically detects testing code
- Displays results
- e.g. Jest, Karma

#### Assertion Library
- Used to define expected autcomes
- Checks whether expectations are met
- Supports all kinds of expectations and modes (sync/async)
- e.g. Jest, Chai

### Running test using command
npm test

### File name convention
- use .test.js extension e.g. app.test.js test file app.js
- use .spec.js extension e.g. app.spec.js test file app.js
- both files will be detected by testing library

### AAA Pattern - Arrange, Act, Assert
- Arrange - define the testing environment and values
- Act - Run the actual code/function that should be tested
- Assert - Evaluate the produced value/result and compare it to the expected value/result

### What not to test
- functionalities of global APIs
- external library functionality
- something which you can't change


### Writing Good Tests
- Follow AAA Pattern
- Only test one thing at a time
- Focus on the essance of a test when arranging
- Keep your number of assertions ('expects') low


### Integration test
- combining multiple units/modules/functions