        /***COLONNE 1***/
const ecran1 = document.getElementById('ecran');

const effacer = document.querySelector('#toutEffacer');

const del = document.getElementById('effacer');

       /****COLONNE 2***/
       
       /***ALTERNER SIGNE**/
 let  AIZEN = false;
       
 const ecran2 =document.getElementById('ecran2');
 
 const signe = document.querySelectorAll('.boutton2');
 
const operations = ([].slice.call(signe)).slice(0 , signe.length-1);

const egal = document.getElementById('egal');


export const objetCalculatrice = {
  
  fonctionnementEvenement: (boutons) => {
    
    /***LES OPÉRATEURS LOGIQUES***/
    if (operations.length) {
  operations.forEach(operation => {

    operation.addEventListener('click', () => {
      if (!AIZEN) {
        const valeur = operation.innerText;
      ecran1.value += valeur;
        AIZEN = !false;
      }
    })
  })
}

/****ÉGALE***/
egal.addEventListener('click' , objetCalculatrice.egalEvenement)

/****TOUT EFFACER***/    
    effacer.addEventListener( 'click' , objetCalculatrice.effacerTout);
    
    /*******EFFACER1*****/
    del.addEventListener("click" , objetCalculatrice.effacer1)
    
    /****EVENEMENT BOUTONS*****/
    if (boutons.length) {
      boutons.forEach(bouton => {
        
        bouton.addEventListener('click' , ()=>{
          
       const valeur = bouton.innerText;
       ecran1.value += valeur;
       
       AIZEN = false;
        })
      })
     }  
     
/**REFUSER LES SIGNES LORSQUE L´ECRAN EST VIDE**/
     if (ecran1.value ==="" ||   ecran1.value.length ==0) {
     AIZEN = !false;
   }
   },
   
   /***EVENEMENT TOUT EFFACER***/
  effacerTout: ()=>{
       ecran1.value ="";
       AIZEN = !false;
       
       ecran2.value ='';
   },
  
   /***EVENEMENT EFFACER 1 ***/
   effacer1: ()=>{
     
       ecran1.value = ecran1.value.substring(0 , ecran1.value.length-1);
       
       AIZEN = false;
       
              ecran2.value ='';
     
     /**APRÈS UN CLICK SUR DEL ,  REFUSER LES SIGNES LORSQUE L´ECRAN EST VIDE **/

    if (ecran1.value.length == 0) {
      AIZEN = !false;  
     }
   },
   
       /**EVENEMENT ÉGAL**/
       egalEvenement: ()=>{
         if (AIZEN = !false) {
         ecran2.value = eval(ecran1.value);
         AIZEN = false;
         }
       }
}