//24-1-2019

//Basic Strucure
    // (function() {
    //  //Declare private vars and functions

    //  return{
    //      //Declare public var and functions
    //  }
    // })();


//STANDARD MODULE PATTERN
    // const UIctrl = (function(){
    //  let text = 'Hello World';
    
    //  const changeText = function(){
    //      const element = document.querySelector('h1');
    //      element.textContent = text;
    //  }

    //  return {
    //      callchangeText: function(){
    //          changeText();
    //          console.log(text);
            
    //      }
    //  }

    // })();

    // UIctrl.callchangeText();
    // //UIctrl.changeText();
    // console.log(UIctrl.text);

//REVEALING MODULE PATTERN
const ItemCtrl = (function(){
    let data = [];

    function add(item){
    data.push(item);
    console.log('Item added....');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 0, name: 'Manoj'});
ItemCtrl.add({id: 1, name: 'Mark'});
console.log(ItemCtrl.get(1));