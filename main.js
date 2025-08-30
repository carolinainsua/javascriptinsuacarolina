document.addEventListener("DOMContentLoaded", () => {
 
  // Calculadora Presupuesto
  const formPresupuesto = document.querySelector(".input-presupuesto");
  const resultadoPresupuesto = document.getElementById("resultado-presupuesto");

  formPresupuesto.addEventListener("submit", (e) => {
    e.preventDefault();

    const presupuesto = parseFloat(document.getElementById("presupuesto-mesual").value);
    const dias = parseFloat(document.getElementById("cuantos-dias").value);

    if (isNaN(presupuesto) || isNaN(dias) || dias <= 0) {
      resultadoPresupuesto.innerHTML = `<p style="color:red">Por favor ingresa valores válidos.</p>`;
      return;
    }

    const presupuestoMeta = presupuesto / 1.6;
    const presupuestoPorDia = presupuesto / dias;
    const presupuestoPorDiaMeta = presupuestoPorDia / 1.6;

    resultadoPresupuesto.innerHTML = `
      <p>Para no exceder tu Presupuesto de <strong>$${presupuesto.toFixed(2)}</strong>, deberías establecer como tope en Meta: <strong>$${presupuestoMeta.toFixed(2)}</strong></p>
      <p>Tu presupuesto por día sería: <strong>$${presupuestoPorDia.toFixed(2)}</strong>, aunque en Meta figuraría <strong>$${presupuestoPorDiaMeta.toFixed(2)}</strong></p>
    `;
  });

 //Anuncios Previos, analisis y actualización del promedio
  const formLast = document.querySelector(".input-datos-lastanuncio");
  const resultadoCalidad = document.getElementById("resultado-calidad-anuncio");

  function mostrarAnuncios() {
    const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
    let html = "";
    let totalPrecioPorAlcance = 0;
    let totalPrecioPorClic = 0;

    anuncios.forEach((a, index) => {
      html += `
        <div style="border:1px solid #ccc; padding:5px; margin-bottom:5px;">
          <p><strong>${index + 1}. ${a.nombre}</strong> (${a.fecha})</p>
          <p>Meta: $${a.gasto.toFixed(2)}, Alcance: ${a.alcance}, Clics: ${a.clics}</p>
          <p>Precio por alcance: $${a.precioPorAlcance.toFixed(2)}, Precio por clic: $${a.precioPorClic.toFixed(2)}</p>
          <p><strong>${a.calidad}</strong></p>
        </div>
      `;

      totalPrecioPorAlcance += a.precioPorAlcance;
      totalPrecioPorClic += a.precioPorClic;
    });

    const numAnuncios = anuncios.length;
    if (numAnuncios > 0) {
      const promedioAlcance = totalPrecioPorAlcance / numAnuncios;
      const promedioClic = totalPrecioPorClic / numAnuncios;
      html += `
        <div style="border-top:2px solid #000; padding-top:5px; margin-top:10px;">
          <p><strong>Promedios Meta hasta ahora:</strong></p>
          <p>Precio promedio por alcance: $${promedioAlcance.toFixed(2)}</p>
          <p>Precio promedio por clic: $${promedioClic.toFixed(2)}</p>
        </div>
      `;
    }

    resultadoCalidad.innerHTML = html;
  }

  mostrarAnuncios();

  formLast.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre-anuncio").value.trim();
    const fecha = document.getElementBy
  })})