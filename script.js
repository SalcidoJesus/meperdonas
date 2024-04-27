
var i = 0

const frases = [
	"no >:c",
	"por favor :c",
	":') segura?",
	":\\/ ¿estás seguro?",
	":S ¿de verdad?",
	":c ¿estás segura?",
	":'( ¿te arrepentiste?",
	":\\/ ¿lo pensaste mejor?",
];


function perdonar() {
	alert("Perdóname, te diste cuenta de mi error. 😔");
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


