//create an IIFE that returns an object with an api that fetches util methods located on the prototype of the base object

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



    return new Ragnarok();
})();

