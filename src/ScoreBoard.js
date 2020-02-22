//main file
'use strict';

var ScoreBoard = function(){

    this.rolls = [];
};

ScoreBoard.prototype.roll = function(pins){
  this.rolls.push(pins);

};
ScoreBoard.prototype.score = function(){
  var result =  0;
  for(var i = 0 ; i <20 ; i++){
    result += this.rolls[i];
  }
  return result;
};