import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="textBox" rows="8"></textarea>
        </div>
    )
}
