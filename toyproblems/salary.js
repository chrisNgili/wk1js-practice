function calculateNetSalary(basicSalary, benefits){

    // Checks whether basicSalary and benefits are numbers > 0
    if ( isNaN(basicSalary) || isNaN(benefits)){
        return "try again"
    }

    let grossSalary = basicSalary + benefits
    let paye = 0 
    let shif = 0
    let nssf = 0 
    let netSalary = 0
// Calculates Paye
    if (grossSalary <= 24000 ){
        paye = (grossSalary * 0.1 )
        
    }else if (grossSalary >=24001 && grossSalary<= 32333){
        paye = (grossSalary * 0.25)
    
    }else if (grossSalary>= 32334 && grossSalary<=500000){
        paye = (grossSalary * 0.3)
        
    }else if (grossSalary>= 500001 && grossSalary < 8000000){
        paye = (grossSalary * 0.325)
        
    }else if (grossSalary >= 800000){
        paye = grossSalary * 0.35
    }

    //Calculates SHIF
    if (grossSalary > 0 ){
        shif = grossSalary * 0.0275
    }

    //Calculates nssf
    if (grossSalary > 18000){
        nssf = 2160
    }else if(grossSalary < 18000){
        nssf = grossSalary *0.06
    }

    // Gets NetSalary by subtracting nssf, shif and paye from grossSalary
    netSalary = grossSalary - nssf - shif - paye
    return netSalary
}
