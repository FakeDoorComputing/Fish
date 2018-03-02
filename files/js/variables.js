/* Cheese Hunt (C) 2016-2018
AUTHOR: Symon Hambrey
Game Files - variables.js */

// variables for game drawing

var game_canvas, cv1, xPos, yPos, xBox, yBox, wd, ht;

// window sizing
var wd, ht, xPer, yPer;

// game variables
var diff_lev=2, paused=false, levelNo=1, direction=0, key, speed=0, lives=3, trapped=false,
    set_speed=1, score=0, sound=true, cheese_rating=0, cheese_collected=0, time, total_level_score=0,
    time_choice=[0,3660,3660,1860];

// load sound effects
var splash=new Audio("files/sounds/new_intro.mp3");
var beep=new Audio("files/sounds/beep.mp3");
var beep_end=new Audio("files/sounds/beep_end.mp3");
var scratch=new Audio("files/sounds/scratch.mp3");
var knock=new Audio("files/sounds/knock.mp3");
var chime=new Audio("files/sounds/chime.mp3");
var lev_com=new Audio("files/sounds/level_win.mp3");
var win_sound=new Audio("files/sounds/win.mp3");
var powerup=new Audio("files/sounds/powerup.mp3");
var game_over=new Audio("files/sounds/gameOver.mp3");
var lick=new Audio("files/sounds/lick.mp3");
var cheese_1=new Audio("files/sounds/cheese_score_1.mp3");
var cheese_2=new Audio("files/sounds/cheese_score_2.mp3");
var cheese_3=new Audio("files/sounds/cheese_score_3.mp3");
var trap_snap=new Audio("files/sounds/trap2.mp3");
var gong=new Audio("files/sounds/gong.mp3");

// load images

var playerSprite = new Array()
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
		playerSprite[i] = new Image()
		playerSprite[i].src = preload.arguments[i]
		}
	}
  preload(
				"files/graphics/ratUp.png",
				"files/graphics/ratDown.png",
        "files/graphics/ratLeft.png",
        "files/graphics/ratRight.png",
			   )

var trapSprite=new Image();
var cheeseSprite=new Image();
var doorSprite=new Image();
var game_background=new Image();
var continue_button=new Image();
trapSprite.src="files/graphics/trap.png";
cheeseSprite.src="files/graphics/cheese.png";
doorSprite.src="files/graphics/door.png";
game_background.src="files/graphics/game_background.png";
continue_button.src="files/graphics/continue.png";

// initialise level design variables (these are percentages)
var level=[{},{ /* level one */
xStrt:[  0,  0, 99,  0,10,10,89,20,20,20,79,20,30,30,30,69,40,40,40,59,40],/*x position length*/
yStrt:[  0,  0,  0, 99,10,10,10,89,20,20,30,79,30,30,69,30,40,40,55,40,59],/*y position length*/
xSize:[100,  1,  1,100,79, 1, 1,70,59, 1, 1,60,40, 1,40, 1, 1,20, 1, 1,20],/*x position size*/
ySize:[  1,100,100,  1, 1,80,79, 1, 1,60,50, 1, 1,40, 1,30, 5, 1, 5,20, 1],/*y position size*/
/*exit:[50,41,9,18]*/
exit:[51,46,7]
}];

// initialise trap placement
var trap=[{},{
  x:[91,12,22],
  y:[91,12,71],
  s:[ 7, 7, 7]
}];

// initialise cheese placement
var cheese_place=[{},{
  x:[81,11,51],
  y:[91,31,21],
  s:[ 7, 7, 7]
}];

// player object initial position
var player={x:91,y:2,s:7};
