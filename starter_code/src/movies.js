 //eslint no-restricted-globals: 'off' 
//Usefull methods

 function dramaMap(movies){
 let dramaped = movies.map(movie=>movie.genre.includes("Drama")?movie.rate:null).filter(elem=>elem!==null)
 return dramaped.length===0?[0]:dramaped
}


function roundDecimals(numToRound, numberOfDecimals){
  return Math.round(numToRound*Math.pow(10,numberOfDecimals))/Math.pow(10,numberOfDecimals)
}

function stringToSeconds(stringTime){
  if(typeof(stringTime.duration)==='number'){
    return stringTime
  } else {
    let numberTime = stringTime.duration.replace(/\s/g,'').split('h')
    let hours= parseInt(numberTime)
    let min= parseInt(numberTime[1].split('min')[0]?numberTime[1].split('min')[0]:0)
    stringTime.duration = hours*60+min 
    return stringTime
}
}

//Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  let rate = movies.map(movie=>Number(movie.rate)).reduce((acum, movieRate)=>acum+movieRate)
  return rate/movies.length
  }
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  let dramaRate = dramaMap(movies).reduce((acum, dramaRate) => acum+dramaRate)
  let aveDrama = dramaRate/dramaMap(movies).length
return roundDecimals(aveDrama, 2)
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(film){
  let filmSeconds=film.map(movie =>stringToSeconds(movie));
  filmSeconds = filmSeconds.sort(function compare(a, b) {
    if (a.duration<b.duration) {
      return -1;
    }
    if (a.duration>b.duration) {
      return 1;
    }
    else{
      if(a.title>b.title){
        return 1
      }
      if(a.title<b.title){
        return -1
      }
      else return 0
    }  
  })
  return filmSeconds
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
