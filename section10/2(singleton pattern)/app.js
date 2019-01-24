//24-1-2019

const singleton = (function(){
    let instance;

    function createInstance(){
        const object = new Object({name: 'Manoj'});
        return object;
    }
    return{
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB);
console.log(instanceA);
