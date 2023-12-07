async function deleteMessage(idM) {

    await fetch(`${url}/api/del/message/${idM}`, {
        method: "DELETE",
    }) .then((resp) => {
        if (resp.ok) {
            alert("Mensaje eliminado");
        } else {
            alert("Error al eliminar el mensaje")
        }
    })
};