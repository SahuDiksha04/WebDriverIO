describe("scroll into  ", async ()=>{


    it(" ", async ()=>{
      await browser.maximizeWindow()
      await browser.url("https://www.icc-cricket.com/rankings/mens/player-rankings/t20i")
     //  await  browser.scroll(1000,1000)
      await browser.$(`//div[.="Dawid Malan"]`).scrollIntoView()
     })
})
 
 
 
 