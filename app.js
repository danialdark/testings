


const axios = require('axios');

const apiUrl = 'https://rahavard365.com/api/accounts/username';
const requestData = { username: 'test' };

const requestHeaders = {
    'Cookie': '_hjSessionUser_3248306=eyJpZCI6IjA1NWUyYTg5LWNjNWMtNTkzNy05MWZjLTkxYTZiYjM3MDA0NiIsImNyZWF0ZWQiOjE2OTk3ODEyNzEyNjcsImV4aXN0aW5nIjp0cnVlfQ==; Authorization=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDA0NjYxNzAsImp0aSI6IjM1MDgxM2Y4ZmZmYzRhZjU5NmI5MmZiZWI3ZjNjYTg4Iiwic3ViIjoiMTcyNTQ5MCIsIm5iZiI6MTcwMDQ2NjE3MCwiZXhwIjoxNzA4MjQyMTcwLCJpc3MiOiJjb20ubWFibmFkcC5hcGkucmFoYXZhcmQzNjUudjEifQ.ryiGpKsMJ8xKUEtTuc0N374mKYSQnzwj2YrxowjijfuJT1Ct7Ss_tIE_giLtzuPP8lPrfGD3kpXU9u_TNdi61aId04qlMpT_zX2bVaWcbT6pyF-FPwP6CIg9B8YjunZWPUIym1Ufo72wXwKp89wkdcRwDrqXpArNzkLOBKwWhG9-h3m_qm-QuSfBJT2j9PN9PxHQ0r9UI-kPBbIQpQVu5HJIADRyPv_a9pzB2BgqhOjHbfKAyt4wyIimtKPy50ZGuHSwHzf-QXSbBlGAX8Az1NPx4iZ9KxgbuEtjhIX-hNM9sHOuMunUbmSh6xNB0-gw24cmpE5VBGyvK4cKJragfA; pro.package.state.1725490=false; pro.package.alert.1725490=false; pro.package.alert.duration.1725490=0; pro.package.tier.1725490=free; __RequestVerificationToken=A62O_OAmdxXt2n5zHuVj_gIZPGEfVeMkGlLu3LisXqImzX5mlpY8x8g0ekkzM2wTWIJ9gHS1lotKjAJEZZbuG36qyd01; _gid=GA1.2.1968817739.1700765729; _clck=lp7qkq%7C2%7Cfgy%7C0%7C1411; _hjIncludedInSessionSample_3248306=0; _hjSession_3248306=eyJpZCI6ImViNGEzZjQzLWY0OWUtNGFiMC1iMTc3LTU2YTUyMGFhNzU5NiIsImNyZWF0ZWQiOjE3MDA3NjU3MzM5MjAsImluU2FtcGxlIjpmYWxzZSwic2Vzc2lvbml6ZXJCZXRhRW5hYmxlZCI6ZmFsc2V9; _hjAbsoluteSessionInProgress=1; _ga=GA1.1.1043834245.1699781271; _ga_B3SWYGW030=GS1.1.1700765730.4.1.1700766277.60.0.0;',
    'Content-Length': 16,
    'Accept': "*/*",
    'Accept-Encoding': "gzip, deflate, br",
    'Connection': "keep-alive",
    'User-Agent': "PostmanRuntime/7.35.0"
};

async function test() {
    try {
        const response = await axios.post(apiUrl, requestData, { headers: requestHeaders });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to send 1000 requests per second
function sendRequests() {
    const numberOfRequests = 1000;

    // Use Promise.all to concurrently send requests
    const promises = Array.from({ length: numberOfRequests }, () => test());

    // Log when all requests are completed
    Promise.all(promises)
        .then(() => console.log('All requests completed in this second.'))
        .catch(error => console.error('Error:', error));
}

// Start sending requests every second
setInterval(sendRequests, 1000);




