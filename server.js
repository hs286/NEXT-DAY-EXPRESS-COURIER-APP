const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/shipment', (req, res) => {
    const shipmentData = {
        shipmentId: "001",
        status: "In Transit",
        estimatedDelivery: "2024-05-10",
        origin: "London",
        destination: "Manchester"
    };
    res.json(shipmentData);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
