const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		userDataDir: ('./user_data'),
		headless:false,
	});
	const page = await browser.newPage();
	await page.goto('https://lichess.org/analysis/r1bq3r/p1p2ppp/3b1k2/3p1P2/8/3K1Q2/PPP2PPP/RNB1R3%20b%20-%20-%203%2013#27');
	// await page.screenshot({path: 'example.png'});
	await (await page.waitForSelector('label[for=analyse-toggle-ceval]')).click();
	await wait(1500);
	const formPersonal = await page.$('.pv-san');
	await page.waitForSelector('#myId', {visible: true})
	console.log(formPersonal);
	await browser.close(); 
})();

