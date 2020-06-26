var five = require("johnny-five");
var firebase = require("firebase");


var board = new five.Board(
     
      {
          port:"Com4"
      }

  );



board.on("ready", function() 

{
  

   var config = {
    apiKey: "AIzaSyBBaDFxZhsC9TuT45iR-AW1VLiw7oqf_dU",
    authDomain: "tutorial-iot-f6f1f.firebaseapp.com",
    databaseURL: "https://tutorial-iot-f6f1f.firebaseio.com",
    projectId: "tutorial-iot-f6f1f",
    storageBucket: "tutorial-iot-f6f1f.appspot.com",
    messagingSenderId: "1048452435911"
  };


  firebase.initializeApp(config);

/*
  const put=document.getElementById('object');



firebase.database().ref('DATA_TAKEN').on('value',snap => {


                  put.innerText=JSON.stringify(snap.val(),null,3);

  });

*/



 
  
                 
                    var proximity = new five.Proximity({
                    controller: "HCSR04",
                    pin: 7

                    });

              
                     
              
                     proximity.on("data", function() {

                    
                      

                             var data="proximity:\n"+"cm: "+this.cm.toString()+"\n"+"in: "+this.in.toString()+"\n----------------------------------";
                              cm1=this.cm

                              if (this.cm<=8)
                               {
                                   console.log(data)
                                   firebase.database().ref('DATA_TAKEN').child('centi').set(this.cm);
                               }


                               else
                              {

                                 console.log("The obstruction has moved.");
                                firebase.database().ref('DATA_TAKEN').child('centi').set("NULL");

                              }

                    });


              
                  
                  

              


        
    



});




