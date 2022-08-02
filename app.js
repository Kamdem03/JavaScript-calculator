let result=document.getElementById("inputext");

//declaring variable
let resultState = false;


let calculate=(number)=>{
    //if the resuleState is true then we clear the screen
    if (resultState) clr();

    result.value+=number;
}


let Result=()=>{
    try{
        result.value=eval(result.value);
        //change the false of the variable to either true
        resultState = !resultState;
    }
    catch(err){
        alert("Enter the valid Input");
    }
}

function clr() {
    result.value= " ";
    //result the resultState to false since you already clear the screen
    resultState = false;

}
function del(){
    result.value=result.value.slice(0,-1);
}
