import _  from 'lodash';
import Data from './models/Data';
import { showUser } from './views/view';
import '../styles/style.scss';

const h1 = document.createElement('h1');
h1.innerHTML = '¡Webpack es increible!';
h1.classList = 'main';
const body = document.querySelector('body');
body.appendChild(h1);

const elements = ['image1', 'image2', 'image3'];

// elements.forEach(element => {
//     const div = document.createElement('div');
//     const img =  document.createElement('img');
//     div.classList = 'homepage';
//     img.src = `./assets/images/${element}.jpeg`;
//     div.appendChild(img);
//     body.appendChild(div);
// });