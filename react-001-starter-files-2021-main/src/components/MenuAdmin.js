import React from 'react'
import AddBurgerForm from './AddBurgerForm'

class MenuAdmin extends React.Component {

    render() {
        return(
            <div className='menu-admin'>
                <h2>בקרת תפריט</h2>
                {/* ИЗ APP в MenuAdmin и сюда, притаскиваем addBurger*/}
                <AddBurgerForm addBurger={this.props.addBurger} />
            </div>
        )
    }
}

export default MenuAdmin