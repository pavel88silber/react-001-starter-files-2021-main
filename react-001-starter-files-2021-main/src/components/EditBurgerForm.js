import React from "react";

class EditBurgerForm extends React.Component {


    handleChange = event => {
        // console.log(event.currentTarget.value);

        const updatedBurger = {
            ...this.props.burger,
            // name: 'test'
            // name: event.currentTarget.value,
            // Dynamic key
            [event.currentTarget.name]: event.currentTarget.value

        }

        // console.log(updateBurger);
        this.props.updateBurger(this.props.index, updatedBurger);

    }

    render() {
        return (
            <div className="burger-edit">
                <input onChange={this.handleChange} name='name' type='text' value={this.props.burger.name}/> 
                <input onChange={this.handleChange} name='price' type='text' value={this.props.burger.price}/>
                <select 
                    onChange={this.handleChange} 
                    name='status' 
                    className="status" 
                    value={this.props.burger.status}
                >
                    <option value='available'>זמין</option>
                    <option value='unavailable'>לא זמין</option>
                </select>
                <textarea onChange={this.handleChange} name='desc' type='text' value={this.props.burger.desc}/>
                <input onChange={this.handleChange} name='image' type='text' value={this.props.burger.image}/>
            </div>
        )
    }
}

export default EditBurgerForm