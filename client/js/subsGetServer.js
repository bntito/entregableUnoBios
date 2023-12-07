subscriptList ();

function subscriptList () {

    fetch(`${url}/api/get/subscript`, {
        method: "GET",
    })
    .then((resp) => resp.json())
    .then((data) => {
        let subscript = document.getElementById("listSubscript");
        data.map((item) => {
            const newSubscript = document.createElement("div");
            newSubscript.innerHTML =
            `<h4>ID: ${item.idS}<h4>
            <h4>
            <span class="column">Email: ${item.email}</span>
            </h4><br>`
            subscript.appendChild(newSubscript);
        });
    })
    .catch((error) => {
        console.log(error);
    })
};
