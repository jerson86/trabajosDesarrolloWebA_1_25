 const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price: 1505000, image: "https://wallpapers.com/images/hd/laptop-pictures-2l1fs0hwq4c9obgx.jpg" },
    { titulo: "Mouse", desc: "Inalámbrico", price: 100000, image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg" },
    { titulo: "RAM", desc: "8GB", price: 55000, image: "https://http2.mlstatic.com/D_NQ_NP_783863-MCO84207717037_042025-O.webp" },
    { titulo: "SSD", desc: "128 GB", price: 150000, image: "https://acf.geeknetic.es/imgri/imagenes/tutoriales/definiciones/2020/4/SSD-i8kf.jpg" },
    { titulo: "Teclado", desc: "Mecánico", price: 250000, image: "https://cnnespanol.cnn.com/wp-content/uploads/2021/07/teclado-mecanico-gamer-2.png?w=460&h=260&crop=1" }
];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector("img").src = p.image;
    clon.querySelector("img").title = p.desc;
    clon.querySelector(".price").textContent = p.price.toLocaleString("Es-Co");
    contenedor.appendChild(clon);
  });
