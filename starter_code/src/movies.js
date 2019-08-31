 //eslint no-restricted-globals: 'off' 
//Usefull methods

 function dramaMapRate(movies){
 let dramaped = movies.map(movie=>movie.genre.includes('Drama')?movie.rate:null).filter(elem=>elem!==null)
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

function dramaMap(films){
let dramaFilms = films.map(film=>film.genre.includes('Drama')?film:null).filter(elem=>elem!==null)
return dramaFilms.length===0?[0]:dramaFilms
}

//Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  let rate = movies.map(movie=>Number(movie.rate)).reduce((acum, movieRate)=>acum+movieRate)
  return rate/movies.length
  }
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
  let dramaRate = dramaMapRate(movies).reduce((acum, dramaRate) => acum+dramaRate)
  let aveDrama = dramaRate/dramaMapRate(movies).length
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
function howManyMovies(films){
let spielbergDrama = dramaMap(films)
.map(dramaMovie=>dramaMovie.director==='Steven Spielberg'?dramaMovie:null)
.filter(elem=>elem!==null)
return spielbergDrama.length
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films){
  let orderedFilms = films.sort(function order(a,b){
    if(a.title>b.title){
      return 1
    }
    if(a.title<b.title){
      return -1
    }
    else return 0
  }).map(film=>film.title)

  console.log('splices', orderedFilms.splice(20))
  
return orderedFilms.length>20?orderedFilms.splice(20):orderedFilms
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
