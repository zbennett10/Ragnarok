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
        if(exports.getType(isoString) === 'date') return isoString;
        //regex credit goes to -- http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
        if(/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/.test(isoString)) {
            return new Date(...isoString.split(/\D+/));
        }
        throw new Error("Invalid format - Please pass an ISO string.");
        return null;
    }

    Rok = exports;

})({});

