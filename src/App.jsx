import { useState } from 'react'



function App() {

  return (
    <div>
      <header>
        <a href="homepage.html"><img className="logo" src="image/logo.png"/></a>
        <nav className="nav">
          <div className="nav_items">
            <a href="homepage.html">About</a>
            <div className="v-line"></div>
            <a href="eventpage.html">Event</a>
            <div className="v-line"></div>
            <a href="develop.html">Contact</a>
            <div className="v-line"></div>
            <a href="develop.html">Latest</a>
          </div>
          <div className="button">
            <a href="login02.html" className="button_items">Login</a>
            <a href="login02.html" className="button_items">Sign up</a>
          </div>
        </nav>
      </header>
      <div>
        <img className="banner" src="image/banner.png"/>
        <p clasclassNames="event_title">112年資訊月「臺灣教育科技展」活動訊息 </p>
        <div className="event">
          <div className="event_leftbox">
            <div className="icon_list">
              <img className="icon" src="image/icon_time.png"/>
              <img className="icon" src="image/icon_map.png"/>
              <img className="icon" src="image/icon_save.png"/>
              <img className="icon" src="image/icon_search.png"/>
            </div>
            <div className="event_info_list">
              <p className="event_info">112年11月9日(星期四)至11月12日(星期日)</p>
              <p className="event_info">台北世貿一館(信義路五段五號)</p>
              <p className="event_info">免費參觀</p>
              <a className="event_info" href="https://www.edtech.tw/about-edtechtw">臺灣教育科技展 | 臺灣教育科技展 EdTechTW </a>
            </div>
          </div>
          <div className="event_rightbox">
            <div className="signup_box">
              <a className="signup_a" >立即報名</a>
              </div>
                <div claclassNamess="signup_icongroup">
                  <img className="icon" src="image/icon_love.png"/>
                  <img className="icon" src="image/icon_fb.png"/>
                  <img className="icon" src="image/icon_ig.png"/>
                </div>
              </div>
            </div>
            <div className="event_detail">
              <p className="event_detail_topic">活動資訊：</p>
              <hr></hr>
              <p className="event_detail_text">
                為教育而科技｜全臺最大 EdTech媒合平台
                <br></br><br></br>
                TCA沉澱累積數十年的產業聲量與經驗，
                於2018年開始，定期舉辦【臺灣教育科技展 EdTech Taiwan】，並設定「為教育而科技」為展覽核心價值，
                號召教育科技業者及教育工作者一起交流，探討科技能為教育帶來的幫助。
                <br></br><br></br>
                我們希望透過匯聚與教育相關的軟體、硬體、整合應用等團隊，提供最大型、最多元探討教育的交流平台，
                將臺灣各界教育能量集結，為教育工作者最佳解決方案。
                目前已累計300家廠商參與，每年皆能吸引近萬名教育工作者蒞臨，是臺灣最具指標性的教育科技盛會。
                <br></br><br></br>
                臺灣教育科技展官網、Facebook 以及 EdTech INDEX 將不斷更新教育科技活動資訊，
                並提供教師與企業更多教育科技資訊、媒合小聚、研習會及展覽的最新動態，邀請您持續追蹤關注！
              </p>
            </div>
          </div>
          <footer>
            <p className="footer_p">Designed by tzuyun , enya.</p>
          </footer>

    </div>

  )
}

export default App

