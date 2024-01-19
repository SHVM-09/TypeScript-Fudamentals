"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var player_1 = require("./player");
var helper_1 = require("./helper");
var newGame;
// add click handler to the show number button
document.getElementById('showNumbers').addEventListener('click', function () {
    console.log('showing numbers');
    var player = new player_1.Player();
    player.name = (0, helper_1.getUserInput)('playerName') || 'Math Player';
    newGame = new game_1.Game(player);
    newGame.displayNumbers();
});
// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    console.log("game started");
    newGame.displayGame();
});
