fetch("productos.json")
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById("catalogo");
    contenedor.innerHTML = "";

    productos.forEach((p, index) => {

      // Badge automático según precio
      let badge = "";
      if (p.precio >= 40000) {
        badge = "Alta Gama";
      } else if (p.precio >= 20000) {
        badge = "Profesional";
      } else {
        badge = "Clínico";
      }

      contenedor.innerHTML += `
        <a href="producto.html?id=${index}" class="card">

          <div class="badge">${badge}</div>

          <div class="img-container">
            <img src="${p.imagen}" alt="${p.codigo}">
          </div>

          <div class="card-content">
            <span class="categoria">${p.categoria}</span>

            <h3>${p.codigo}</h3>

            <p>${p.descripcion}</p>

            <div class="precio">
              $${p.precio.toLocaleString()} MXN
            </div>

            <div class="beneficios">
              <span>✔ Garantía incluida</span>
              <span>✔ Envíos nacionales</span>
            </div>

            <div class="btn-card">
              Ver producto
            </div>
          </div>

        </a>
      `;
    });
  });
