//Init Githhub
const github = new Github;

//Init UI
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//Search input event listner
searchUser.addEventListener('keyup', (e) =>{
    //Get input text
    const userText =e.target.value;
    if(userText !== ''){
        console.log(userText);

        //Make http call
        github.getUser(userText)
        .then(data =>{
            //console.log(data.profile);
            
            if(data.profile.message === 'Not Found'){
            //Show alert
            ui.showAlert('User not found', 'alert alert-danger')
            } else{
            //Show profile
            ui.showProfile(data.profile);
            }
        })
    } else {
        //Clear profile
        ui.clearProfile();
    }
})
