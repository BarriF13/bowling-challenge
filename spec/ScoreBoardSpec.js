'use strict';// code should be executed in strict mode 

describe ('setup', function(){
  var scoreboard;

  beforeEach(function(){
    scoreboard = new ScoreBoard();
  });

  describe('Scoreboard', function(){
    it ('Has 10 frames', function(){
      expect(scoreboard.frames()).toEqual(10);

    });
  });









});