describe("pathDancer", function() {

  var pathDancer;
  var timeBetweenSteps = 100;
  var clock;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pathDancer = new PathDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(pathDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes changes to its CSS", function() {
    sinon.spy(pathDancer.$node, 'animate');
    pathDancer.step();
    expect(pathDancer.$node.animate.called).to.be.true;
  });

  describe("step", function(){
    it("should call step at least once per second", function(){
      sinon.spy(pathDancer, "step");
      expect(pathDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(pathDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pathDancer.step.callCount).to.be.equal(2);
    });
  });
});
