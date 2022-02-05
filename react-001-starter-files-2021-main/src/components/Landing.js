import React from 'react'
import restaurants from '../sample-restaurants'
import PropTypes from 'prop-types'

class Landing extends React.Component {

    static propTypes = {
        history: PropTypes.object
    }

    // ЧТО ТАКОЕ STATE? Это объект где хранятся данные (эти данные передаются в другие компоненты)
    state = {
        display: false,
        title:'',
        url:'',
        name: 'THE BEST EVER BRANCH!'
    }
    // Property of instance by arrow func
    displayList = () => {
        // const display = this.state.display  (так не проще)
        const { display } = this.state 
        this.setState({display:!display})
    }

    getTitle = restaurant => {
        // const { title: title, url: url} = restaurant  // old
        const { title, url} = restaurant  // деструктурирование
        // this.setState({title:title, url:url, display: false})  // Задааем новые данные
        this.setState({title, url, display: false})  // Задааем новые данные
    }

    goToRestaurant = () => {
        const { url } = this.state
        this.props.history.push(`/restaurant/${url}`)
    }

    render() {

        return(
                <div className='restaurant_select font-effect-fire-animation'>
                    <div>{this.state.title === "Hot Burger כפר סבא" ? (this.state.name):null}</div>
                    <div className='restaurant_select_top'>
                        <div 
                        onClick={this.displayList}
                        className='restaurant_select_top-header font-effect-outline'
                         >
                            {this.state.title ? this.state.title : 'תבחר/י סניף' }
                            </div>
                        
                        
                        <div className='arrow_picker'>
                            <div className='arrow_picker-up'></div>
                            <div className='arrow_picker-down'></div>
                        </div>
                    </div>

                    {/* THIS DIV Will be displayed when "display" = true */}
                    {this.state.display ? (
                        <div className='restaurant_select'>
                            <ul>
                                {restaurants.map(restaurant=>{
                                        return (<li 
                                            onClick={ () => this.getTitle(restaurant) }
                                            key={restaurant.id}>{restaurant.title}
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ) : null}

                        {/* Show this button IF there is "title" and state.display False */}
                        { this.state.title && !this.state.display ? (
                         <button onClick={this.goToRestaurant}>...המשך/י</button> 
                         ) : null}
                
                </div>
                

            
        )
    }
}

export default Landing 