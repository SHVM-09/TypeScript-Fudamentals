"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Helpers = require("./helper");
var scoreboard_1 = require("./scoreboard");
var Game = /** @class */ (function () {
    function Game(player) {
        this.player = player;
        this.scoreboard = new scoreboard_1.Scoreboard();
        this.randNum1 = Helpers.getRandomNumber(10, 5);
        this.randNum2 = Helpers.getRandomNumber(5, 1);
        this.operators = ["+", "-", "*", "/"];
        this.problemCount = this.operators.length;
    }
    // display the numbers on which the Math Games will be played
    Game.prototype.displayNumbers = function () {
        document.getElementById("gameNumbers").innerHTML = "".concat(String(this.randNum1), " and ").concat(String(this.randNum2));
    };
    // display the HTML to represent the gameboard on the screen
    Game.prototype.displayGame = function () {
        var _this = this;
        var gameBoard = "";
        for (var i = 0; i < this.operators.length; i++) {
            gameBoard += "<div class=\"form-group\">\n                    <label for=\"answer".concat(i + 1, "\" class=\"col-sm-2 control-label\">\n                    ").concat(String(this.randNum1), " ").concat(this.operators[i], " ").concat(String(this.randNum2), "\n                    </label>\n                    <div class=\"col-sm-1\">\n                        <input type=\"text\" class=\"form-control\" id=\"answer").concat(i + 1, "\" size=\"5\">\n                    </div>\n                </div>");
        }
        gameBoard += "<div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-4\">\n        <button type=\"button\" class=\"btn btn-sm btn-success\" id=\"calculateScore\">Calculate Score</button></div></div>";
        // adding new game to page
        var gameElement = document.getElementById("mathGame");
        gameElement.innerHTML = gameBoard;
        // add click handler to the calculate score button
        document.getElementById("calculateScore").addEventListener("click", function () {
            _this.calculateScore();
        });
    };
    // Fetch answers and calculate score
    Game.prototype.calculateScore = function () {
        var score = 0;
        var answer;
        // loop through the text box and calculate score
        for (var i = 0; i < this.problemCount; i++) {
            var inputAnswer = Helpers.getUserInput("answer" + (i + 1));
            // check if there is an input answer or it is left blank
            if (inputAnswer) {
                answer = Number(Helpers.getUserInput("answer" + (i + 1)));
            }
            else {
                continue;
            }
            var correctAns = eval(this.randNum1 + this.operators[i] + this.randNum2);
            if (correctAns == answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            numberOfProblems: this.problemCount,
        };
        this.scoreboard.createResult(result);
        this.scoreboard.updateScoreboard();
        // Disable calculate scroe button
        document.getElementById("calculateScore").setAttribute("disabled", "true");
    };
    return Game;
}());
exports.Game = Game;
