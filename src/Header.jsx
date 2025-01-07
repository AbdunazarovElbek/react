
import Nav from './Nav'
import './index.css'
function Header() {
    return (
        
        <div className="header container">
            <Nav />

            <div className='soz'>
                <h2>Добро пожаловать в</h2>
                <h1>Наш ресторан</h1>
                <div><hr/><p>ДОМ ЛУЧШЕЙ ЕДЫ</p><hr/></div>
                <button>VIEW MENU</button>
            </div>
        </div>
    )
}

export default Header