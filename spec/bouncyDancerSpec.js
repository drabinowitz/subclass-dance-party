describe("bouncyDancer", function() {

  var bouncyDancer;
  var timeBetweenSteps = 100;
  var clock;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes changes to its CSS", function() {
    sinon.spy(bouncyDancer.$node, 'animate');
    bouncyDancer.step();
    expect(bouncyDancer.$node.animate.called).to.be.true;
  });

  describe("bounce", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bouncyDancer, "step");
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
  });
});
