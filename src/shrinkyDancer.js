var ShrinkyDancer = function(top, left, timeBetweenSteps, dancefloor){
  Dancer.call(this, top, left, timeBetweenSteps, dancefloor);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('shrinky-dancer');
};

ShrinkyDancer.prototype = Object.create(Dancer.prototype);

ShrinkyDancer.prototype.constructor = ShrinkyDancer;

ShrinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({'height':'+=50', 'width':'+=50'},this.timeBetweenSteps).animate({'height':'-=50', 'width':'-=50'},this.timeBetweenSteps);
};