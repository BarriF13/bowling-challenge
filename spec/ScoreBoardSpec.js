'use strict';// code should be executed in strict mode 

  describe('Scoreboard', function() {
    var scoreboard;

      beforeEach(function(){
        scoreboard = new ScoreBoard();
      });

    //gutter means the total of two rolls = 0 ;
    it('can roll gutter game',function () {
        for (var i = 0 ; i < 20 ; i++) {
          scoreboard.roll(0);
        }
      expect(scoreboard.score()).toEqual(0);
    });
  

  it('can roll all ones', function(){
    for (var i  = 0; i < 20; i++){
      scoreboard.roll(1);
    }
    expect(scoreboard.score()).toEqual(20);
  });
});