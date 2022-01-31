import React from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import Burger from './Burger'
import sampleBurgers from '../sample-burgers'
import base from '../base'


class App extends React.Component {

    // именно сдесь будем храню все бургеры (главный комп) чтобы юзать везде!
    state = {
        burgers: {},
        order: {}
    }

    componentDidMount() {
        const { params } = this.props.match;

        // Here updating --> state.order from localStorage
        const localStorageRef = localStorage.getItem(params.restaurantId)
        // console.log(localStorageRef);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)})
        }

        // Here updating --> state.burgers
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers' // What to sync with DB
        })
    }

    // FOR LOCAL STORAGE
    componentDidUpdate() {
        const { params } = this.props.match;
        // console.log('Update');
        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
    }

    // Если возвращяумся на глав. страницу компонент App обновляется, ножно закрыть связь с базой (закрыть socket)
    // если Сокеты оставлять открытыми это приводит к утечкам памяти
    // Для этого используем еще один метод жизненого цикла react
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers})
    }

    updateBurger = (key, updatedBurger) => {
        // 1. Делаем копию объекта state
        const burgers = { ...this.state.burgers }
        // 2. Обновляем нужный бургер
        burgers[key] = updatedBurger;
        // 3. Записать обнавленный объект burgers в state
        this.setState({burgers})
    }
    
    deleteBurger = (key) => {
        // 1. Делаем копию объекта state
        const burgers = { ...this.state.burgers }
        // 2. Удаляем нужный бургер    + FIREBASE
        burgers[key] = null;
        // 3. Записать обнавленный объект burgers в state
        this.setState({ burgers }); 
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

    deleteFromOrder = (key) => {
        // 1. Делаем копию объекта state
        const order = {...this.state.order}
        // 2. Удаляем burger
        delete order[key];
        // 3. Записать на новый объект order в state
        this.setState({ order});
    }

    render() {
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title={`Pavel's Burgers`} />

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
                <Order 
                    burgers={this.state.burgers} 
                    order={this.state.order} 
                    deleteFromOrder={this.deleteFromOrder}
                />

                {/* передаем addBurger в дочерний класс */}
                <MenuAdmin 
                    addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                    burgers={this.state.burgers}
                    updateBurger={this.updateBurger}
                    deleteBurger={this.deleteBurger}
                 />
            </div>
        )
    }
}

export default App