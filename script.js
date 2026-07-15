const form=document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#Height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('.results');

    if(height <= 0 || isNaN(height)){
        result.innerHTML=`Please Enter a Valid height ${height}`;
    }
    else if(weight <= 0 || isNaN(weight)){
        result.innerHTML=`Please Enter a Valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML=`Your BMI is ${bmi}. Bhai Kuchh Khaya kar yaar, Tu Under Weight Category mai hai`;
            result.style.backgroundColor="Red";
        }
        else if(bmi>18.6 && bmi<=24.9){
            result.innerHTML=`Your BMI is ${bmi}. Tu to ek dam Fit hai, Gym Jata hai kya ?`;
            result.style.backgroundColor="Green";
        }
        else{
            result.innerHTML=`Your BMI is ${bmi}. Bhai Thoda Kam Khaya Kar, Tu OverWeight Category mai hai`;
            result.style.backgroundColor="Black";
        }
    }
});

