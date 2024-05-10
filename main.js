const carrito = [];

let producto = []



 fetch("/data/productos.json")
    .then(res => res.json())
    .then(data =>{data.forEach(productos =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="imagen" src="${productos.img}" alt="${productos.nombre}">
        <div class="descripcion">
            <h4 class="producto-nombre">${productos.nombre}</h4>
            <p class="producto-precio">$${productos.precio}</p>
            
        
        
        `;
        const boton = document.createElement("button");
        boton.classList.add("producto-boton");
        boton.innerText ="Agregar al carrito";
        boton.setAttribute("info-precio", productos.precio);
        boton.setAttribute("info-nombre", productos.nombre);

        boton.addEventListener("click",(event)=>{
            const nombreProducto = event.target.getAttribute("info-nombre");
            const precioProducto = parseInt(event.target.getAttribute("info-precio"));
                total += precioProducto;
                totalFinal.textContent= `Su total es de: $${total}`;
                agregarAlCarrito(nombreProducto, precioProducto);
        })

        div.append(boton);

       

      indumentaria.append(div);
    });

    })


 const indumentaria = document.querySelector(".contenedor-productos");
 let total = 0;
 const totalFinal = document.querySelector("#total p");

 function agregarAlCarrito(nombreProducto, precioProducto) {
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


 
   Swal.fire("¡Esperamos que tengas una excelente experiencia!");

   
