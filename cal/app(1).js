document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
    e.preventDefault();
    //console.log('calculating...');
    
    //UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totlaPayment = document.getElementById('total-payment');
    const totlaInterest = document.getElementById('totla-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value)/12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment); //제곱
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        //checking infitiny or not
        monthlyPayment.value = monthly.toFixed(2); //둘째자리에서 반올림
        totlaPayment.value = (monthly * calculatedPayment).toFixed(2);
        totlaInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
    }else{
        showError('Please check your numbers');
        console.log('plz check your num');
    }

}

//Show Error
function showError(error){
    //create <Div>
    const errorDiv = document.createElement('div');

    //get Element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    //now insert this into the DOM


    //insert error above heading
    card.insertBefore(errorDiv, heading);

    //Clear Error after 3 sec
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}
