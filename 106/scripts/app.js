function saveTask(){
    console.log("Saving....");
    //get values
    const title = $("#inputTitle").val();
    const description = $("#inputDescription").val();
    const startDate = $("#inputStartDate").val();
    const budget = $("#inputBudget").val();
    const status = $("#inputStatus").val();
    const color = $("#inputColor").val();     
    console.log(Title,Description,startDate,Budget,Status,Color);

    //build the object
    let task =  new Task(title,description,startDate,budget,status,color);
    console.log(task);



    //save to server

    //display the task
}

function init(){
    console.log("this is a task manager");
    //load data


   // hook events
    $("#btnSave").click(saveTask);
   //document.getElementByID("btnSave")

}

window.onload = init;