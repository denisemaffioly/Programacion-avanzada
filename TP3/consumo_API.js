const cripto_api = async () => {
    try {
        const apiKey = ' '; // Agregar el APIKEY 
        const url = 'https://rest.coinapi.io/v1/exchanges';

        const respuesta = await fetch(url, {
            method: 'GET',
            headers: {
                'X-CoinAPI-Key': apiKey
            }
        });

        const datos = await respuesta.json();

        datos.forEach(consumoAPI => {
            console.log(`Nombre: ${consumoAPI.name}, Volumen 1hr: ${consumoAPI.volume_1hrs_usd}, Volumen 1día: ${consumoAPI.volume_1day_usd}`);
        });

    } catch (error) {
        console.log('Error:', error);
    }
}

cripto_api();
