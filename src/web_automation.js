const { chromium } = require('playwright');

async function run(email, password) {
    const connectToMyHours = require('./connect_to_myHours.js');

    try {
        const browser = await chromium.launch();
        console.log('Browser has been launched');
    
        const page = await browser.newPage();
        // await page.screenshot({path: '00_browser_open.png'});
        await connectToMyHours(page, email, password);
        // await page.screenshot({path: '10_browser_close.png'});
        await browser.close();
    } catch (error) {
        console.error('Error launching browser:', error);
    }
}

// Remplacez 'yourEmail' et 'yourPassword' par vos vraies informations de connexion
// run('yourEmail', 'yourPassword');
run(process.argv[2], process.argv[3]);