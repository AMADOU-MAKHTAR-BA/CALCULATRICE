  import {objetCalculatrice} from '/autres fichiers js/main2.js';

window.onload = () => {
  const ecran1 = document.getElementById('ecran');

const effacer = document.querySelector('#toutEffacer');

const del = document.getElementById('effacer');
  const b =document.getElementsByClassName('boutton');
  /***********transformé b en TABLEAU**********/
  const boutons =([].slice.call(b)).slice(0); 
  
   objetCalculatrice.fonctionnementEvenement(boutons);
};

