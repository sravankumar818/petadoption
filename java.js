const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0); 
})

let registerBtn = document.querySelector('.account-form .register-btn')
let loginBtn = document.querySelector('.account-form .login-btn')
registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active')
    document.querySelector('.account-form .register-form').classList.add('active')
};
loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active')
    document.querySelector('.account-form .register-form').classList.remove('active')
};

let accountForm = document.querySelector('.account-form')
document.querySelector('#user').onclick = () =>{
    accountForm.classList.add('active')
}
document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active')
}
