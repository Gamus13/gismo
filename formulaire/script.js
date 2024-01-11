document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);


//verification du formulaire
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("form")
    /*validateInputs();*/
});

email.addEventListener('change', e => {
    e.preventDefault();
    console.log("email")
    validateInputs1();
});

password.addEventListener('change', e => {
    e.preventDefault();
    console.log("password")
    validateInputs2();
});
password2.addEventListener('change', e => {
    e.preventDefault();
    console.log("password2")
    validateInputs4();
});

username.addEventListener('change', e => {
    e.preventDefault();
    console.log("username")
    validateInputs3();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs3 = () => {
    const usernameValue = username.value.trim();
    

    if(usernameValue === '') {
        setError(username, 'entrer votre pseudo');
    } else if(username.length < 4 ) {
        setError(username, 'Votre mot de passe doit comporter 4 caracteres.')

    }else {
        setSuccess(username);
    }

    
}


const validateInputs1 = () => {
    const emailValue = email.value.trim();

   
    if(emailValue === '') {
        setError(email, 'entrer votre e-mail');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'donnez un e-mail valide');
    } else {
        setSuccess(email);
    }


}



const validateInputs2 = () => {
    const passwordValue = password.value.trim();
   
    if(passwordValue === '') {
        setError(password, 'entrer votre mot de passe');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Votre mot de passe doit comporter 8 caracteres.')
    } else {
        setSuccess(password);
    }


}

const validateInputs4 = () => {
    const password2Value = password2.value.trim();
    
    if(password2Value === '') {
        setError(password2, 'confirmer votre mot de passe');
    } else if (password2Value != validateInputs2 ) {
        setError(password2, "le mot de passe ne correspond pas");
    } else {
        setSuccess(password2);
    }


}

const Email= document.getElementById('Email');
const SOLO= document.getElementById('SOLO');

Email.addEventListener('change', e => {
    e.preventDefault();
    console.log("Email")
    validateInputs5();
});

const validateInputs5 = () => {
    const EmailValue = Email.value.trim();

   
    if(EmailValue === '') {
        setError(Email, 'entrer votre e-mail');
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'donnez un e-mail valide');
    } else {
        setSuccess(Email);
    }


}
SOLO.addEventListener('change', e => {
    e.preventDefault();
    console.log("password")
    validateInputs6();
});

const validateInputs6 = () => {
    const SOLOValue = SOLO.value.trim();
   
    if(SOLOValue === '') {
        setError(SOLO, 'entrer votre mot de passe');
    } else if (SOLOValue.length < 8 ) {
        setError(SOLO, 'Votre mot de passe doit comporter 8 caracteres.')
    } else {
        setSuccess(SOLO);
    }


}
