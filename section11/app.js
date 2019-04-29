// Storage Controller



//Item Controller
const ItemCtrl = (function(){
    // Itme consstructer
    const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
    }

    //Data Structure / State
    const data = {
        items: [
            {id: 0, name: "Steak Dinner", calories: 1200},
            {id: 1, name: " cookies", calories: 400},
            {id: 3, name: "Eggs", calories: 200}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public method
    return {

        getItems: function(){
        return data.items;
        },
        logData: function (){
            return data;
        }
    }
})();




// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list'
    }
    
    // Public methods
    return{
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong> ${item.name}: </strong> <em>${item.calories}: calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>`
            });
            //Insert List Items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
    
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
    

    // Public methods
    return{
        init: function(){
            console.log('Initializing function...');

            //Fetch items from data structure
            const items = ItemCtrl.getItems();
            
            //Populate list with itmes
            UICtrl.populateItemList(items);
        }
    }
    
})(ItemCtrl, UICtrl);


// Initialize App
App.init();