$(document).ready(function() {

$("#0").click(function() {
   
      
      describemoves1();
        
    computerAI1();


  }); 


$("#1").click(function() {
   
    
      describemoves2();
    computerAI2();

  });

$("#2").click(function() {
   
      
      describemoves3();
    computerAI3();

  });

});


function computerAI1() {
  var random;
  var min = 0, max = 2;
   
    random = Math.floor(Math.random() * (max + min));
  

  if(random==1)
    {
      
      $(".controls2").html("<p>computer moves </p><img src='rock2.png'> <hr><p>you won </p>");

    }
    else if(random==2){
      
      $(".controls2").html("<p>computer moves </p><img src='scissors2.png'> <hr><p>yeahh you loose</p>");
    }
    else if(random==0){
      $(".controls2").html("<p>computer moves </p><img src='paper2.png'> <hr><p>its a tie");
      
      
    } 


} 

function computerAI2() {
  var random;
  var min = 0, max = 2;
   
    random = Math.floor(Math.random() * (max + min));
  

  if(random==1)
    {
      
      $(".controls2").html(" <p>computer moves </p><img src='rock2.png'> <hr><p>its a tie");

    }
    else if(random==2){
      
      $(".controls2").html("<p>computer moves </p><img src='scissors2.png'> <hr><p>you won");
    }
    else if(random==0){
      
      $(".controls2").html("<p>computer moves </p><img src='paper2.png'> <hr><p>you loose ");
    } 
  } 

  function computerAI3() {
  var random;
  var min = 0, max = 2;
   
    random = Math.floor(Math.random() * (max + min));
  


  if(random==1)
    {
      
      $(".controls2").html("<p>computer moves </p><img src='rock2.png'> <hr><p>you loose");

    }
    else if(random==2){
      
      $(".controls2").html("<p>computer moves </p><img src='scissors2.png'> <hr><p>itz a tie</p>");
    }
    else if(random==0){
      
      $(".controls2").html("<p>computer moves </p><img src='paper2.png'> <hr><p>you won </p>");
    } 
  } 

  //users moves

  function describemoves1() {
     $(".controls").html("Hello <b>world</b>!");
      $(".controls").html("<img src='paper2.png'> <hr>");
     

  } 

  function describemoves2() {
     $(".controls").html("Hello <b>world</b>!");
      $(".controls").html("<img src='rock2.png'> <hr>");
    

  } 

  function describemoves3() {
     $(".controls").html("Hello <b>world</b>!");
      $(".controls").html("<img src='scissors2.png'> <hr>");
     

  }