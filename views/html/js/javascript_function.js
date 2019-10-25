function deleteUser(id) {
    console.log("Delete user with id: " + id);

    var params = JSON.stringify({"id": id});
    var request = new XMLHttpRequest();
    request.open('POST', 'http://192.168.20.4:3002/api/user/delete', true);
    request.setRequestHeader('Content-type', "application/json;charset=UTF-8");
    request.onload = function () {

        // do something to response
        console.log(this.responseText);
        //reload the page
        location.reload();
    };
    request.send(params);
}

function modifyUser(id) {
    console.log("Modify user with id: " + id);
}

function insertUser(nome, cognome, email) {
    console.log("Insert user now: " + nome + " " + cognome + " " + email);
}
