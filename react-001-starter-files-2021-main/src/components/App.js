import React from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import Burger from './Burger'
import sampleBurgers from '../sample-burgers'


class App extends React.Component {

    // именно сдесь будем храню все бургеры (главный комп) чтобы юзать везде!
    state = {
        burgers: {},
        order: {}
    }

    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers})
    }

    addToOrder = (key) => {
        // * Никогда не взаимодействуем на прямую с объектом (делаем его купию)
        // 1. Делаем копию объекта state
        const order = {...this.state.order}
        // 2. Добавить ключ к заказу со знач. 1 либо обновить текущ. знач.
        order[key] = order[key] + 1 || 1;
        // 3. New order object save to state object
        // this.setState({order: order})
        this.setState({order})
    };


    addBurger = (burger) => {
        
        // * Никогда не взаимодействуем на прямую с объектом (делаем его купию)
        // 1. Делаем копию объекта state
        const burgers = { ...this.state.burgers}

        // 2. Add new burger to burgers 
        burgers[`burger${Date.now()}`] = burger

        // 3. New burgers object save to state object
        this.setState({burgers})
    }

    render() {
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="HOT BURGERS" />

                    {/* BURGERS LIST */}
                    <ul className='burgers'>
                        {/* Пробежатся по объекту */}
                        {/* Object.keys чтобы получить все ключи Burgers в новом массиве */}
                        {/* Далее пробежаться с помощья ключей с помощью Map() */}
                        {Object.keys(this.state.burgers).map(key => {
                            return (
                            <Burger 
                                key={key}
                                index={key}
                                addToOrder={this.addToOrder}
                                details={this.state.burgers[key]}
                             />
                             )
                        })}
                    </ul>

                </div>

                {/* <Order {...this.state} /> */}
                <Order burgers={this.state.burgers} order={this.state.order} />

                {/* передаем addBurger в дочерний класс */}
                <MenuAdmin 
                    addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                 />
            </div>
        )
    }
}

export default App