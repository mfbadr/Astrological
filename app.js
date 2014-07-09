var prompt = require('sync-prompt').prompt;
var dob = new Date(prompt('Please enter your date of birth in the format dd/mm/yyyy: '))
var date = new Date()

var yearDiff = date.getFullYear()-dob.getFullYear()-1
yearDiff = parseInt(yearDiff)
//console.log(yearDiff)

if(dob.getMonth() < date.getMonth()){
  yearDiff = yearDiff+1  
  console.log('You are '+ yearDiff + " years old")
}else if(dob.getMonth() > date.getMonth()){
  yearDiff = yearDiff  
  console.log('You are '+ yearDiff + " years old")
}else if(dob.getDate() >= date.getDate()){
  yearDiff = yearDiff + 1
  console.log('Happy Birthday!')
  console.log('You are '+ yearDiff + " years old")

}else{
  console.log('You are '+ yearDiff + " years old")
}

//Capricorn
if(dob.getMonth() === 0 && dob.getDate() <= 19){console.log('You are a Capricorn')}
if(dob.getMonth() === 11 && dob.getDate() >= 22){console.log('You are a Capricorn')}

//Aquarius

if(dob.getMonth() === 0 && dob.getDate() >= 20){console.log('You are a Aquarius')}
if(dob.getMonth() === 1 && dob.getDate() <= 18){console.log('You are a Aquarius')}

//Pisces
if(dob.getMonth() === 1 && dob.getDate() >= 19){console.log('You are a Pisces')}
if(dob.getMonth() === 2 && dob.getDate() <= 20){console.log('You are a Pisces')}

//Aries
if(dob.getMonth() === 2 && dob.getDate() >= 21){console.log('You are a Aries')}
if(dob.getMonth() === 3 && dob.getDate() <= 19){console.log('You are a Aries')}

//Taurus
if(dob.getMonth() === 3 && dob.getDate() >= 20){console.log('You are a Taurus')}
if(dob.getMonth() === 4 && dob.getDate() <= 20){console.log('You are a Taurus')}

//Gemini
if(dob.getMonth() === 4 && dob.getDate() >= 21){console.log('You are a Gemini')}
if(dob.getMonth() === 5 && dob.getDate() <= 20){console.log('You are a Gemini')}

//Cancer
if(dob.getMonth() === 5 && dob.getDate() >= 21){console.log('You are a Cancer')}
if(dob.getMonth() === 6 && dob.getDate() <= 22){console.log('You are a Cancer')}

//Leo   
if(dob.getMonth() === 6 && dob.getDate() >= 23){console.log('You are a Leo')}
if(dob.getMonth() === 7 && dob.getDate() <= 22){console.log('You are a Leo')}
  
//Virgo 
if(dob.getMonth() === 7 && dob.getDate() >= 23){console.log('You are a Virgo')}
if(dob.getMonth() === 8 && dob.getDate() <= 22){console.log('You are a Virgo')}

//Libra 
if(dob.getMonth() === 8 && dob.getDate() >= 23){console.log('You are a Libra')}
if(dob.getMonth() === 9 && dob.getDate() <= 22){console.log('You are a Libra')}

//Scorpio
if(dob.getMonth() === 9 && dob.getDate() >= 23){console.log('You are a Scorpio')}
if(dob.getMonth() === 10 && dob.getDate() <= 21){console.log('You are a Scorpio')}

//Sagittarius
if(dob.getMonth() === 10 && dob.getDate() >= 22){console.log('You are a Sagittarius')}
if(dob.getMonth() === 11 && dob.getDate() <= 21){console.log('You are a Sagittarius')}

