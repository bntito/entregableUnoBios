messageForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    burnMsg();
});

async function burnMsg() {
    let nombre = document.getElementById("name").value;
    let telefono = parseInt(document.getElementById("tel").value);
    let correo = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !mensaje) {
        alert("Campos requeridos faltantes");
        return;
    }

    const data = { nombre, telefono, correo, mensaje, };
    console.log(data);
    
    try {
        const resp = await fetch(`${url}/api/add/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (resp.ok) {
            alert("Su mensaje ha sido enviado");
        } else {
            alert("Error al enviar el mensaje");
        }
    } catch (error) {
        console.log(error);
        alert("Error en la solicitud")
    }
};