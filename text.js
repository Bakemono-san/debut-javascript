const voiture = {
    nom: "ford",
    capacite: "120vh",
    age: 4
}

const { nom, capacite, age} = voiture;
const { nom: nom2 } = voiture;
const { age: age3, ...restVarible} = voiture;


const fruits =["banane", "mangue", "cerise"]
const [fruit1, fruit2, fruit3] = fruits;
const [ fruit4,...restFruits] = fruits;
const [fruit5, ,fruit6] = fruits


//Fonction
//fonstion nommee
function nomfonction (a, b=0) {
  return a + b;
}

function add (array) {
    let res = 0
   array.foreach((value,index) => res += value )

   //const res2 = array.map(a => 1 + 1) faussse
   const res2 = array.reduce((res, a )=> res + a,0 ) 

   return res
}

add([1,2,3,4])

function add2 (...array) {
    let res = 0
   array.foreach(function add (array) {
    let res = 0
   array.foreach((value,index) => res += value )

   //const res2 = array.map(a => 1 + 1) faussse
   const res2 = array.reduce((res, a )=> res + a,0 ) 

   return res
})

   //const res2 = array.map(a => 1 + 1) faussse
   const res2 = array.reduce((res, a )=> res + a,0 ) 

   return res
}


add2(1,2,3)

//function fleche 
const nomfunction = () => {

}

//Function anonym

(function() {

})()

//callback function

function sdfg(fonction){ // fonction est une fonction


}

// function => props


function gtyh({a,b,classname}){

    return(
        <div className={classname}>

            <h1>{a}</h1>
            {b}
            </div>

    )

}



function gtyhf(){
    
    return(
        <div >
            <gtyh a="" b="" className="card" /> // gtyh("","")
            <h1></h1>
            
            </div>

    )

}