  setTimeout(() => {
    document.querySelectorAll('.oculto').forEach(el => {
      el.classList.remove('oculto');
    });
  }, 2100);
document.addEventListener("DOMContentLoaded", () => {
  const fichas = [...document.querySelectorAll("#contenedor-juegos .juegos")];
  const porPagina = 6;
  const totalPaginas = Math.ceil(fichas.length / porPagina);
  const paginador = document.getElementById("paginador");
  const mostrar = (pagina) => {
    fichas.forEach((f, i) => {
      f.style.display = (i >= (pagina-1)*porPagina && i < pagina*porPagina) ? "inline-block" : "none";
    });
  };
  for (let i = 1; i <= totalPaginas; i++) {
    let pasar = document.createElement("button");
    pasar.textContent = i;
    pasar.onclick = () => mostrar(i);
    paginador.appendChild(pasar);
  }
  mostrar(1); 
});
