document.addEventListener("DOMContentLoaded", () => {
  const zodiacSigns = {
    Capricorn: { 
      dates: "December 22 - January 19", 
      description: "Disciplined and responsible.", 
      sound: "capricorn.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Aquarius: { 
      dates: "January 20 - February 18", 
      description: "Innovative and independent.", 
      sound: "aquarius.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Pisces: { 
      dates: "February 19 - March 20", 
      description: "Compassionate and intuitive.", 
      sound: "pisces.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Aries: { 
      dates: "March 21 - April 19", 
      description: "Bold and ambitious.", 
      sound: "aries.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Taurus: { 
      dates: "April 20 - May 20", 
      description: "Reliable and practical.", 
      sound: "taurus.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Gemini: { 
      dates: "May 21 - June 21", 
      description: "Adaptable and outgoing.", 
      sound: "gemini.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Cancer: { 
      dates: "June 22 - July 22", 
      description: "Emotional and nurturing.", 
      sound: "cancer.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Leo: { 
      dates: "July 23 - August 22", 
      description: "Confident and charismatic.", 
      sound: "leo.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Virgo: { 
      dates: "August 23 - September 22", 
      description: "Analytical and hardworking.", 
      sound: "virgo.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Libra: { 
      dates: "September 23 - October 23", 
      description: "Diplomatic and charming.", 
      sound: "libra.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Scorpio: { 
      dates: "October 24 - November 21", 
      description: "Passionate and resourceful.", 
      sound: "scorpio.mp3", 
      image: "assets/images/thumb.jpg" 
    },
    
    Sagittarius: { 
      dates: "November 22 - December 21", 
      description: "Adventurous and optimistic.", 
      sound: "sagittarius.mp3", 
      image: "assets/images/thumb.jpg" 
    }
  };


  // Zodiac Alghorithm
  function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'Libra';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'Gemini';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return null;
  }


  const birthdateInput = document.getElementById("birthdate");

  const resultDiv = document.getElementById("result");
  
  const signList = document.getElementById("sign-list");
  
  const helpScreen = document.getElementById("help");
  
  const helpButton = document.getElementById("myBtn");


  function displayZodiac() {
    const date = new Date(birthdateInput.value);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const sign = getZodiac(month, day);
    if (sign) {
      resultDiv.innerHTML = `
        <h2>${sign}</h2>
        <img src="${zodiacSigns[sign].image}" alt="${sign}" class="zodiac-image">
        <p><strong>Dates:</strong> ${zodiacSigns[sign].dates}</p>
        <p><strong>Description:</strong> ${zodiacSigns[sign].description}</p>
      `;


      const audio = new Audio(`sounds/${zodiacSigns[sign].sound}`);
      audio.play();
    } else {
      resultDiv.innerHTML = "<p>Invalid date. Please try again.</p>";
    }
  }


  Object.keys(zodiacSigns).forEach(sign => {
    const img = document.createElement("img");
    img.src = zodiacSigns[sign].image;
    img.alt = sign;
    img.classList.add("zodiac-button");
    img.addEventListener("click", () => {
      resultDiv.innerHTML = `
        <h2>${sign}</h2>
        <img src="${zodiacSigns[sign].image}" alt="${sign}" class="zodiac-image">
        <p><strong>Dates:</strong> ${zodiacSigns[sign].dates}</p>
        <p><strong>Description:</strong> ${zodiacSigns[sign].description}</p>
      `;
      const audio = new Audio(`sounds/${zodiacSigns[sign].sound}`);
      audio.play();
    });
    signList.appendChild(img);
  });


  // HELP
  helpButton.addEventListener("click", () => {
    helpScreen.classList.toggle("visible");
  });

  document.getElementById("submit-button").addEventListener("click", displayZodiac);
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}