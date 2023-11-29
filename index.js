var grade = Number(prompt("Enter The Grade"))

switch(true){
  case grade>=101:
        alert("Out of mark");
        break;
    
  case grade>=100:
        alert("A Grade");
        break;
        case grade>=90:
        alert("B Grade");
        break;
        case grade>=80:
        alert("C Grade");
        break;
        case grade>=70:
        alert("D Grade");
        break;
        case grade>=60:
        alert("E Grade");
        break;
        case grade<=35:
        alert(" Failed");
        break;
        
        default:
            alert("UnknownGrade");
            break;
}