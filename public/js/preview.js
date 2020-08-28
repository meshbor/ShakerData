const input = document.querySelector('#serchTitle');
console.log(input)
// console.log(123);
input.addEventListener('submit', async (e) => {
  e.preventDefault()
  const qweryInSerch = e.target.name.value;
  const response = await fetch('preview', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      qweryInSerch
    })
  })
  // const result = await response.json
  if(response.status === 200){
    window.location = 'choosen/?name=shalom'}
})



