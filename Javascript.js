let datosPersonales = document.querySelector("#datos_personales");

datosPersonales.addEventListener("click", menu);
function menu() {
	datosPersonales.classList.toggle("datos_personales_show");
}
