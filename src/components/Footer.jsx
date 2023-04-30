import React from 'react'
import telegram from '../assets/images/telegram.svg'
import viber from '../assets/images/viber.svg'
import whatsapp from '../assets/images/whatsapp.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <h5>О компании</h5>
        <ul>
          <li>Партнёрская программа</li>
          <li>Вакансии</li>
        </ul>
      </div>
      <div className="menu">
        <h5>Меню</h5>
        <div className="menu-lists">
          <ul>
            <li>Расчёт стоимости</li>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграции</li>
            <li>Наши клиенты</li>
          </ul>
          <ul>
            <li>Кейсы</li>
            <li>Благодарственные письма</li>
            <li>Сертификаты</li>
            <li>Блог на Youtube</li>
            <li>Вопрос / Ответ </li>
          </ul>
        </div>
      </div>
      <div className="contacts">
        <h5>Контакты</h5>
        <ul>
          <li>
            <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
          </li>
          <li>
            <ul className="social">
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
          </li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
