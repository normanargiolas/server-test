const app = document.getElementById('insert_here_users');
var request = new XMLHttpRequest();
request.open('GET', 'http://192.168.20.4:3002/api/user/findAll', true);
request.onload = function () {
// Begin accessing JSON data here
    var users = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        users.forEach(user => {

            var nome = user.nome;
            var cognome = user.cognome;
            var email = user.email;
            var id = user.id;

            const html_line = `
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-sm-10">
                                <div class="row">
                                    <div class="col-sm-4">
                                        ${nome}
                                    </div>
                                    <div class="col-sm-4">
                                        ${cognome}
                                    </div>
                                    <div class="col-sm-4">
                                        ${email}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="row">
                                    <div class="col-sm-5">
                                        <button type="button" class="btn btn-primary" onclick=modifyUser("${id}")>Modifica</button> 
                                    </div>
                                    <div class="col-sm-5">
                                        <button type="button" class="btn btn-primary" onclick=deleteUser("${id}")>Cancella</button> 
                                    </div>                      
                                    <div class="col-sm-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
            `;
            app.insertAdjacentHTML("afterend", html_line);

            // const h1 = document.createElement('h1');
            // h1.textContent = user.nome;
            // app.appendChild(h1);

        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }

};
request.send();

