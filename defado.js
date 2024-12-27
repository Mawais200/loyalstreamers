$('.responsive').slick({
    
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev'), // Custom previous button 
    nextArrow: $('.custom-next'), // Custom next button
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    
    ]
});

const navDialogue = document.getElementById('nav-dialogue'); 
const barsIcon = document.getElementById('barsIcon');
const xmarkIcon = document.getElementById('xmarkIcon');
const toggleDiv = document.getElementById('toggleDiv');

function handleMenu() {
  navDialogue.classList.toggle('hidden');
  barsIcon.classList.toggle('hidden');
  xmarkIcon.classList.toggle('hidden');
  toggleDiv.classList.toggle('hidden');
}


   
    document.addEventListener('DOMContentLoaded', function() { 
      const elements = document.querySelectorAll('.animate-me');
      
  
      function checkVisibility() { 
          elements.forEach(element => { 
              const position = element.getBoundingClientRect();
              if (position.top < window.innerHeight) {
                  element.classList.add('show'); 
                  
              } else { 
                  element.classList.remove('show');
                  
              } 
          });
      } 
      
      window.addEventListener('scroll', checkVisibility); 
      checkVisibility(); // Initial check in case elements are already in view
  });
  document.addEventListener('DOMContentLoaded', function() { 
    const escapeOut = document.querySelectorAll('.escape');
    

    function checkVisibility() { 
        escapeOut.forEach(element => { 
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight) {
               
                element.classList.add('escape-out'); 
            } else { 
              element.classList.remove('escape-out'); 
                
            } 
        });
    } 
    
    window.addEventListener('scroll', checkVisibility); 
    checkVisibility(); // Initial check in case elements are already in view
});
document.addEventListener('DOMContentLoaded', function ()
 { 
const dropdowns = document.querySelectorAll('.dropdown'); 
dropdowns.forEach(dropdown => 
  { 
    dropdown.addEventListener('mouseover', function ()
 { 
  this.querySelector('.dropdown-menu').classList.remove('hidden'); 

 });
  dropdown.addEventListener('mouseout', function () {
   this.querySelector('.dropdown-menu').classList.add('hidden');

   }); 
  });
 });