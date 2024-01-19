"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
var _ = require("lodash");
var Scoreboard = /** @class */ (function () {
    function Scoreboard() {
    }
    // results of the player
    Scoreboard.prototype.createResult = function (newResult) {
        this.result = newResult;
    };
    // to display the score on the scoreboard
    Scoreboard.prototype.updateScoreboard = function () {
        console.log(_.upperCase('Help me'));
        var output = "".concat(_.upperCase(this.result.playerName), ": ").concat(this.result.score, "/").concat(this.result.numberOfProblems);
        // Fetch the element where the score needs to be displayed and update the HTML
        var scoresElement = document.getElementById('playerScore');
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
