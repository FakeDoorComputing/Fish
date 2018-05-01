function get_orientation(event){

  var y_value=(event.gamma/100)//+1;
  var z_value=(event.beta/100)//+1;

  console.log("y_v: "+y_value+" z_v: "+z_value+" s_y: "+sen_y+" s_z: "+sen_z+" p0: "+player[0]+" p1: "+player[1]+" wall: "+wall+" paused: "+paused+" trap: "+trap_triggered)

  if(!paused&&wall){
    sen_y-=y_value;
    sen_z-=z_value;
    wall=false;
  }

  if(!paused&&!trap_triggered){
    player[0]+=z_value;
    player[1]+=y_value;
  }

}
