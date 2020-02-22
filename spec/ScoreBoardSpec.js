'use strict';// code should be executed in strict mode 

// describe ('setup', function(){
//   var scoreboard;

//   beforeEach(function(){
//     scoreboard = new ScoreBoard();
//   });

  describe('Scoreboard', function(){
    // it ('Has 10 frames', function(){
    //   expect(scoreboard.frames()).toEqual(10);

    // });
    it('can roll gutter game',function () {
      var scoreboard = new ScoreBoard();

        for (var  i = 0 ; i < 20 ; i++) {
          scoreboard.roll(0);
        }
      expect(scoreboard.score()).toEqual(0);
    });
  });

// });