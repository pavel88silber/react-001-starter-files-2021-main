import React from 'react'
import AddBurgerForm from './AddBurgerForm'
import EditBurgerForm from './EditBurgerForm'

class MenuAdmin extends React.Component {

    render() {
        return(
            <div className='menu-admin'>
                <h2>בקרת תפריט</h2>

                {Object.keys(this.props.burgers).map(key => {
                    return <EditBurgerForm 
                        key={key} 
                        index={key}
                        burger={this.props.burgers[key]} 
                        updateBurger={this.props.updateBurger}
                        deleteBurger={this.props.deleteBurger}
                    />
                })}

                {/* ИЗ APP в MenuAdmin и сюда, притаскиваем addBurger*/}
                <AddBurgerForm addBurger={this.props.addBurger} />
                <button onClick={this.props.loadSampleBurgers}>לעלות לתפריט</button>
            </div>
        )
    }
}

export default MenuAdmin