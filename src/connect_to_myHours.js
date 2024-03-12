const connectToMyHours = async (page, email, password) => {
    await page.goto('https://app.myhours.com/#/signin');
    await page.screenshot({path: '01_arrived.png'});

    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.screenshot({path: '02_email_password.png'});

    
    // Remplacez 'submitSelector' par le vrai sélecteur
    // await page.click('submitSelector');
    // await page.click('button:text("Sign in")');
    await page.click('//*[@id="AppWrapper"]/div[1]/div/div/div/form/div[5]/button');
    await page.screenshot({path: '03_enter_user_password_SignIn.png'});

    // await new Promise(resolve => setTimeout(resolve, 5 * 1000));
    // await page.screenshot({path: '04_5_sec_after.png'});

    // Attend que le texte "Today, " apparaisse dans un élément span
    await page.waitForSelector('span:text("Today, ")');

    await page.screenshot({path: '05_today.png'});
};

module.exports = connectToMyHours;