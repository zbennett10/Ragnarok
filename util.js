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

    exports.insert = function(array, index, value) {
        if(array === []) return [value];
        return array.slice(0, index).concat([value].concat(array.slice(index)));
    }

    exports.mutableInsert = function(array, index, value) {
        if(array === []) {
            array.push(value);
            return;
        }
        array.push(array[array.length-1]);
        for(let i = array.length - 1; i > index; i--) {
            array[i] = array[i-1];
        }
        array[index] = value;
    }

    //still working on this
    exports.mutableZip = function(left, right) {
        let larger, smaller;
        if(left.length >= right.length) {
            larger = left;
            smaller = right;
        } else {
            larger = right;
            smaller = left;
        }
        larger.forEach((value, index, array) => {
                exports.mutableInsert(array, index, smaller[index]);
            });
        return larger;
    }

    Rok = exports;

})({});

console.log(Rok.mutableZip([1,3,5], [2,4]));



