document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create an XHR Object
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    

    //Open
    xhr.open('GET', 'data.txt', true);

    console.log("READYSTATE", xhr.readyState);
    
    //Optional - used for spinners/loaders
    xhr.onprogress = function(){
        console.log("READYSTATE", xhr.readyState);
    }



    xhr.onload = function(){
        console.log("READYSTATE", xhr.readyState);
      if(this.status === 200){
      console.log(this.responseText);
      document.getElementById('output').innerHTML = 
      `<h2>
      ${this.responseText}
      </h2>`;
      }
    }

    // xhr.onreadystatechange = function(){
    //     console.log("READYSTATE", xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('error....');
        
    }
    xhr.send();

    //ReadyState Values
    //0: request no initialized
    //1: server connection established
    //2: request recived
    //3: processing request
    //4:request finished and response is ready

    //HTTP statuses
    //200: OK
    //403: Forbidden
    //404: Not Found
}





// const num1 = 5;
// const num2 = new Number(5);
// console.log(num1);
// console.log(num2);
