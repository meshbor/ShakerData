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
});
const inputNumber = document.querySelector('#inputNumber');

inputNumber.addEventListener('submit', async (e) => {
  e.preventDefault()
  const volumeOfCocktails = e.target.name.value;
  console.log(volumeOfCocktails);
  
});

//

// {
//   filters: [ 'крепкие', 'кислые', 'цитрусовые', 'цветочные', 'на джине' ],
//   ingredients: [
//     [ 'Лондонский сухой джин ', '50', 'мл' ],
//     [ 'Ликер мараскино BOLS', '20', 'мл' ],
//     [ 'Фиалковый ликер BOLS', '5', 'мл' ],
//     [ 'Лимонный сок ', '15', 'мл' ],
//     [ 'Лимонная цедра ', '1', 'шт' ],
//     [ 'Лед в кубиках ', '300', 'г' ]
//   ],
//   _id: 5f48c39024a3917b3ec94dd9,
//   title: 'Авиация',
//   titleEng: 'Aviation',
//   img: 'https://ru.inshaker.com//uploads/cocktail/hires/90/1556447016-aviacia-image-final.jpg',
//   recipe: 'Налей в стакан для смешивания лимонный сок 15 мл, ликер мараскино 20 мл, фиалковый ликер 5 мл и джин 50 млНаполни стакан кубиками льда и аккуратно размешай коктейльной ложкойПерелей через стрейнер в охлажденный коктейльный бокалУкрась лимонной цедрой',
//   description: '',
//   __v: 0


