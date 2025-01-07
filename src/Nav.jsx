import img from './assets/image.png'
import "./index.css"
function Nav() {
    return (
        <div className='navbar container'>
            <img src={img} alt="" />
            <div className='link'>
                <a href="">ГЛАВНАЯ</a>
                <a href="">МЕНЮ</a>
                <a href="">О НАС</a>
                <a href="">БРОНЬ</a>
                <hr />
                <div>
                    
                    <h4>+999-888-76-54</h4>
                    <p>Свяжитесь с нами для <br />
                        бронирования</p>
                </div>
                <button>ЗАКАЗ СТОЛИКА</button>
            </div>
        </div>
    )
}
export default Nav