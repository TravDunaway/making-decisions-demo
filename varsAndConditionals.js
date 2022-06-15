/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between kenobi and
    anikan.
*/ 

//First create some variables:

let kenobiAttack = 20
let anikanAttack = 30 

// want to log if anikan attack is greater than kenobi
if (anikanAttack > kenobiAttack){
    console.log('Anakin has a better attack than Kenobi')
} else if (kenobiAttack > anikanAttack){
    console.log('Kenobi has a better attack than anakin')
} else {
    console.log('Anakin and Kenobi have the same attack')
}

let kenobiHealth = 100
let kenobiDefense = 0

if (kenobiHealth > anikanAttack)={
    kenobiHealth -= anikanAttack
    console.log('Kenobi health is' ${kenobiHealth})
} else {
    console.log('Kenobi was slain')
}

kenobiDefense += 25

for(let i = 0; i < 5; i++){
    let damage = anikanAttack - kenobiDefense
    kenobiHealth -= damage
    console.log('Kenobis health is now ${kenobiHealth}')
}

while(kenobiHealth > 0){
    let damage = anakinAttack - kenobiDefense
    kenobiHealth -= damage
    if(kenobiHealth > 0){
        console.log(`kenobi's health is now ${kenobiHealth}`)
    } else {
        console.log(`Kenobi has been slain`)
    }

}