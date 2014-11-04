// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);

  this.step();

  this.left = left;

  this.top = top;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var thisRef = this;
  setTimeout(function(){
    thisRef.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top){
  this.$node.animate({top:top, left:'0'},this.timeBetweenSteps/3);
}

Dancer.prototype.getDistance = function(top, left){
  return Math.sqrt(Math.pow((this.top - top), 2) + Math.pow((this.left - left), 2));
}