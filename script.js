var flag = Boolean;

function myFunction() {
    location.replace("generate.html")
  }

  i = 0
  function display() { 
    
    // init annotation 
   if(i<ques.length-1){
      var myCurrentElement= document.getElementById("quiz"); 
      var newElement = document.createElement("div"); 
      newElement.setAttribute("id", "ques");
      newElement.innerHTML = ques[i].question + "<br/><br/>" ; 
      myCurrentElement.parentNode.replaceChild(newElement, myCurrentElement.nextSibling); 

      var key = document.getElementById("tags"); 
      var newkey = document.createElement("mark"); 
      newkey.setAttribute("id", "keywrd");
      key.appendChild(newkey);
      newkey.innerHTML =   ques[i].keyword ;
      key.parentNode.replaceChild(newkey,key.nextSibling);
      i+=1;
      return
  }else{
     alert("quiz over.") }
     }

     j = 0
     function displaynotes() { 
      // console.log(myCurrentElement.nextSibling) 
      if(j<phynote.length-1){
         var myCurrentElement= document.getElementById("notescard"); 
         var newElement = document.createElement("div"); 
         newElement.innerHTML = phynote[j].notes ; 
         console.log(phynote[j].notes);
         myCurrentElement.parentNode.replaceChild(newElement, myCurrentElement.nextSibling); 
         j+=1 }else{ alert("Topic over.") }
         return
        }





$(".read").click(function () {
   display();
   });


   function fetchNotes() {
    
   }


// flag = false;
   $("#key").click(function () {
      $('.front').css('visibility', 'hidden');
      $(".pop-up").toggleClass("flipped");
      $('.float-container').hide()
      $("#back").show();
      return
    });


    $("#back").click(function () {
      $(".pop-up").toggleClass("flipped");
      $('.front').css('visibility', 'visible');
      $('.float-container').show()
      $("#back").hide();
       display();
      return
     });
  






$(function () {
  $("#read").click(function () {
    displaynotes();
  });
 });


 //close pop up card
 
 $(function () {
 $(".pop-up .close").click(function () {
  $("#sidemen").show();
 $("#annotat").hide();
        $(".overlay-app").removeClass("is-active");
       $(".pop-up").removeClass("visible");
       document.getElementById("hi").style.display = "none";
      //  console.log("wraphideeen");
      });
 });





 $(document).ready(function () {

      $("#continue").on("click", function (e) {
        $(".overlay-app").addClass("is-active");
      });
      $(".pop-up .close").click(function () {
        $(".overlay-app").removeClass("is-active");
      $(".pop-up").removeClass("visible");
      });
      $("#quztab").addClass("is-active");
      $("#quztabdata").show();
      $("#nottabdata").hide();
      $("#vidtabdata").hide();
    //Handle click event
    $('.main-header-link').on('click', function(e){
      e.preventDefault();
      $(".main-header-link").removeClass("is-active");
      //Add Active class to clicked tab
      $(this).addClass('is-active');
      let clickedTab = $(this).attr("id");
      let data = clickedTab + "data"
      console.log(data)
      switch (data) {
        case "quztabdata":
          console.log("quztabdata    working")
          $("#nottabdata").hide();
          $("#vidtabdata").hide();
          $("#quztabdata").show();
          break;
        case "vidtabdata":
          console.log("vidtabdata    working")
          $("#nottabdata").hide();
          $("#quztabdata").hide();
          $("#vidtabdata").show();
          break;
        case "nottabdata":
          console.log("notabada    working")
          $("#vidtabdata").hide();
          $("#quztabdata").hide();
          $("#nottabdata").show();
          break;      
        default:
      } });

 
});




const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
 dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdowns.forEach((c) => c.classList.remove("is-active"));
  dropdown.classList.add("is-active");
 });
});

$(".search-bar input")
 .focus(function () {
  $(".header").addClass("wide");
 })
 .blur(function () {
  $(".header").removeClass("wide");
 });

$(document).click(function (e) {
 var container = $(".status-button");
 var dd = $(".dropdown");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
  dd.removeClass("is-active");
 }
});

$(function () {
 $(".dropdown").on("click", function (e) {
  $(".content-wrapper").addClass("overlay");
  e.stopPropagation();
 });
 $(document).on("click", function (e) {
  if ($(e.target).is(".dropdown") === false) {
   $(".content-wrapper").removeClass("overlay");
  }
 });
});



// $(function () {
//   $("#continue").on("click", function (e) {

//    $(".wrapper").addClass("overlay");
//    e.stopPropagation();
//   });
//   $(document).on("click", function (e) {
//    if ($(e.target).is("#continue") === false) {
//     $(".wrapper").removeClass("overlay");
//    }
//   });
//  });



$(".status-button:not(.open)").click(function () {
  console.log("haai...");
  $(".overlay-app").addClass("is-active");
 var x = document.getElementById("hi");
 if (x.style.display === "none") {
   x.style.display = "block";
 } else {
   x.style.display = "none";
 }
 $(".pop-up").addClass("visible");
 $("#sidemen").hide();
 $("#annotat").show();
});

const toggleButton = document.querySelector('.dark-light');
toggleButton.addEventListener('click', () => {
document.body.classList.toggle('light-mode');
});

