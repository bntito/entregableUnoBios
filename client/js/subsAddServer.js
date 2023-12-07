subscriptForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    burnSubs();
});

async function burnSubs() {
    
    let email = document.getElementById("emailSub").value;

    if (!email) {
        alert("Ingrese su email");
        return;
    }

    const dataEmail = { emailSubsc: email };

    console.log(dataEmail);

    try {
        const resp = await fetch(`${url}/api/add/subscript`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataEmail),
        });

        if (resp.ok) {
            alert("Se ah suscripto con éxito");
        } else {
            alert("Error al suscribirse");
        }
    } catch (error) {
        console.log(error);
    }
};