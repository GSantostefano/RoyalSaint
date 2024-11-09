const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Lista blanca para CORS
const whitelist = [
  'http://localhost:8080',
  'https://myapp.co',
  'http://localhost:5173',
  'http://localhost:5174',
  'https://royal-saint.vercel.app',  // Sin la barra final
  /\.vercel\.app$/,  // Expresión regular para aceptar cualquier subdominio de Vercel
  'https://royalsaint.onrender.com'  // Dominio de tu API
];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true); // Permite el origen
    } else {
      callback(new Error('no permitido')); // Deniega el origen
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

// Habilitar CORS con las opciones definidas
app.use(cors(options));

// Rutas básicas
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Configurar rutas API
routerApi(app);

// Manejo de errores
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
  console.log('\x1b[34mMi port:\x1b[0m \x1b[32m' + port + '\x1b[0m');
});
