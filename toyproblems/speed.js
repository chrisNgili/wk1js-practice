function speedDetector(speed){
    // Checks whether the speed is an integer and it is greater than 0

    if ( isNaN(speed) || speed < 0 ){
        return "try again"
    }
    let speedLimit = 70
    let demerits = 0

    // Checks whether speed limit is above 70, if not, it returns ok
    if(speed <= 70){
        return "Ok"
    }
    // Checks if speed is above the limit
    else if(speed > speedLimit){
        //If the speed is above the limit, it calculates the demerits
        demerits = Math.floor((speed - speedLimit)/5);
 
        // Checks whether the demerits are above the threshold which permits license suspension
         if( demerits >= 12){
            return "License suspended, you have " + demerits + " demerits"
        }else {
            return "Lucky boy, you only have " + demerits  + " demerits"
        }
    }
    
}
