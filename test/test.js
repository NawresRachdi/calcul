// test/test.js
const { display, Clear, calc } = require('../calcul');
//Patch
describe('display function', () => {
    it('should append num to output', () => {
        const output = { value: "" }; // Initialize output object
        const num = 5;
        display(output, num);
        expect(output.value).toBe("5");
    });
});
//Mock/return_value
describe('calc function', () => {
    it('should evaluate expression and set output value', () => {
        const output = { value: "" };
        output.value = "2+3";
        calc(output);
        expect(output.value.toString()).toBe("5");
    });
    it('should set output value to "error" if an error occurs', () => {
        const output = { value: "" }; 
        output.value = "2+";
        calc(output);
        expect(output.value).toBe("error");
    });
});
//Mock/side_effect

describe('Clear function', () => {
    it('should clear the output value', () => {
        const output = { value: "123" }; // Initialize output object with initial value
        Clear(output);
        expect(output.value).toBe("");
    });
});
