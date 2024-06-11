document.getElementById('tracking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const shipmentId = document.getElementById('shipment-id').value;

    fetch(`/api/shipment?id=${shipmentId}`)
        .then(response => response.json())
        .then(data => {
            const detailsDiv = document.getElementById('shipment-details');
            detailsDiv.innerHTML = `
                <h3>Shipment Details</h3>
                <p><strong>Shipment ID:</strong> ${data.shipmentId}</p>
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Estimated Delivery:</strong> ${data.estimatedDelivery}</p>
                <p><strong>Origin:</strong> ${data.origin}</p>
                <p><strong>Destination:</strong> ${data.destination}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching shipment data:', error);
            const detailsDiv = document.getElementById('shipment-details');
            detailsDiv.innerHTML = `<p class="text-danger">Error fetching shipment data. Please try again later.</p>`;
        });
});
