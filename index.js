const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph")

}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop(length-1)
}
function destructivelyRemoveFirstCat(){
    cats.shift(cats[0])
}
function appendCat(){
   return appendCat =[...cats,"Broom"]
}
function prependCat(){
   return prependCat = ["Arnold",...cats] 
}
function removeLastCat(){
    return removeLastCat = [...cats.slice(0,2)]
    
}
function removeFirstCat(){
    return removeFirstCat = [...cats.slice(1)]
}

