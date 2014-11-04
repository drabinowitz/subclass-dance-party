describe("ShrinkyDancer", function() {

  var shrinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shrinkyDancer = new ShrinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shrinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes changes to its CSS", function() {
    sinon.spy(shrinkyDancer.$node, 'animate');
    shrinkyDancer.step();
    expect(shrinkyDancer.$node.animate.called).to.be.true;
  });

  describe("bounce", function(){
    it("should call step at least once per second", function(){
      sinon.spy(shrinkyDancer, "step");
      expect(shrinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(shrinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shrinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
