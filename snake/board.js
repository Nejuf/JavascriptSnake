(function(root){
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var Board = SnakeGame.Board = function() {
		this.snake = new SnakeGame.Snake(10, 10);
	}

	Board.SIZE = 20;

	Board.prototype.render = function() {
		var board = this;
		var rowString = "";
		_.times(Board.SIZE, function(row) {
			_.times(Board.SIZE, function(col) {
				if (board.snake.hasCoord(col, row )) {
					rowString += "S";
				} else {
					rowString += ".";
				}
			})
			console.log(rowString)
			rowString = "";
		})
	}

})(this);