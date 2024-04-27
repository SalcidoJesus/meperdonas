
var i = 0

const frases = [
	"no >:c",
	"es enserio? :c",
	":') de verdad?",
	"estás segura?",
	"completamente segura?",
	"segura segura?",
	"por favor?",
	"por favor por favor?",
	":c ándale amorcito",
];


function perdonar() {
	const coso = document.querySelector('#coso');
	coso.innerHTML = `<img src="98948c6cdab2d4120d48a8f3f38edebd.gif"/>`
}

function noPerdonar() {
	const botonPerdonar = document.querySelector('.perdonar');
	const botonNoPerdonar = document.querySelector('.noPerdonar');
	botonPerdonar.style.fontSize =
		parseInt(getComputedStyle(botonPerdonar).fontSize) + 10 + 'px';
	botonPerdonar.style.transform = "scale(" + (parseFloat(getComputedStyle(botonPerdonar).transform.slice(7,-1)) + 0.1) + ")";
	if (frases[i]) {
		botonNoPerdonar.innerHTML = frases[i]
	}
	i++

}


