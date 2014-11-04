$(document).ready(function(){
  window.dancefloor = '.df1';
  window.dancers = [];
  $(".lineupDancerButton").on("click", function(event){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp('0', i * 70);
    }
  });
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var DancerConstructor = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new DancerConstructor(
      Math.min($(window.dancefloor).height()-100, Math.max(100, $(window.dancefloor).height() * Math.random())),
      Math.min($(window.dancefloor).width()-100, Math.max(100, $(window.dancefloor).width() * Math.random())),
      Math.random() * 1000,
      window.dancefloor
    );

    window.dancers.push(dancer);

    $(window.dancefloor).append(dancer.$node);
    if(window.dancefloor === '.df1'){
      window.dancefloor = '.df2';
    }else{
      window.dancefloor = '.df1';
    }
  });
  
  $("body").on("mouseover", '.blinky-dancer, .shrinky-dancer',function(event){
    $(event.target).addClass('blinky-dancer-hover');
  });

  $("body").on("mouseout", '.blinky-dancer, .shrinky-dancer',function(event){
    $(event.target).removeClass('blinky-dancer-hover');
  }); 


});

