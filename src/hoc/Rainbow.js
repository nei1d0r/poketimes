import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'blue', 'green', 'orange', 'yellow', 'pink'];
    const randomColour = colours[Math.floor(Math.random() * (colours.length - 1))]
    const className = `${randomColour}-text`
    console.log(className)
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow