import React, { Component } from 'react'

export class AddGrocery extends Component {
    render() {
        return (
            <form style={{ display: "flex" }}>
                <input 
                type="text" 
                name="name"
                style= {{ flex: "10", padding: "5px" }}
                placeholder="Add Grocery Item ..." 
                />
                <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{ flex: "1" }}
                />
            </form>
        )
    }
}

export default AddGrocery
