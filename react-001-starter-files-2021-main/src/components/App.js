import React from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'


class App extends React.Component {

    // именно сдесь будем храню все бургеры (главный комп) чтобы юзать везде!
    state = {
        burgers: {},
        order: {}
    }

    addBurger = (burger) => {
        console.log('addBurger', burger);
        // 1. Делаем копию объекта state
        const burgers = { ...this.state.burgers}

        // 2. Add new burger to burgers 
        burgers[`burger${Date.now()}`] = burger

        // New burgers object save to state
        this.setState({burgers})
    }

    render() {
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="HOT BURGERS" />
                    {/* <Burger /> */}
                </div>
                <Order />
                {/* передаем addBurger в дочерний класс */}
                <MenuAdmin addBurger={this.addBurger} />
            </div>
        )
    }
}

export default App