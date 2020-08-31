// const input = document.querySelector('#serchTitle');
// // console.log(input)
// // console.log(123);
// input.addEventListener('submit', async (e) => {
//   e.preventDefault()
//   const qweryInSerch = e.target.name.value;
//   const response = await fetch('/preview/choosen', {
//     method: 'PUT',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       qweryInSerch
//     })
//   })

//   const result = await response.json
// //   if(response.status === 200){
// //     console.log(1234);
// //     window.location = 'preview/choosen'
// // }

// if (result.success) document.location = `/preview/choosen`
// })

const a = document.querySelector('#value')
a.addEventListener('submit', async (e) => {
  e.preventDefault()
 // const num = e.target
 const num = e.target.name.value;
 const id = e.target.dataset.id;
  console.log(num,id);

  const responses = await fetch(`/preview/order/${id}`, {
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      num,
    }),
  })

  const result = await responses.json();
 


})
