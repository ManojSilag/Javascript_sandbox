//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
 //Hide results
 document.getElementById('results').style.display = 'none';
 //show loader
 document.getElementById('loading').style.display = 'block';
 setTimeout(calculateResults,2000);
 

 e.preventDefault();
});

//Calculate Results
function calculateResults(){
    
   
    //UI vars
    const amount = document.querySelector('#amount').value;
    const interest =document.querySelector('#interest').value;
    const years =document.querySelector('#years').value;

    
    //resuls vars
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount); 
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    //Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly* calculatedPayments) - principal).toFixed(2);

      //Show results
      document.getElementById('results').style.display = 'block';

      //Hide Loader
      document.getElementById('loading').style.display = 'none';

    } else {
        showError('please check your Number');
    

    }
};

    //Show Error
    function showError(error){

         //hide results
      document.getElementById('results').style.display = 'none';

      //Hide Loader
      document.getElementById('loading').style.display = 'none';

        //create div
        const errorDiv = document.createElement('div');
        //Get element
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');
        //Add class
        errorDiv.className = 'alert alert-danger';
       //create text node and append to div
       errorDiv.appendChild(document.createTextNode(error));
       //Insert above Heading
       card.insertBefore(errorDiv,heading);
      //Clear error after 2 seconds
      setTimeout(clearError, 2000);
    }

    function clearError(){
        document.querySelector('.alert').remove();
    }
