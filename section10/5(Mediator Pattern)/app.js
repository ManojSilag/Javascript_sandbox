
const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
    this.chatroom.send(message, this, to);
    },
    recieve: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
    
    }
}
const Chatroom = function(){
    let users= {}; //list of Users
    return {
        register: function(user){
        users[user.name] = user;
        user.chatroom = this;
        },
        send: function(message, from, to){
        if(to){
        //Single user msg
        to.recieve(message, from);
        }else{
        // Mass message 
        for(key in users){
            
            if(users[key] !== from){
                users[key].recieve(message, from);
            }
        }
        }
        }
    }
}

const Manoj = new User('Manoj');
const jeff = new User('jeff');
const Sara = new User('Sara');

const chatroom = new Chatroom();
chatroom.register(Manoj);
chatroom.register(jeff);
chatroom.register(Sara);


// Manoj.send('Hello Jeff', jeff)
// Sara.send('Hello Manoj, you are best dev', Manoj);
// jeff.send('hello eyeryone');

