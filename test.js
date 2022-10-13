
const puppeteer = require('puppeteer');

(async () => 
{

    const browser = await puppeteer.launch({
        headless : false,
        args: ['--window-size = 2560,1440'],
        slowMo : 30,
    })

    const page = await browser.newPage();

    await page.setViewport({

        width : 2560,  // 페이지 너비
        height : 1440   // 페이지 높이
    });

    function sleep(ms){
        const wakeupTime = Date.now() + ms;
        while (Date.now() < wakeupTime) {}
    }

    async function Click(xpath) {
    
        await page.waitForXPath(xpath)
        s = await page.$x(xpath)
        s = s[0]
        await s.click()

        }
    
    async function Key(xpath,text) {

        await page.waitForXPath(xpath)
        s = await page.$x(xpath)
        s = await page.$eval('#id', el => el,valuse = )
        s = s[0]
        await s.type(text)

        }

    async function popupClose() {

        let tabs = await browser.pages();//첫 번째 탭
        tabs = tabs.length

        if (tabs > 2) {

            for (let i = tabs; i > 2; i--) {
                await browser.pages()[i],close();
            }
        }

    };

    async function popupControl() {

        let tabs = await browser.pages();//첫 번째 탭
        tabs = tabs.length

        await browser.pages()[tabs];
      

        await page.bringToFront(); // 탭 전환

        

    };

    await Promise.all([
        page.goto('http://m-dev.gmarket.co.kr/'),
        page.waitForNavigation(),

    ])

    Click('//*[@id="__next"]/div/header/div/div[2]/p/span/a');
    sleep(3000);
    
    Key('//*[@id="id"]','sejong147');
    sleep(1000);

    Key('//*[@id="pwd"]','test1004');
    sleep(1000);

    Click('//*[@id="btnLogin"]');
    await page.waitForTimeout(3000);
    
    page.goto('http://mitem-dev.gmarket.co.kr/Item?goodsCode=1100310534')
    await page.waitForTimeout(5000);

    Click('//*[@id="vipOptionArea"]/div[1]/div/div[3]/span[1]/a')




})();




// const puppeteer = require( "puppeteer" );



// puppeteer.launch({

// 	headless : false

// }).then(async browser => {



// 	const page = await browser.newPage();

// 	await page.goto( "https://weather.naver.com/", { waitUntil : "networkidle2" } );



// 	page.waitForNavigation( ),	// 해당 페이지의 탐색이 완료되면 클릭 이벤트를 실행

// 	page.click( "div.weather_info > div.w_map > ul.tab > li:nth-child(4) > a" );	// 클릭이벤트를 실행

// });