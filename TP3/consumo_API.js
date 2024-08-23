const cripto_api = async () => {
    try {
        const apiKey = 'C58BAB40-6F93-4DDA-AB91-437901062A4E'; // Agregar el APIKEY 
        const url = 'https://rest.coinapi.io/v1/exchanges';

        const respuesta = await fetch(url, {
            method: 'GET',
            headers: {
                'X-CoinAPI-Key': apiKey
            }
        });

        const datos = await respuesta.json();

        datos.forEach(consumoAPI => {
            console.log(`Nombre de la operadora: ${consumoAPI.name}, Cotizacion por hora: ${consumoAPI.volume_1hrs_usd}, Volumen por dia: ${consumoAPI.volume_1day_usd}`);
        });

    } catch (error) {
        console.log('Error:', error);
    }
}

cripto_api();