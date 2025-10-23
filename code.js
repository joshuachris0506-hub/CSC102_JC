function playCraps(){
     // log that the function was called
      console.log("playCraps() function was called"); 

      // roll die 1
         let roll1 = rollDice();
            // roll die 2
         let roll2 = rollDice();
         console.log("roll1=" + roll1);
         console.log("roll2=" + roll2);
         // Calculate the rolls
         let sum =  roll1 + roll2;
         // display roll 1 in the roll 1 div
         document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;
         document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;
         document.getElementById("divSum").textContent = "Roll Sum: " + sum;
         
         // see if the user lost - if they roll a sum of 9 or 10
         // || - means or
         // && - means and
         if (sum == 9 || sum == 10){
             console.log("you lost.");
             result = "You lost.";
         }
         // check if we rolled an even number
         // modulus - % - do a division problem and we get the remainder as the result
         // 2/2 = 1 with no remainder
         // roll1 % 2 == 0 - this will be true if we have an even number
         // we also need to make sure that roll1 and roll2 resulted in the same value
         else if(roll1 % 2 == 0 && roll1 == roll2){
             console.log("you won!");
             result = "You won!";
         }
         // the catch-all else statement if neither of the above statements evaluated to be true
         else{
             console.log("you drew (push)");
             result = "You drew :/";
         }
         document.getElementById("divResult").textContent = result
        }
        
        //reate a function to generate a random number
        function rollDice(){
         // create a variable to hold a random number
         // Math.random() is a built in JavaScript function which generates a random number 
         let die = Math.random() * 8; // I want to repclicate a 8 sided die
         // round the number and return the value
         return Math.ceil(die);
        }


        function validateForm(){
            //get the value the user entered in for their first name 
            //we will remove any spaces at the beginning or the end with trim()
            let FirstName = document.getElementById("txtFirstName").value.trim();

            let LastName = document.getElementById("txtLastName").value.trim();

            let ZipCode = document.getElementById("txtZipCode").value.trim();

            console.log("FirstName=" + FirstName);
            console.log("LastName=" + LastName);
            console.log("ZipCode=" + ZipCode);
                // validation - we need to make sure that the first name + " " + last name is less then 20 characters

                let message ="";

                FullName = FirstName + " " + LastName;

                console.log("FullName=" + FullName);

                if (FullName.length > 20 || FullName.length ==1){
                    message = "Name too long, come on bruh";
                    console.log("invalid name");
                }

                else if (ZipCode.length != 5){

                    message = "Did you even try putting in your real ZipCode?";
                    console.log("Invalid ZipCode");
                }
                else{
                    message = "Welcome, " + FirstName + ". The secret word is Bishop";

                }
                document.getElementById("divMessage").textContent = message;
    
        }



        let intervalID = 0;

        function startMove(){
            let image = document.getElementById("chess");
        
            //store the current interval id
            intervalID = setInterval(function(){
        
            let xCord = getRandNum();
            let yCord = getRandNum();
        
            image.style.left = xCord + "px";
            image.style.top = yCord + "px";
        
        
        }, 900);
                // the code that runs repeatedly 
                document.getElementById("btnStart").disabled = true;
                document.getElementById("btnStop").disabled = false;
        }
        function stopMove(){
        
            clearInterval(intervalID);
            document.getElementById("btnStart").disabled = false;
            document.getElementById("btnStop").disabled = true;
        }
        
            // functio to randomly generate a number
            function getRandNum(){
                return Math.floor(Math.random() * 800);
            }