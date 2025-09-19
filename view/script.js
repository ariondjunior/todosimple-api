const url = "http://localhost:8080/task/user/1";

function hideLoeader() {
    document.getElementById("loading").style.display = "none";
}

function show(tasks) {
    let tab = `<thead>
                    <th scope="col">#<th>
                    <th scope="col">Description<th>
                    <th scope="col">Username<th>
                    <th scope="col">User Id<th>
                </thead>`;

    for (let task of tasks) {
        tab += `
            <tr>
                <td scope="row">${task.id}<td>
                <td>${task.description}<td>
                <td>${task.user.username}<td>
                <td>${task.user.id}<td>
            </tr>
        `
    }

    document.getElementById("tasks").innerHTML = tab;
}


async function getAPI(url) {
    try {
        const response = await fetch(url, {method: "GET"});
        var data = await response.json();
        console.log(data);
        show(data);
    } catch (err) {
        console.error('Erro ao buscar API:', err);
        // opcional: mostrar mensagem ao usuário
        document.getElementById('tasks').innerHTML = '<tr><td colspan="5">Erro ao carregar tarefas</td></tr>';
    } finally {
        // garante que o loader seja escondido
        if(document.getElementById('loading')) { hideLoeader(); }
    }
}

getAPI(url);