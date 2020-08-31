
const registerForm = document.querySelector('#registerForm');


registerForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const response = await fetch('/register',{
    method:"post",
    headers: {
      "content-type": "application/json"},
    body: JSON.stringify({
      email,
      password
    })
  })
  // const result = await response.json(); //ждем обработки респонса , который фечом обрабатывается на ручке
  console.log(email,password);
  
  if (response.status === 200) { 
    window.location = '/login'
    
  }
  
})

// const loginForm = document.querySelector('#loginForm');
// console.log(loginForm)
// loginForm.addEventListener('submit', async (e)=>{
//   e.preventDefault();
//   const email = e.target.email.value;
//   const password= e.target.password.value;
//   const response2= await fetch('/login', {
//   method: "post",
//   headers: {
//     "content-type":"application/json",
//   },
//   body: JSON.stringify({
//     email,
//     password
//   }),
// })

//   console.log(email); 
// });

