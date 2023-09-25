// popup.js
document.getElementById('check-button').addEventListener('click', async () => {
    const urlInput = document.getElementById('url-input');
    const resultDiv = document.getElementById('result');
    const url = urlInput.value;
    const key = 'Y7h5aNi4zDvncQVDswbQ6GdeFFe5HeTc';
    const apiUrl = `https://www.ipqualityscore.com/api/json/url/${key}/${encodeURIComponent(url)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            if (data.suspicious) {
                resultDiv.textContent = 'URL sospechosa';
            } else if (data.phishing || data.malware || data.risk_score >= 85) {
                resultDiv.textContent = 'Phishing detectado';
            } else {
                resultDiv.textContent = 'URL segura';
            }
        } else {
            resultDiv.textContent = 'Error al verificar la URL';
        }
    } catch (error) {
        console.error(error);
        resultDiv.textContent = 'Error al verificar la URL';
    }
});


