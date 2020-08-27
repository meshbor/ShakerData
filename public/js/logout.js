const logout = document.querySelector('#logout')
logout = addEventListener('click', ()=>{
  fetch('/logout').then((responce)=>{
    if(responce.status === 404){
      window.location = '/login'
    }
  })
})
