new WOW().init();

// start of navbar
function displayForm(){
     
    window.addEventListener('click', function(e){   
        if (document.querySelector('.search-icon').contains(e.target)){
            document.querySelector('.search-icon-form').classList.toggle('active');
        } else{
            document.querySelector('.search-icon-form').classList.remove('active');
        }
      });

 
}

function displayToggledForm(){
     
    window.addEventListener('click', function(e){   
        if (document.querySelector(' .search-icon-toggler').contains(e.target)){
            document.querySelector(' .search-icon-form-toggler').classList.toggle('active');
        } else{
            document.querySelector(' .search-icon-form-toggler').classList.remove('active');
        }
      });

 
}

function displayOffcanvas(){
        
    window.addEventListener('click', function(e){   
        if (document.querySelector('.btn-close').contains(e.target)){
            document.querySelector('.nav-offcanvas').classList.remove('show');
        } 
      });
}
displayForm();
displayToggledForm();
displayOffcanvas();
// end of navbar



function activeUpBtn(){
 let element=document.querySelector('.theCenter'); 
 let elementHeight=element.offsetTop; 
 let qLinks= document.querySelectorAll('.quick-link');
 let qSpan= document.querySelectorAll('.quick-link-head span');
 window.onscroll=function(){
   if( window.scrollY>elementHeight-500){
       document.querySelector('.up-btn').classList.add('active-btn');
        
        qLinks.forEach(link => {
            link.classList.add('smallQuickLink');
        });

        qSpan.forEach(link => {
            link.classList.add('d-none');
        });
       
    }else{
        document.querySelector('.up-btn').classList.remove('active-btn');
        qLinks.forEach(link => {
            link.classList.remove('smallQuickLink');
        });
        qSpan.forEach(link => {
            link.classList.remove('d-none');
        });
    }
}
}

document.querySelector('.up-btn').onclick=function(){goToTup()}
function goToTup(){
   
   document.documentElement.scrollTop = 0;
    
}

activeUpBtn();

let links=document.querySelectorAll('.top-link');

links.forEach(link => {
    link.addEventListener('mouseover', function() {
        document.querySelector('.start-content').classList.add('d-none');
    });
    link.addEventListener('mouseout', function() {
        document.querySelector('.start-content').classList.remove('d-none');
    });
});

//check for Navigation Timing API support
if (performance.navigation.type == performance.navigation.TYPE_NAVIGATE || performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.log( "reloaded" );
  
  document.querySelector('.loading').classList.add('d-none');
}

// function refreshCheck()
//       {
//         if( document.refresh.visited.value == "" )
//         {
//           // Page loaded for first time
//           document.refresh.visited.value = "1";
//           alert("Fresh!!");
//         }
//         else
//         {
//           //On page refresh
//           alert("Refresh!!");
//         }
//       }

//       refreshCheck();    
// document.addEventListener('DOMContentLoaded',function(){
//     if(document.readyState === 'complete'){
//         document.querySelector('.loading').classList.add('loading-none');
//     }
//   });

//   document.addEventListener('readystatechange',function(){
//     if (document.readystate === 'loading'){
//         console.log('kkkkkkkkkk');
//       //window.location = "Welcome.html";
//     }
// }
//   )

//  document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; 

// start of theCenter
// function onScroll(){
//     let element=document.querySelector('.theCenter');
//     let elementHeight=element.offsetTop;
//    window.onscroll=function(){
//      if(window.scrollY>elementHeight-500){
//         document.querySelector('.theCenter-img').classList.add('theCenter-img-scroll');
//         document.querySelector('.theCenter-span').classList.add('theCenter-span-scroll');
//         document.querySelector('.theCenter-h2').classList.add('theCenter-h2-scroll');
//         document.querySelector('.theCenter-p').classList.add('theCenter-p-scroll');
//         document.querySelector('.theCenter-a').classList.add('theCenter-a-scroll');

//      }else{
//         document.querySelector('.theCenter-img').classList.remove('theCenter-img-scroll');
//         document.querySelector('.theCenter-span').classList.remove('theCenter-span-scroll');
//         document.querySelector('.theCenter-h2').classList.remove('theCenter-h2-scroll');
//         document.querySelector('.theCenter-p').classList.remove('theCenter-p-scroll');
//         document.querySelector('.theCenter-a').classList.remove('theCenter-a-scroll');
//      }
//    }
// }

// onScroll();