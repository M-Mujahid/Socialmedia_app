// const loginemail = document.querySelector('#email')
// const loginpassword = document.querySelector('#password')
// const firstName = document.querySelector('#recipient_name')
// const surName = document.querySelector('#recipient_surname')
// const email = document.querySelector('#recipent_email')
// const password = document.querySelector('#reciepent_pass')
// const dateOfBirth = document.querySelector('#dateOfBirth')


// const loginbtn = document.querySelector('#login')
// const signUpbtn = document.querySelector('#signUp')

// let gender;

// const users = JSON.parse(localStorage.getItem('users')) || []
// console.log(users)


// loginbtn.addEventListener('click',loginHandler)
// // signUpbtn.addEventListener('click',signupHandler)





// // function loginHandler(){
// //     console.log(loginemail.value)
// //     console.log(loginpassword.value)

// //     if(!loginemail.value || !loginpassword.value )return alert('Please enter email and password to continue');

// //     const userFound = users.filter((user) =>{

// //         return users.email == loginemail.value
// //     } )


// //     if(!userFound.length) return alert ('user is not registered kindly register the acount first')
    
// //     console.log(loginPassword.value, "===>>> login password of input")
// //     console.log(userFound.password, "user password from local storage")

// // if(userFound[0].password == loginPassword.value) {
// //     alert("user is logging in")
    
// //     localStorage.setItem('isLoggedInUser', JSON.stringify(userFound[0]))


// //     window.location.href="./dashboard/index.html";


// // }
// //  else {
// //     alert("password is incorrect")
// // }
// // }

// function loginHandler() {
//     console.log(loginemail.value);
//     console.log(loginpassword.value);
  
//     if (!loginemail.value || !loginpassword.value)
//       return alert("Please enter email and password to continue");
  
//     const userFound = users.filter((user) => {
//       return user.email == loginemail.value;
//     });
  
//     if (!userFound.length)
//       return alert("User is not registered. Kindly register the account first");
  
//     console.log(loginpassword.value, "===>>> login password of input");
//     console.log(userFound[0].password, "user password from local storage");
  
//     if (userFound[0].password == loginpassword.value) {
//       alert("User is logging in");
  
//       localStorage.setItem("isLoggedInUser", JSON.stringify(userFound[0]));
  
//       window.location.href = "./dashboard/index.html";
//     } else {
//       alert("Password is incorrect");
//     }
//   }
  





// function signupHandler(){


//     const userFound = users.filter((user) => {
//         return user.email == email.value;
//       });

//     if(userFound.length) return alert("the email is already in use , enter another email.");
//     console.log("mil gya user",userFound)


//     // const modal = document.getElementById('staticBackdrop')
//     // console.log(modal)
//     // modal.classList.toggle('show')
    

//     if (firstName.value == "" || surName.value == "" || password.value == "" || dateOfBirth.value == "" || gender === undefined) {
//         alert("Fill all the fields");
//       }
      
   
// else if (firstName.value.includes(" ") || lastName.value.includes(" ")) {
//     alert("White space not all")
//     return
    

//     }
// }


const loginemail = document.querySelector('#email')
const loginpassword = document.querySelector('#password')
const firstName = document.querySelector('#recipient_name')
const surName = document.querySelector('#recipient_surname')
const email = document.querySelector('#recipent_email')
const password = document.querySelector('#reciepent_pass')
const dateOfBirth = document.querySelector('#dateOfBirth')

const loginbtn = document.querySelector('#login')
const signUpbtn = document.querySelector('#signUp')

let gender;

const users = JSON.parse(localStorage.getItem('users')) || []
console.log(users)

loginbtn.addEventListener('click', loginHandler)

function loginHandler() {
  console.log(loginemail.value)
  console.log(loginpassword.value)

  if (!loginemail.value || !loginpassword.value) {
    return alert('Please enter email and password to continue');
  }

  const userFound = users.filter((user) => {
    return user.email == loginemail.value;
  });

  if (!userFound.length) {
    return alert('User is not registered. Kindly register the account first');
  }

  console.log(loginpassword.value, "===>>> login password of input");
  console.log(userFound[0].password, "user password from local storage");

  if (userFound[0].password == loginpassword.value) {
    alert('User is logging in');

    localStorage.setItem('isLoggedInUser', JSON.stringify(userFound[0]));

    window.location.href = './dashbored/dashbored.html';
  } else {
    alert('Password is incorrect');
  }
}

function signupHandler() {
  const userFound = users.filter((user) => {
    return user.email == email.value;
  });

  if (userFound.length) {
    return alert('The email is already in use, enter another email.');
  }

  if (firstName.value == '' || surName.value == '' || password.value =='' || dateOfBirth.value == '' || gender == undefined) {
    alert('Fill all the fields');
    return;
  }

  if (firstName.value.includes(' ') || surName.value.includes(' ')) {
    alert('White space not allowed');
    return;
  }


  const userDetails = {

    firstName : firstName.value,
    surName : surName.value,
    email : email.value,
    password : password.value,
    dateOfBirth : new Date(`${dateOfBirth.value}`),
    gender
  }
  users.push(userDetails);
//   console.log(userDetails)
localStorage.setItem('users', JSON.stringify(users))
alert("signup successfull")
firstName.value = ""
surName.value = ""
email.value = ""
password.value = ""
dateOfBirth.value = ""
dateOfBirth.value = ""
gender = ""


}

function genderHandler(g) {
    gender = g
}

function emptyInput(){
    firstName.value = ""
    surName.value = ""
    email.value = ""
    password.value = ""
    dateOfBirth.value = ""
    gender = ""
   
}