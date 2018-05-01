function get_orientation(event){

  var y_value=round(event.gamma/100,1)*10;
  var z_value=round(event.beta/100,1)*10;

//  console.log("y_v: "+y_value+" z_v: "+z_value+" s_y: "+sen_y+" s_z: "+sen_z+" p0: "+player[0]+" p1: "+player[1]+" wall: "+wall+" paused: "+paused+" trap: "+trap_triggered)

  if(!paused&&wall){
    sen_y=round(sen_y-=y_value,1);
    sen_z=round(sen_z-=z_value,1);
    wall=false;
  }

  if(!paused&&!trap_triggered){
    player[0]+=y_value;
    player[1]+=z_value;
    if(player[0]<0){player[0]=0}
    if(player[1]<0){player[1]=0}
    if((player[0]+player[2])>=wd){player[0]=(wd-player[2])}
    if((player[1]+player[3])>=ht){player[1]=(ht-player[3])}
    console.log("p0: "+player[0]+" p1: "+player[1]+" p0+p1: "+(player[0]+player[1]));
    console.log("p2: "+player[2]+" p3: "+player[3]+" p2+p3: "+(player[2]+player[3]));
    console.log("wd: "+wd+" ht; "+ht);
  }

  check();


}

function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}
