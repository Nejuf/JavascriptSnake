(function(root){
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var View = SnakeGame.View = function(htmlContainer) {
		this.container = $(htmlContainer);
	}

	View.prototype.start = function() {
		this.board = new SnakeGame.Board();
		this.container.on('keydown', handleKeyEvent.bind(this.board.snake));
	}

	var handleKeyEvent = function(event) {
		switch(event.keyCode) {
		case 65:
		case 37:
			this.dir = "W";
			break;
		case 87:
		case 38:
			this.dir = "N";
			break;
		case 68:
		case 39:
			this.dir = "E";
			break;
		case 83:
		case 40:
			this.dir = "S";
			break;
		}
	}


})(this);