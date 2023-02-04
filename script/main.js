

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
        
        let parrafo = document.createElement("p");
        
        div_hijo1.innerHTML = `<h4> ${pokemones[i].name} </h4>`;
        div_hijo2.appendChild(parrafo);
        div_padre.appendChild(div_hijo1);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo2);
        columna.appendChild(div_padre);
        resultado.appendChild(columna);
        
     
}
}



function mostrar() {
    let input1 = document.getElementById("input1").value;
    let inputPass = document.getElementById("inputPass").value;

    if (input1 === "") {

        Swal.fire({
            title: 'Error',
            text: 'Por favor complete el formulario',
            icon: 'error'
          });
      
    }

    else{

        Swal.fire(
            'Enviado!',
            'Sus datos han sido registrados!',
            'success'
          )

    }
  
    let arrayInput = JSON.parse(localStorage.getItem("inputArray")) || [];
    if (arrayInput.indexOf(input1) === -1 ) {
        arrayInput.push(input1);
      }
      localStorage.setItem("inputArray", JSON.stringify(arrayInput));

    let arrayPass = JSON.parse(localStorage.getItem("arrayPass")) || [];
    if (arrayPass.indexOf(inputPass) === -1 ) {
        arrayPass.push(inputPass);
      }
      localStorage.setItem("arrayPass", JSON.stringify(arrayPass));


  }
  
  let boton1 = document.getElementById("boton1");
  boton1.addEventListener("click", mostrar);
















