function get_orientation(event){

  var y_value=(event.beta/100)//+1;
  var z_value=(event.beta/100)//+1;

  console.log(y_value+" "+z_value)

  if(wall){
    sen_y-=y_value;
    sen_z-=z_value;
    wall=false;
  }

  if(!paused&&!trap){
    player[0]+=z_value;
    player[1]+=y_value;
  }

}
