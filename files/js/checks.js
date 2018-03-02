/* Cheese Hunt (C) 2016-2018
AUTHOR: Symon Hambrey
Game Files - checks.js */

function check(){

  // check for walls
  //console.log("check for walls")
  for(i=0;i<level[levelNo].xStrt.length;i++){
    xPos=xPer*level[levelNo].xStrt[i];
    yPos=yPer*level[levelNo].yStrt[i];
    xBox=xPer*level[levelNo].xSize[i];
    yBox=yPer*level[levelNo].ySize[i];
    var pX=xPer*player.x, pY=yPer*player.y, pSx=xPer*player.s, pSy=yPer*player.s;
    if(xPos<pX+pSx&&xPos+xBox>pX&&yPos<pY+pSy&&yPos+yBox>pY){
      return ["wall",9];
    }
  }

  // check for trap
  //console.log("check for traps")
  if(diff_lev>1){
    for(i=0;i<trap[levelNo].x.length;i++){
      var tX=xPer*trap[levelNo].x[i], tY=yPer*trap[levelNo].y[i], tSx=xPer*trap[levelNo].s[i], tSy=yPer*trap[levelNo].s[i];
      var pX=xPer*player.x, pY=yPer*player.y, pSx=xPer*player.s, pSy=yPer*player.s;
      if(tX<pX+pSx&&tX+tSx>pX&&tY<pY+pSy&&tY+tSy>pY){
        return ["trap",9];
      }
    }
  }

  //check for exit
  //console.log("check for exit")
  for(i=0;i<4;i++){
    xPos=xPer*level[levelNo].exit[0];
    yPos=yPer*level[levelNo].exit[1];
    xBox=xPer*level[levelNo].exit[2];
    yBox=yPer*level[levelNo].exit[2];
    var pX=xPer*player.x, pY=yPer*player.y, pSx=xPer*player.s, pSy=yPer*player.s;
    if(xPos<pX+pSx&&xPos+xBox>pX&&yPos<pY+pSy&&yPos+yBox>pY){
      return ["exit",9];
    }
  }

  // check for cheese
  //console.log("check for cheese")
  for(i=0;i<cheese_place[levelNo].x.length;i++){
    var cX=xPer*cheese_place[levelNo].x[i], cY=yPer*cheese_place[levelNo].y[i], cSx=xPer*cheese_place[levelNo].s[i], cSy=yPer*cheese_place[levelNo].s[i];
    var pX=xPer*player.x, pY=yPer*player.y, pSx=xPer*player.s, pSy=yPer*player.s;
    if(cX<pX+pSx&&cX+cSx>pX&&cY<pY+pSy&&cY+cSy>pY){
      return ["cheese",i];
    }
  }
  
  return ["",9];

}
