app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Vía Segura</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #fdfdfd; color: #333; }
          footer { margin-top: 40px; border-top: 1px solid #ccc; padding-top: 10px; }
        </style>
      </head>
      <body>
        <h1>API Vía Segura</h1>

        <p>Esta API proporciona información colaborativa en tiempo real sobre:</p>
        <ul>
          <li><strong>Calles sin iluminación</strong> o con problemas de visibilidad.</li>
          <li><strong>Zonas inseguras</strong> reportadas por la comunidad.</li>
          <li><strong>Rutas alternativas</strong> más seguras para desplazarse.</li>
          <li><strong>Alertas vecinales</strong> compartidas por la red de usuarios.</li>
        </ul>

        <h3>¿Qué resolvemos?</h3>
        <p>Combatimos la inseguridad y la desinformación en la vía pública, ayudando a las personas a desplazarse con mayor tranquilidad.</p>

        <h3>Endpoints disponibles:</h3>
        <ul>
          <li><a href="/api/consejos">/api/consejos</a> - Consejos y recomendaciones de seguridad.</li>
          <li><a href="/api/reportes">/api/reportes</a> - Reportes de calles oscuras, zonas inseguras, etc.</li>
        </ul>

        <footer>
          <p><strong>Nombre y Apellido:</strong> Tatiana Ramirez</p>
          <p><strong>Materia:</strong> Aplicaciones Híbridas 3</p>
          <p><strong>Docente:</strong> Prof. [Nombre del docente]</p>
          <p><strong>Comisión:</strong> [Tu comisión]</p>
        </footer>
      </body>
    </html>
  `);
});