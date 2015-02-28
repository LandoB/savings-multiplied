function mylog(log){
  document.getElementById("log").innerHTML += log +"<br>";
}

/*
Zodiac signs by month

Aries 21st March – 20th April
Taurus  21st April – 21st May
Gemini  22nd May – 21st June
Cancer  22nd June – 23rd July
Leo 24th July – 23rd August
Virgo 24th August – 23rd September
Libra 24th September – 23rd October
Scorpio 24th October – 22nd November
Sagittarius 23rd November – 21st December
Capricorn 22nd December – 20th January
Aquarius  21st January – 19th February
Pisces  20th February – 20th March
*/

//Write a function that when you put in a birthday it tells your astrological sign

function yourDOB(input) {
  var date = input.split("/");
  var month = parseInt(date[0]);
  var day= parseInt(date[1]);
  var zodiac = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius','Capricorn', 'Aquarius', 'Pisces'];
  var result = "Your sign is ";
  var yourSign;

  if ((month === 03 && day >= 21) || (month === 04 && day <= 20)) {
    yourSign = result + zodiac[0];
    mylog(yourSign);
  } else
    if ((month === 04 && day >= 21) || (month === 05 && day <= 21)) {
      mylog(result + zodiac[1]);
  } else
    if ((month === 05 && day >= 22) || (month === 06 && day <= 21)) {
     mylog(result + zodiac[2]);
  } else
    if ((month === 06 && day >= 22) || (month === 07 && day <= 22)) {
     mylog(result + zodiac[3]);
  } else
    if ((month === 07 && day >= 23) || (month === 08 && day <= 22)) {
      yourSign = result + zodiac[4];
      mylog(yourSign);
    } else
    if ( (month === 08 && day >= 23) || (month === 09 && day <= 23) ) {
     mylog(result + zodiac[5]);
    } else
    if ((month === 09 && day >= 24) || (month === 10 && day <= 23)) {
     mylog(result + zodiac[6]);
    } else
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
     yourSign = result + zodiac[7];
     mylog(yourSign + "  - The best Zodiac sign of all!");
  } else
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
     mylog(result + zodiac[8]);
  } else
    if ((month === 12 && day >= 22) || (month === 01 && day <= 20)) {
     mylog(result + zodiac[9]);
  } else
    if ((month === 01 && day >= 21) || (month === 02 && day <= 18)) {
     mylog(result + zodiac[10]);
  } else
    if ((month === 02 && day >= 19) || (month === 03 && day <= 20)) {
     mylog(result + zodiac[11]);
  }
}

//calls the function
yourDOB("9/8/2008");
// Output: Your sign is Virgo.










// function yourZodiacSign(input) {
//   var date = input.split("/");
//   var month = parseInt(date[0]);
//   var day= parseInt(date[1]);
//   var zodiac;
//   var reply = "That's great! Your Zodiac sign is ";
//  // zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];


//   if ((month === 03 && day >= 21) || (month === 04 && day <= 20)) {
//     zodiac = "Aries";
//     mylog(reply + zodiac + " !");
//   }


//    if ((month === 04 && day >= 21) || (month === 05 && day <= 21)) {
//     zodiac = "Taurus";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 05 && day >= 22) || (month === 06 && day <= 21)) {
//     zodiac = "Gemini";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 06 && day >= 22) || (month === 07 && day <= 22)) {
//     zodiac = "Cancer";
//     mylog(reply + zodiac + " !");
//   }

//   if ((month === 07 && day >= 23) || (month === 08 && day <= 22)) {
//    	zodiac = "Leo";
//     mylog(reply + zodiac + " !");
//   }

//    if ( (month === 08 && day >= 23) || (month === 09 && day <= 23) ) {
//     zodiac = "Virgo";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 09 && day >= 24) || (month === 10 && day <= 23)) {
//     zodiac = "Libra";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
//     zodiac = "Scorpio";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
//     zodiac = "Sagittarius";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 12 && day >= 22) || (month === 01 && day <= 20)) {
//     zodiac = "Capricorn";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 01 && day >= 21) || (month === 02 && day <= 18)) {
//     zodiac = "Aquarius";
//     mylog(reply + zodiac + " !");
//   }

//    if ((month === 02 && day >= 19) || (month === 03 && day <= 20)) {
//     zodiac = "Pisces";
//     mylog(reply + zodiac + " !");
//   }
// }

// yourZodiacSign("05/28/2000");




