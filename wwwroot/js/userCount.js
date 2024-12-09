// Create Connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();


//connect to methods that hub invokes aka receive notification from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
})

connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
})


//invoke hub methods aka send notification to hub
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}


//start connection
function fulFilled() {
    //do something on start
    console.log("Connection to User Hub Successfully");
    newWindowLoadedOnClient();
}

function rejected() {
    //rejected logs

}


connectionUserCount.start().then(fulFilled, rejected)