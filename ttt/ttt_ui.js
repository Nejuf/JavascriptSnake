(function (root) {

  var TTT = root.TTT = (root.TTT || {});

	var UI = TTT.UI = function(game){
		this.game = game;
	}

	UI.prototype.bindMouseClicks = function(){
		$("div.board").on("click", "div.square", this.onSquareClicked.bind(this));
	}

	UI.prototype.onSquareClicked = function(event){
		var color = this.game.player === "x" ? "red" : "blue";//["x", "o"]
		var id = $(event.currentTarget).data("id");
		console.log(id);
		var pos = [ Math.floor(id/3), (id) % 3 ];
		if(this.game.move(pos)){
			$(event.currentTarget).css("background-color", color);
		}
		if(this.game.winner()) {
			$("div.board").off("click", "div.square");
			alert(color + " is the winner!");
			return;
		}
	}

})(this);
