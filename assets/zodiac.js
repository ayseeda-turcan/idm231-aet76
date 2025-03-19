document.addEventListener("DOMContentLoaded", () => {
  const zodiacSigns = {
    Capricorn: { 
      name: "Batgirl (Barbara Gordon)",
      dates: "December 22 - January 19", 
      description: "Intelligent, disciplined, and strategic. Capricorns are natural planners and hard workers, much like Barbara, who is both an exceptional detective and a highly skilled fighter. She embodies persistence and responsibility, especially in her role as Oracle.", 
      sound: "capricorn.mp3", 
      image: "assets/images/batgirl.png" 
    },
    
    Aquarius: { 
      name: "Zatanna Zatara",
      dates: "January 20 - February 18", 
      description: "Independent, innovative, and deeply connected to knowledge. Aquarians are known for their uniqueness and ability to think outside the box. Zatanna’s magical abilities and her unconventional approach to solving problems make her a perfect fit for this sign.", 
      sound: "aquarius.mp3", 
      image: "assets/images/zatanna.webp" 
    },
    
    Pisces: { 
      name: "Black Canary (Dinah Laurel Lance)",
      dates: "February 19 - March 20", 
      description: "Intuitive, artistic, and compassionate. Pisces are deeply connected to emotions and creativity, and Black Canary, as both a musician and a fighter, embodies this perfectly. She’s also very empathetic, always standing up for those in need.", 
      sound: "pisces.mp3", 
      image: "assets/images/black_canary.png" 
    },
    
    Aries: { 
      name: "Hawkgirl (Shayera Hol)",
      dates: "March 21 - April 19", 
      description: "Brave, impulsive, and action-oriented. Aries are warriors at heart, just like Hawkgirl, who never backs down from a fight. She’s aggressive when necessary but also passionate about her beliefs.", 
      sound: "aries.mp3", 
      image: "assets/images/hawkgirl.webp" 
    },
    
    Taurus: { 
      name: "Wonder Woman (Diana Prince)",
      dates: "April 20 - May 20", 
      description: "Loyal, patient, and strong-willed. Taurus individuals are known for their reliability and perseverance, which makes Wonder Woman a great match. She has unshakable morals and is always there for her allies, embodying the Taurus spirit of endurance.", 
      sound: "taurus.mp3", 
      image: "assets/images/wonder_woman.webp" 
    },
    
    Gemini: { 
      name: "Spoiler (Stephanie Brown)",
      dates: "May 21 - June 21", 
      description: "Adaptable, witty, and spontaneous. Geminis are known for their dual nature and ability to think quickly, which matches Stephanie's journey as a vigilante. She’s talkative, resourceful, and able to roll with the punches, much like a true Gemini.", 
      sound: "gemini.mp3", 
      image: "assets/images/spoiler.webp" 
    },
    
    Cancer: { 
      name: "Black Bat (Cassandra Cain)",
      dates: "June 22 - July 22", 
      description: "Protective, deeply emotional, and intuitive. Cancers are known for their deep inner world and strong instincts, much like Cassandra, who barely speaks but understands people better than most. She’s fiercely loyal and driven by her emotions.", 
      sound: "cancer.mp3", 
      image: "assets/images/black_bat.png" 
    },
    
    Leo: { 
      name: "Supergirl (Kara Zor-El)",
      dates: "July 23 - August 22", 
      description: "Bold, charismatic, and confident. Leos shine naturally, and Supergirl is a perfect example of this. She’s always in the spotlight, inspires others, and has a strong will to protect those she loves.", 
      sound: "leo.mp3", 
      image: "assets/images/supergirl.png" 
    },
    
    Virgo: { 
      name: "Batwoman (Kate Kane)",
      dates: "August 23 - September 22", 
      description: "Analytical, disciplined, and detail-oriented. Virgos are perfectionists who rely on logic, much like Batwoman, who approaches crime-fighting with precision and strategy. She’s deeply committed to justice and follows her own strict moral code.", 
      sound: "virgo.mp3", 
      image: "assets/images/batwoman.webp" 
    },
    
    Libra: { 
      name: "Starfire",
      dates: "September 23 - October 23", 
      description: "Diplomatic, charismatic, and peace-loving. Libras value harmony and connection, just like Starfire, who seeks to unite people rather than fight. Her natural charm and love for companionship make her the perfect Libra.", 
      sound: "libra.mp3", 
      image: "assets/images/starfire.webp" 
    },
    
    Scorpio: { 
      name: "Artemis Grace",
      dates: "October 24 - November 21", 
      description: "Passionate, intense, and determined. Scorpios are known for their emotional depth and loyalty. Artemis is fiercely independent but cares deeply about her loved ones. She hides her emotions under a tough exterior, just like a Scorpio.", 
      sound: "scorpio.mp3", 
      image: "assets/images/artemis.png" 
    },
    
    Sagittarius: { 
      name: "Wonder Girl (Donna Troy)",
      dates: "November 22 - December 21", 
      description: "Adventurous, philosophical, and always searching for meaning. Sagittarians are known for their restless spirit and desire to explore, much like Donna Troy, who has struggled with her identity and constantly seeks her place in the world.", 
      sound: "sagittarius.mp3", 
      image: "assets/images/wonder_girl.webp" 
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
        <h2>${zodiacSigns[sign].name}</h2>  <!-- Display Character Name -->
        <img src="${zodiacSigns[sign].image}" alt="${zodiacSigns[sign].name}" class="zodiac-image">
        <p><strong>Dates:</strong> ${zodiacSigns[sign].dates}</p>
        <p>${zodiacSigns[sign].description}</p>
      `;

      // Play character’s sound effect
      const audio = new Audio(`sounds/${zodiacSigns[sign].sound}`);
      audio.play();
    } else {
      resultDiv.innerHTML = "<p>Invalid date. Please try again.</p>";
    }
  }



  Object.keys(zodiacSigns).forEach(sign => {
    const container = document.createElement("div");
    container.classList.add("character-container");


    const img = document.createElement("img");
    img.src = zodiacSigns[sign].image;
    img.alt = zodiacSigns[sign].name;
    img.classList.add("zodiac-button");


    const nameLabel = document.createElement("p");
    nameLabel.textContent = zodiacSigns[sign].name;
    nameLabel.classList.add("character-name");

    
    img.addEventListener("click", () => {
      resultDiv.innerHTML = `
        <h2>${zodiacSigns[sign].name}</h2>  <!-- Display Character Name -->
        <img src="${zodiacSigns[sign].image}" alt="${zodiacSigns[sign].name}" class="zodiac-image">
        <p><strong>Dates:</strong> ${zodiacSigns[sign].dates}</p>
        <p>${zodiacSigns[sign].description}</p>
      `;


      const audio = new Audio(`sounds/${zodiacSigns[sign].sound}`);
      audio.play();
    });

    container.appendChild(img);
    signList.appendChild(container);
  });



  // HELP
  helpButton.addEventListener("click", () => {
    helpScreen.classList.toggle("visible");
  });

  document.getElementById("submit-button").addEventListener("click", displayZodiac);

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
});

