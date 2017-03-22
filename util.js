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
            if(typeof value.getTime === 'function') return 'date';
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

    //zips the right onto the left
    //fix this
    exports.zip = function(left, right) {
        const output = [];
        const newLeft = left.slice();
        const newRight = right.slice();
        while(newRight.length > 0) {
            if(newLeft.shift() !== undefined) output.push(newLeft.shift());
            output.push(newRight.shift());
        }
        if(newLeft.length > 0) return output.concat(newLeft.slice());
        return output;
    }

    //date helpers-----------------------------------
    exports.dateFromISO = function(isoString) {
        return new Date(...isoString.split(/\D+/));
    }

    Rok = exports;

})({});

// const arr1 = [1,3];
// const arr2 = [2,4,5,6];
// console.log(Rok.zip(arr1, arr2));

console.log(Rok.getType(new Date()));

