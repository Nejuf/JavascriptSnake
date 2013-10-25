(function(root){
	var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

	var Snake = SnakeGame.Snake = function(startX, startY){
		this.dir = "N";
		this.segments = [new Coord(startX, startY)];
	}

	Snake.DIRS = ["N", "E", "S", "W"];

	Snake.prototype.move = function() {
		var lastSeg = this.segments.pop();
		lastSeg.plus(this.dir, this.segments[0]);
		this.segments.unshift(lastSeg);
	}

	Snake.prototype.turn = function(newDir) {
		this.dir = newDir;
	}

	Snake.prototype.hasCoord = function(x, y) {
		var foundSeg = false;
		this.segments.forEach(function(segment) {
			if (segment.x === x && segment.y === y) {
				foundSeg = true;
			}
		})
		return foundSeg;
	}

	var Coord = SnakeGame.Coord = function(x, y){
		this.x = x;
		this.y = y;
	}

	Coord.prototype.plus = function(dir, head, distance) {
		distance = distance || 1;
		if (head) {
			this.x = head.x;
			this.y = head.y;
		}

		switch(dir) {
		case "N":
			this.y -= distance;
			break;
		case "E":
			this.x += distance;
			break;
		case "S":
			this.y += distance;
			break;
		case "W":
			this.x -= distance;
			break;
		}
	}

})(this);