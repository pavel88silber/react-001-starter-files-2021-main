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
        // const display = this.state.display
        const { display } = this.state 
        this.setState({display:!display})
    }

    render() {

        console.log(restaurants);
        restaurants.map(restaurants=>{
            console.log(restaurants.title);
        })


        return(
                <div className='restaurant_select'>
                    <div className='restaurant_select_top'>
                        <div 
                        onClick={this.displayList}
                        className='restaurant_select_top-header font-effect-outline'
                         >
                            תבחר/י סניף
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
                                            onClick={()=>this.getTitle(restaurant)}
                                            key={restaurant.id}>{restaurant.title}
                                        </li>
                                        )
                                    })}
                            </ul>
                            <button>...המשך/י</button>
                        </div>
                        ) : null}
                </div>
                

            
        )
    }
}

export default Landing 