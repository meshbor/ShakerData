const loginForm = document.querySelector('#loginForm');
console.log(loginForm)
loginForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const email = e.target.email.value;
  const password= e.target.password.value;
  const response= await fetch('/login', {
  method: "post",
  headers: {
    "content-type":"application/json",
  },
  body: JSON.stringify({
    email,
    password
  }),
})
if(response.status === 200){
  window.location = '/preview'
}

  console.log(email); 
});

