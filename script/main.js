async function pokeFor(number) {
    let pokemones = [];
    for (let i = 1; i <= number; i++) {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await respuesta.json(); 
        console.log(data);
        pokemones.push(data);
    }
    renderizarPokemons(pokemones);
}

pokeFor(24);

function renderizarPokemons(pokemones) {
    let container = document.getElementById("resultado");
    let salida = "";
    for (let i = 0; i < pokemones.length; i++) {

        let columna = document.createElement("div");
        columna.className = "col-md-2";

        let div_padre = document.createElement("div");
        div_padre.className = "card my-4";
        

        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header";
        

        let imagen= document.createElement("img");
        imagen.src=pokemones[i].sprites.front_default;
        imagen.className="card-img-top"
        

        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body";

        let aHijo= document.createElement("a");
        aHijo.className= "btn btn-primary";
        aHijo.textContent="Capturar Pokemon";
        
        
        let parrafo = document.createElement("p");
        

        div_hijo1.innerHTML = `<h4> ${pokemones[i].name} </h4>`;
        div_hijo2.appendChild(parrafo);
        div_padre.appendChild(div_hijo1);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo2);
        div_hijo2.appendChild(aHijo);
        columna.appendChild(div_padre);
        resultado.appendChild(columna);
        
     
}
}















