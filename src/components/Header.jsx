import React from 'react'
import logo from '../assets/images/logo_welbex.png'
import telegram from '../assets/images/telegram.svg'
import viber from '../assets/images/viber.svg'
import whatsapp from '../assets/images/whatsapp.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
        <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
      </div>
      <nav className="nav">
        <ul>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </nav>
      <div className="contacts">
        <ul>
          <li>
            <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
          </li>
          <li>
            <a href="https://web.telegram.org" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a href="https://www.viber.com" target="_blank">
              <img src={viber} alt="viber" />
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com" target="_blank">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
