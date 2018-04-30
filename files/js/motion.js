
function get_orientation(event){

  if(paused){
    if(move){
      sen_y=event.beta;
      sen_z=event.gamma;
      move=false;
    }
    start_y=sen_y;
    start_z=sen_z;
  }
  else{
    sen_y=event.beta;
    sen_z=event.gamma;
    player[0]+=sen_z;
    player[1]+=sen_y;
    now_y=start_y-sen_y;
    now_z=start_z-sen_z;
    move=true;
  }

}
