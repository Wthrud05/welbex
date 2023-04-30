import React from 'react'

const Main = () => {
  return (
    <div className="main">
      <div className="main-left">
        <h1>Зарабатывайте больше</h1>
        <span>c WELBEX</span>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className="main-right">
        <h3>
          Вместе с <span>бесплатной</span> <span>консультацией</span> &nbsp;мы дарим:
        </h3>
        <ul>
          <li>
            <span>Виджеты</span>
            <p>30 готовых решений</p>
          </li>
          <li>
            <span>Dashboard</span>
            <p>с показателями вашего бизнеса</p>
          </li>
          <li>
            <span>Skype Аудит</span>
            <p>отдела продаж и CRM системы</p>
          </li>
          <li>
            <span>35 дней</span>
            <p>использования CRM</p>
          </li>
        </ul>
        <button>Получить консультацию</button>
      </div>
    </div>
  )
}

export default Main
