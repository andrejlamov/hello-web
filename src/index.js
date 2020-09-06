import {Map} from 'immutable';
import './style.css';

function component() {
  const elem = document.createElement('div');
  elem.innerHTML = Map({msg: "hello dev server!"});
  elem.classList.add('hello');
  return elem;
}

document.body.append(component());
