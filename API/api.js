const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/service-1', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-1-service/service-1');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del microservicio 1:', error);
        res.status(500).json({ error: 'Error al obtener datos del microservicio 1' });
    }
});

app.get('/service-2', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-2-service/service-2');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del microservicio 2:', error);
        res.status(500).json({ error: 'Error al obtener datos del microservicio 2' });
    }
});

app.get('/service-3', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-3-service/service-3');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del microservicio 3:', error);
        res.status(500).json({ error: 'Error al obtener datos del microservicio 3' });
    }
});

app.get('/service-4', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-4-service/service-4');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del microservicio 4:', error);
        res.status(500).json({ error: 'Error al obtener datos del microservicio 4' });
    }
});

app.get('/service-5', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-5-service/service-5');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del microservicio 5:', error);
        res.status(500).json({ error: 'Error al obtener datos del microservicio 5' });
    }
});

app.get('/service-6', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-6-service/service-6');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del microservicio 6:', error);
        res.status(500).json({ error: 'Error al obtener datos del microservicio 6' });
    }
});

app.get('/servicio-prueba', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-prueba-service/servicio-prueba');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del microservicio prueba:', error);
        res.status(500).json({ error: 'Error al obtener datos del microservicio prueba' });
    }
});

// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});