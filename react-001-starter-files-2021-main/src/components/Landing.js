import React from 'react'
import restaurants from '../sample-restaurants'

class Landing extends React.Component {

    state = {
        display: false,
        title:'',
        url:''
    }
    // Property of instance by arrow func
    displayList = () => {
        // const display = this.state.display  (так не проще)
        const { display } = this.state 
        this.setState({display:!display})
    }

    getTitle = restaurant => {
        const { title, url} = restaurant  // дисструкеузация
        // this.setState({title:title, url:url, display: false})  // Получаем новые данные
        this.setState({title, url, display: false})  // Получаем новые данные
    }

    goToRestaurant = () => {
        console.log('Go to Restaurant ' + this.state.title);
    }

    render() {

        return(
                <div className='restaurant_select'>
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