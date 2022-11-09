const { createClient } = require('redis');

async function optRedis() {
    const client = createClient();

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    await client.set('ddshuai1', 'email11',{
        EX: 7200
    });
    const value = await client.get('ddshuai1');
    console.log(value);

    await client.del('ddshuai1');
    await client.disconnect();
}

optRedis().then(res => {

})