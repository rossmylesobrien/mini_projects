const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Entry Error
function error(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Successfully Entered
function success(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check Required
function checkRequired(inputArray){
  inputArray.forEach(function(cur){
        if(cur.value.trim() === ''){
            error(cur, `${getFieldName(cur)} is required.`);
        }else{
          success(cur);
    }
  });
}

// Field Name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check Email
function checkEmail(inputEmail){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(inputEmail.value.trim())){
      success(inputEmail);
  }else{
      error(inputEmail, "Email is not valid.");
  }
};

//Check Length
function checkLength(input, min, max){
  if(input.value.length < min){
    error(input,` ${getFieldName(input)} must be at least ${min} characters long.`);
  }else if (input.value.length > max){
      error(input,` ${getFieldName(input)} must be less than ${max} characters long.`);
    }else{
      success(input);
    }
};

// Check password
function passwordCheck(pone, ptwo){
  if(pone.value !== ptwo.value){
    error(ptwo, 'Passwords don\'t match');
  }
};

// On Submit Event Listener
form.addEventListener('submit', function(e){
e.preventDefault();

if(!checkRequired([username, email, password, password2])){
  checkEmail(email);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  passwordCheck(password, password2);
}
});
