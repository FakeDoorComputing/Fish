$(document).on("deviceready", function(){

  function get_movement(){

    navigator.accelerometer.getCurrentAcceleration(acc_success, acc_err);

    function acc_success(acc){
      a_x=acc.x, a_y=acc.y, a_t=acc.timestamp;
      if(a_x>(ax+10)){
        dir=3;
        ax=a_x;
      }
      if(a_x<(ax-10)){
        dir=4;
        ax=a_x;
      }
      if(a_y>(ay+10)){
        dir=1;
        ay=a_y;
      }
      if(a_y<(ay-10){
        dir=2;
        ay=a_y;
      }
      return [dir];
    }

    function acc_err(){
      console.log("motion error");
    }

  }
})
