var calculator = {
 currentInput : "0",
 memory : "0",
 operator : 0,

// Helper function for displaying the current input
displayCurrentInput: function() {
    document.getElementById('screen').value = this.currentInput;
},

// Adds a digit to the current input
addDigit: function (dig) {
    if (this.currentInput.length > 11) {
        document.getElementById('screen').value = "Too Many Numbers!";
        this.currentInput = "0";
    } else {
      if ((eval(this.currentInput) == 0) && (this.currentInput.indexOf(".") == -1)) {
        this.currentInput = dig;
      } else {
        this.currentInput = this.currentInput + dig;
      }
    this.displayCurrentInput();
    }
},
// Adds a decimal to the current input
addDecimal: function() {
    if (this.currentInput.length == 0) {
        //no leading ".", use "0."
        this.currentInput = "0.";
    } else {
        // First make sure one doesn't exist
        if (this.currentInput.indexOf(".") == -1) {
            this.currentInput = this.currentInput + ".";
        }
    }
    this.displayCurrentInput();
},

// Clears everything.
allClear: function() {
    this.currentInput = "0";
    this.operator = 0;                //clear operator
    this.memory = "0";                //clear memory
    this.displayCurrentInput();
},

// Stores the last operator pushed for multiply, divide, add, or subtract.
storeOperator: function(op) {
    if (op.indexOf("*") > -1) { this.operator = 1; };       //codes for *
    if (op.indexOf("/") > -1) { this.operator = 2; };       // slash (divide)
    if (op.indexOf("+") > -1) { this.operator = 3; };       // sum
    if (op.indexOf("-") > -1) { this.operator = 4; };       // difference

    this.memory = this.currentInput;                 //store value
    this.currentInput = "0";
    this.displayCurrentInput();
},

// Calculate using operator, the memory and what is current
calculate: function() {
    if (this.operator == 1) { this.currentInput = eval(this.memory) * eval(this.currentInput); };
    if (this.operator == 2) if (eval(this.currentInput) == 0) {
        this.currentInput = "ERROR";
    }else{
        this.currentInput = eval(this.memory) / eval(this.currentInput); };
    if (this.operator == 3) { this.currentInput = eval(this.memory) + eval(this.currentInput); };
    if (this.operator == 4) { this.currentInput = eval( this.memory) - eval(this.currentInput); };

    this.operator = 0;                //clear operator
    this.memory  = "0";              //clear memory
    this.displayCurrentInput();
},

// Change the sign of the current input
changeSign: function() {
   this.currentInput = this.currentInput*(-1);
   this.displayCurrentInput();
},
}
