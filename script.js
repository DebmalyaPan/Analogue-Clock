setInterval(() => {
    let d = new Date();
    let hArrow = d.getHours();
    let mArrow = d.getMinutes();
    let sArrow = d.getSeconds();

    let hRotation = 30*hArrow + mArrow/2;
    let mRotation = 6*mArrow + 0.1*sArrow;
    let sRotation = 6*sArrow;
    
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

  }, 1000);

  /* 
       <<<<  https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-bsmbt&psig=AOvVaw1rJjcwoBpgELPmli8y7m59&ust=1679762279248000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC2mp2A9f0CFQAAAAAdAAAAABAE >>

             ------ hour arrow  ----------

          12 hour =    360      degree rotate
            1 hour  =   (360/120)  degree rotate
                    =    30     degree roate
            h hour  =  30h degree rotate

            60 minutes  = 30 degree rotate
            1 minute  =  1/2 degree rotate
            m minutes  =  m/2 minutes

            ////// total rotation for hour arrow  =  ( 30h + m/2 )

           ------------ minute arrow ----------------


            60 minutes =  360 degree rotate
            1 minute   =   6  degree rotate
            m minute  = 6m degree rotate

            60 seconds  =  6  degree rotate
            1 second  =  6/60   degree rotate 
                       = 0.1  deg
            s second   = 0.1s  degree

            //////// total secnd = ( 6m + 0.1s ) degree
            

            60 seconds  =  360  degree rotate
            1 second  =  6   degree rotate 
            s second   = 6s  degree
       */