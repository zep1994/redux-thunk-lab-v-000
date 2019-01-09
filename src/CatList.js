import React, { Component } from 'react';

class CatList extends Component {
    renderCats = () => {
        return this.props.catPics.map(img => {
            return <img key={img.id} src={img.url} alt="cats" />
        })
    }

    render() {
        return (
            <div> 
                    {this.renderCats()}
            </div>
        )
    }
}

export default CatList