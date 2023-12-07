messageList ();

function messageList() {

    fetch(`${url}/api/get/message`, {
        method: "GET",
    })
    .then((resp) => resp.json())
    .then((data) => {
        let message = document.getElementById("listMessage");
        data.map((item) => {
            const newMessage = document.createElement("div");
            newMessage.id = `message-${item.idM}`;
            newMessage.innerHTML =
                `<h4>ID: ${item.idM}</h4>
                <h4>
                <span class="column">Nombre: ${item.nombre}</span><br>
                <span class="column">Teléfono: ${item.telefono}</span><br>
                <span class="column">Email: ${item.email}</span><br>
                <span class="column">Mensaje: ${item.mensaje}</span><br>
                </h4>`;

                if (item.read) {
                    newMessage.classList.add("read");
                }

                const delBtn = document.createElement("button");
                delBtn.textContent = "Eliminar";
                delBtn.addEventListener("click", function () {
                    deleteMessage(item.idM)
                });

                const readBtn = document.createElement("button");
                readBtn.textContent = "Leído";
                readBtn.addEventListener("click", function () {
                    readMessage(item.idM)
                    newMessage.classList.add("read");
                });

            newMessage.appendChild(delBtn);
            newMessage.appendChild(readBtn);
            message.appendChild(newMessage);
        });
    })
    .catch((error) => {
        console.log(error);
    })
};

