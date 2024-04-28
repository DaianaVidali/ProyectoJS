const carrito = [];

const producto = [
        {
            nombre: "Remera Giddy Up",
            precio: 18000,
            img:"./img/remera1.webp",
            id:"remera",
        },
        {
            nombre: "Remera Leopard",
            precio: 16000,
            img: "./img/remera13.webp ",
            id:"remera",
        },
        {
            nombre: "Remera Stardust",
            precio: 22000,
            img:"./img/remera12.webp ",
           id:"remera",
        },
        {
            nombre: "Sweater Believe",
            precio: 44000,
            img: "./img/sweater.webp",
            id:"sweater",
        },
        {
            nombre: "Sweater Wonder",
            precio: 40000,
            img:"./img/sweater2.webp",
            id:"sweater",
        },
        {
            nombre:"Sweater My Heart",
            precio: 42000,
            img: "./img/sweater3.webp",
            id:"sweater",
        },
       



 ]


 const indumentaria = document.querySelector(".contenedor-productos");
 let total = 0;
 const totalDisplay = document.querySelector("#total p");

 function agregarAlCarrito(nombreProducto, precioProducto) {
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


   function subirProductos() {
         
    producto.forEach(productos =>{
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
        boton.setAttribute("data-precio", productos.precio);
        boton.setAttribute("data-nombre", productos.nombre);

        boton.addEventListener("click",(event)=>{
            const nombreProducto = event.target.getAttribute("data-nombre");
            const precioProducto = parseInt(event.target.getAttribute("data-precio"));
                total += precioProducto;
                totalDisplay.textContent= `Su total es de: $${total}`;
                agregarAlCarrito(nombreProducto, precioProducto);
        })
        div.append(boton);

       

      indumentaria.append(div);
    });

  

}
    
   
   subirProductos();
