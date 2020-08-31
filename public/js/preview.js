const input = document.querySelector('#serchTitle');
// console.log(input)
// console.log(123);
input.addEventListener('submit', async (e) => {
  e.preventDefault()
  const qweryInSerch = e.target.name.value;
  const response = await fetch('/preview/choosen', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      qweryInSerch
    })
  })

  const result = await response.json
//   if(response.status === 200){
//     console.log(1234);
//     window.location = 'preview/choosen'
// }

if (result.success) document.location = `/preview/choosen`
})

const value = document.querySelector('#value')
value.addEventListener('submit', async(e)=>{
  e.preventDefault()
  const valuInsearch = e.target.name.value
  // const id = e.target.dataset.id;
   console.log(valuInsearch);
  const response2 = await fetch(`/preview/order/${id}`, {
    method:'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      valueInsearch
    })
  })

  const result = await response2.json;
  // console.log(result);
  // if (result.success) document.location = `/preview/order/${id}`
  // })

