import _  from 'lodash';
import Data from './models/Data';
import { showUser } from './views/view';
import '../styles/style.scss';

const h1 = document.createElement('h1');
h1.innerHTML = 'Webpack es increible!';
h1.classList = 'main';
const body = document.querySelector('body');
body.appendChild(h1);

const button = document.createElement('button');
button.innerHTML = 'Show User';
button.addEventListener('click', () => update());
body.appendChild(button);

const update = () => {
    const data = new Data();
    
    data.setData();
    
    const user =  data.getData();
    
    showUser(user);
}
