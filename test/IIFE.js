// An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.
// IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.


// Don't need to return a value
(function() {
    console.log("This is run immediately");
  })()


// Executed immediately and returned to a value
var result = (function() {
    return "From IIFE";
}());
console.log(result); 

// Executed immediately with parameters
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 5));

// More complex example
var Sequence = (function () {
    // Private variable to store current counter value.
    var current = 0;
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2