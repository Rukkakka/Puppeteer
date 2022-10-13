async function Click(xpath) {
    
    await page.waitForXPath(xpath)
    s = await page.$x(xpath)
    s = s[0]
    await s.click()

    }

async function Key(xpath,text) {

    await page.waitForXPath(xpath)
    s = await page.$x(xpath)
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