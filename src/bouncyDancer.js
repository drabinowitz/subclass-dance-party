var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncy-dancer"></span>');
  this.setPosition(top, left);
  for(var i = 0; i < window.dancers.length; i++){
    this.closest = []; 
    var top = window.dancers[i].css('top');
    top = +top.substring(0,top.length - 2);
    var left = window.dancers[i].css('left');
    left = +left.substring(0,left.length - 2);
    if(this.getDistance(top,left) < closest[0]){
      this.closest = [this.getDistance(top, left), top, left];
    }
  }
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({top:"-=70"},this.timeBetweenSteps).animate({top:"+=70"},this.timeBetweenSteps);
};