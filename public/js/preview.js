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
  const result = await response.json
})


// router.get('/show-one-entry/:id', async (req, res, next) => {
//   const entry = await Entry.findById(req.params.id)
//   console.log(entry);
//   return res.render('entries/show', {
//     entry, dateCond: (entry.createdAt == entry.updatedAt)
//   });
// });

