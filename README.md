#CodeJam

Module-helper for solving problems in a [CodeJam](https://code.google.com/codejam/) competition on Node.js.

##Getting started

At first you need to get a module from [NPM](https://npmjs.org/):

```
npm install code_jam
```

Then you have to specify some methods in your file:

```javascript
var codejam = require('code_jam')();

codejam.readCase = function() {
    // Here you must get input data and return them to the evaluate method
    
    return {
        n : this.readLine(),
        m : this.readLine(),
        str : this.readLine()
    };
};

codejam.evaluate = function(input) {
    // Here you are writing your main code
    
    return 'result of solving the case';
};
    

codejam.run();
```

Finally you need to run a command:
```
node path/to/your/file.js path/to/your/input.in
```
