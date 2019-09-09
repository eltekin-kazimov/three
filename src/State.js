import {beginDom} from './index';


let tekin = {
    name: 'Eltekin',
    age: 27,
};

function incrementAge(){
    tekin.age += 1;
    beginDom();
}

export {tekin, incrementAge};