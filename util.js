//create an IIFE that returns an object with an api that fetches util methods located on the prototype of the base object

//use this config to test function in node
//modify this IIFE to recieve the window global and attach Ragnarok to window.document
(function(exports){

    exports.log = function(split, ...args) {
        if(split === true) {
            if(args.length < 1) console.log(true);
            args.forEach(arg => console.log(arg));
            return;
        }
        console.log(split, ...args);
    }

    exports.getType = function(value) {
        if(typeof value === 'object') {
            if(value.length !== undefined) return 'array';
        }
        return typeof value;
    }

    Rok = exports;

})({});


Rok.log(true, "poop", "sauce", "poop");

