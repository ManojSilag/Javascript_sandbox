
class EventObserver{
    constructor(){
    this.observers = [];
    }

    subscribe(fn){
    this.observers.push(fn);
    console.log(`you are now subscribed to ${fn.name}`);
    }

    unsbscribe(fn){
    this.observers = this.observers.filter(function(item){
        if(item !== fn){
            return item;
        }
    })
    console.log(`you are now  unsubscribed from ${fn.name}`);
    }

    fire(){
    this.observers.forEach(function(item){
    item.call();
    });
    }
}

const click = new  EventObserver();

//Event listner
document.querySelector('.sub-ms').addEventListener('click', function(){
click.subscribe(getCurMillisecond);
});


document.querySelector('.unsub-ms').addEventListener('click', function(){
click.unsbscribe(getCurMillisecond);
});
//-------------//
document.querySelector('.sub-s').addEventListener('click', function(){
click.subscribe(getCursecond);
});


document.querySelector('.unsub-s').addEventListener('click', function(){
click.unsbscribe(getCursecond);
});


document.querySelector('.fire').addEventListener('click', function(){
click.fire();
});


//click Handler
const getCurMillisecond = function (){
    console.log(`current Millisecond: ${new Date().getMilliseconds()}`);
}


const getCursecond = function (){
    console.log(`current seconds: ${new Date().getSeconds()}`);
}