(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

	var Ui = Hanoi.Ui = function(game) {
		this.game = game;
		this.pileNumber = -1;
		$('.pile').on('click', onPileClick.bind(this))


	}
	var onPileClick = function(event) {
		var toPile = $(event.currentTarget);
		if (this.pileNumber < 0) {
			this.pileNumber = parseInt(toPile.data("id"));
			var fromPile = $('.pile').eq(this.pileNumber);
			fromPile.children().eq(0).addClass("highlighted");
		} else {
			var toPileNumber = parseInt(toPile.data("id"));
			if (this.pileNumber !== toPileNumber) {
				if (this.game.move(this.pileNumber, toPileNumber)) {
					var fromPile = $('.pile').eq(this.pileNumber);
					var topDisk = fromPile.children().eq(0).detach();
					topDisk.removeClass("highlighted");

					toPile.prepend(topDisk);
					if (this.game.isWon()) {
						$('.pile').off('click');
						alert("You Win! in " + this.game.moveCounter + " moves...");
					}
				}
			}
			var fromPile = $('.pile').eq(this.pileNumber);
			fromPile.children().eq(0).removeClass("highlighted");
			this.pileNumber = -1;
		}
	}


})(this);