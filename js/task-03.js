const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('.gallery');

const imagesArr = images.map(({ url, alt }) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', alt);

  li.append(img);
  return li.outerHTML;
});
ul.insertAdjacentHTML('afterbegin', imagesArr.join(''));

// ------- css -------
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML =
  '.gallery { display: flex; justify-content: space-between; list-style-type: none;}' +
  ' li {width: 33%;}' +
  ' img{width:  100%; height: 100%; object-fit: cover;}';
document.querySelector('head').append(style);
