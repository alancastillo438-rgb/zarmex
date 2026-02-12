const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("productos.json")
  .then(res => res.json())
  .then(productos => {
    const p = productos[id];
    if (!p) {
      document.body.innerHTML = "<h2>Producto no encontrado</h2>";
      return;
    }

    document.getElementById("nombre").textContent = p.codigo;
    document.getElementById("descripcion").textContent = p.descripcion;
    document.getElementById("precio").textContent = "$" + p.precio.toLocaleString() + " MXN";
    document.getElementById("imagen").src = p.imagen;
    document.getElementById("zoom-ventana-img").src = p.imagen;

    // Badge según precio
    const badge = document.getElementById("badge");
    if (p.precio >= 2000) badge.textContent = "Gama Alta", badge.style.background = "#c0392b";
    else if (p.precio >= 1000) badge.textContent = "Gama Media", badge.style.background = "#f39c12";
    else badge.textContent = "Económico", badge.style.background = "#27ae60";
  });

// ===== ZOOM CON LUPA Y VENTANA TIPO AMAZON =====
const container = document.querySelector(".zoom-container");
const img = document.querySelector(".zoom-img");
const lupa = document.querySelector(".lupa");
const ventana = document.querySelector(".zoom-ventana img");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  img.style.transform = "scale(3)";

  lupa.style.display = "block";
  lupa.style.left = `${x - 60}px`;
  lupa.style.top = `${y - 60}px`;

  ventana.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  ventana.style.transform = "scale(3)";
  ventana.parentElement.style.display = "block";
});

container.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center center";
  lupa.style.display = "none";
  ventana.parentElement.style.display = "none";
});

// ===== MODAL CELULAR =====
const modal = document.getElementById("modalImg");
const modalImg = document.getElementById("modalImagen");
const cerrar = document.querySelector(".cerrar");

img.addEventListener("click", () => {
  if (window.innerWidth < 900) {
    modal.style.display = "block";
    modalImg.src = img.src;
  }
});

cerrar.onclick = function() {
  modal.style.display = "none";
};
