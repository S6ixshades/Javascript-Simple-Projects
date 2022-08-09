function stReverse() {
    const love = document.getElementById("music").value;
    const peace = love.split('').reverse().join('');
    document.getElementById("doit").innerHTML = peace;


}

    let str = "Please locate locate locate which occurs periodically in this code";
    let result = str.indexOf('locate', 14)
    document.getElementById("smart").innerHTML = result;
    
    function letHide(){
        var email = document.getElementById("plastic").value;
        let hide = email.split("@")[0].length - 2;
        var r = new RegExp(".{"+hide+"}@","g");
        email = email.replace(r, "***@");
        document.getElementById("puff").innerHTML=email;
    }

//function lightZac(){
  //  var pali = document.getElementById("celestial").value;
    //var mid = pali.childNodes[0];
    //var text = mid.data;
    //text = text[text.length - 1] + text.substring(0, text.length - 1);
    //
    //document.getElementById("blues").innerHTML=text;
//}
function palinDrome(){
    const hbar = document.getElementById("house").value;
    const mean = (thing) => {
        thing = thing.replace(/\W/g, '');
        thing = thing.toLowerCase();
        for (let i = 0; i<thing.length; i+=1){
            if (thing[i] !== thing[thing.length - 1 - i]){
                return false;
            }
        }
        return true;
    }
    document.getElementById("gren").innerHTML=mean(hbar);
}
//function lightZac(){
  //  var pali = document.getElementById("celestial").value;
    //var len = pali.length;
    //var jub = len - 1;
    //for (var i = 0; i < len; i++){
      //  var str = pali[jub];
        //pali = pali.slice(0, -1);
        //pali = str + pali;
   // }
    //document.getElementById("blues").innerHTML=pali;
//}
function lightZac(){
    var pali = document.getElementById("celestial").value;
    var len = pali.slice(pali.length-1) + pali.slice(0, pali.length-1);
    document.getElementById("celestial").value= len;   
}
var inf = ["Fireboy", "Lyta", "Joeboy", "Rema"];
var order = inf.map(nextRated);
document.getElementById("pronto").innerHTML = order;
function nextRated(value, index, array){
    return value.toUpperCase();
}

var persons = [20, 16, 19, 14, 15];
var Adult = persons.filter(oldEnough);

document.getElementById("gist").innerHTML = Adult;

function oldEnough(value, index, array) {
  return index > 1;
}
var dmade= new Date(1000*60*60*24*365.5);
document.getElementById("whisper").innerHTML = dmade; 

var drunk = Date.parse(new Date());
var milli = 1000*60*60*24*365.5;
var resul = new Date (drunk+milli);
document.getElementById("lick").innerHTML=resul;

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
document.getElementById("visuals").innerHTML="Today is "+ months[d.getMonth(6)] + " " + d.getDate() + ", " + d.getFullYear();
function guessNumber(){
    var lotto = document.getElementById("moon").value;
    var king = [Math.floor(Math.random() * 5) +1];
    //var answer;
    if (lotto == king){
        document.getElementById("fresh").innerHTML = `Ooin You Are Doing Well`
    }
    else if (lotto != king){
        document.getElementById("fresh").innerHTML = `You Are Not doing Well. Pls Try Again Later`
    }
      document.getElementById("hok").innerHTML = "The right answer is" + " " + king;
}
function myGreetings() {
   // var greeting;
    var time = new Date().getHours();
    if (time >= 00 && time < 12) {
      greeting = "Good morning";
    } else if (time >= 12 && time < 16) {
      greeting = "Good afternoon";
    } else if (time >= 16 && time < 00) {
      greeting = "Good evening";
    }
    document.getElementById("light").innerHTML = greeting;
  }
  
  function weekDay(){
   // var week;
    var weekdays = new Date().getDay();
    if (weekdays >= 1 && weekdays < 3){
        week = "This is a new week";
    } else if (weekdays >= 3 && weekdays < 5) {
    week = "This is mid-week";
    } else if (weekdays >= 5 && weekdays < 1) {
        week = "Weekend is here"
    }
    document.getElementById("mean").innerHTML=week;
  }
  var cur;
  function currencyConvert(){
    var cur = document.getElementById("ghetto").value;
    document.getElementById("energy").innerHTML = Number(cur).toFixed(2);
  }
  function miniMe(){
    var dami = document.getElementById("lay").value;
   // dami = document.getElementById("lay");
    var meek = document.getElementById("rest");
    if (dami.length < 8){
      meek.innerHTML = "Length should be greater than 8";
      meek.style.color = "red";
      document.getElementById("lay").style.outlineColor = "red";
    }else{
      meek.innerHTML = "Length OK.";
      meek.style.color = "green"; 
      document.getElementById("lay").style.outlineColor = "green";
    }
    //document.getElementById("lay").innerHTML = meek;
  }
  function countDown() {
    document.getElementById("jonn").innerHTML = "The Bomb Has Been Activaed"
  }
  
  var man = setInterval(lastMan, 5000);
function lastMan() {
  var d = new Date();
  document.getElementById("johnny").innerHTML = "We Have Oxlayed";
}
