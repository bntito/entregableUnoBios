function readMessage(idM) {
    fetch(`${url}/api/read/message/${idM}`, {
        method: "PUT",
    })
    .then((resp) => resp.json())
    .then((data) => {
        if (data.exito) {
            console.log("Mensaje marcado como leído");
        } else {
            console.log("Error al marcar el mensaje como leído");
        }
    })
    .catch((error) => {
        console.log(error)
    });
}