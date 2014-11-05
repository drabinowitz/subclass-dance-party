var PathDancer = function(top, left, timeBetweenSteps, dancefloor){
  Dancer.call(this, top, left, timeBetweenSteps, dancefloor);
  this.$node.addClass('path-dancer');
  this.x = this.left;
  this.y = this.top;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

PathDancer.prototype = Object.create(Dancer.prototype);

PathDancer.prototype.constructor = PathDancer;

PathDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

 var field = $('.df1');
 var maxX = $('.df1').width() - this.left;
 var maxY = $('.df1').height() - this.top;
 var duration = this.timeBetweenSteps; // seconds 
 var gridSize = 50; // pixels
 var start = null;

 function pathStep(timestamp) {
     var progress, x, y, y2;
     if (start === null) start = timestamp;
     progress = (timestamp - start) / duration / 1000; // percent 
     x = progress * maxX / gridSize; // x = ƒ(t) 
     y = 2 * Math.sin(x); // y = ƒ(x) 
     y2 = 2 * Math.cos(x);
     ball.style.left = Math.min(maxX, gridSize * x) + "px";
     ball.style.bottom = maxY / 2 + (gridSize * y) + "px";
     if (progress >= 1) start = null; // reset to start position 
     requestAnimationFrame(pathStep);  //step is callback
 }
 requestAnimationFrame(pathStep);
};
 // var field = $('.df1');
 // var maxX = $('.df1').width() - this.left;
 // var maxY = $('.df1').height() - this.top;
 //var duration = this.timeBetweenSteps; // seconds 
 //var gridSize = 50; // pixels
 //var start = null;

 // function pathStep(timestamp) {
 //     var progress, x, y, y2;
 //     if (start === null) start = timestamp;
 //     progress = (timestamp - start) / duration / 1000; // percent 
 //     x = progress * maxX / gridSize; // x = ƒ(t) 
 //     y = 2 * Math.sin(x); // y = ƒ(x) 
 //     y2 = 2 * Math.cos(x);
 //     ball.style.left = Math.min(maxX, gridSize * x) + "px";
 //     ball.style.bottom = maxY / 2 + (gridSize * y) + "px";
 //     if (progress >= 1) start = null; // reset to start position 
 //     requestAnimationFrame(step);  //step is callback
 // }
 // requestAnimationFrame(step);