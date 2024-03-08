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
    let x =  new Task(title,description,startDate,budget,status,color);
    console.log(x);


function testRequest(){
    $.ajax({
        type: "GET",
        url:"http:fsdiapi.azurewebsites.net/",
        success: function(response){
        },
        error: function(error)
        {
                console.log(error);
        }
    });
}

    //save to server

    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function(response){
            console.log(response);
        },
        error: function(error)
        {
            console.log(error);
        }
    });

    //display the task
}

function testRequest(){
    $.ajax({
            type: "Get",
            url: "https://fsdiapi.azurewebsites.net/"
    })
}

function init(){
    console.log("this is a task manager");
//load data

// hook events
    $("#btnSave").click(saveTask);
//document.getElementByID("btnSave")

}

window.onload = init;