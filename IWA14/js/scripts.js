const firstName = 'John';            //used const declaration
const age = 35;                      //used const declaration
const hobbie = 'Coding';             //used const declaration and changed the variable

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter) 
}

function hobby () {
  
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbie}!`)   //removed the funtion and consoled the interpolation
}


hobby()          //called the hobby funtion again