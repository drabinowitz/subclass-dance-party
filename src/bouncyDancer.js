var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy-dancer');
  this.closest = [];
  for(var i = 0; i < window.dancers.length; i++){
    var top = window.dancers[i].top;
    var left = window.dancers[i].left;
    var distance = this.getDistance(top,left);
    if(this.closest.length !== 3 || distance < this.closest[0]){
      //closest is an array of the closest node = [distanceToNode, top abs pos, left abs pos]
      this.closest = [distance, top, left];
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
  if(this.closest !== undefined && this.closest.length === 3){
    var topDistance = Math.abs(this.top - this.closest[1])/3;
    var leftDistance = Math.abs(this.left - this.closest[2])/3;
    var plus = "+=";
    var minus = "-=";

  if(this.top < this.closest[1]){
    var topUp = plus;
    var topDown = minus;
  }else{
    var topUp = minus;
    var topDown = plus;
  }
  if(this.left < this.closest[2]){
    var leftLeft = plus;
    var leftRight = minus;
  }else{
    var leftLeft = minus;
    var leftRight = plus;
  }
  this.$node.animate({

    top:topUp + topDistance,

    left:leftLeft + leftDistance

  },this.timeBetweenSteps).animate({

    top:topDown + topDistance,

    left:leftRight + leftDistance

  },this.timeBetweenSteps);

}else{
  this.$node.animate({top:'-=70'},this.timeBetweenSteps).animate({top:'+=70'},this.timeBetweenSteps);
}
};

