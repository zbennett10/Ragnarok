//create an IIFE that returns an object with an api that fetches util methods located on the prototype of the base object

//use this config to test function in node
//modify this IIFE to recieve the window global and attach Ragnarok to window.document
const Rok = (function(){

    function Ragnarok() {};

    Ragnarok.prototype.log = function(split, ...args) {
        if(split === true) {
            if(args.length < 1) console.log(true);
            args.forEach(arg => console.log(arg));
            return;
        }
        console.log(split, ...args);
    }

    Ragnarok.prototype.getType = function(value) {
        if(typeof value === 'object') {
            if(value.length !== undefined) return 'array';
        }
        return typeof value;
    }

    


    return new Ragnarok();
})();

