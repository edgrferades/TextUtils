import React, { useState } from 'react';

function Textform(props) {
    const [text, setText] = useState('');

    let handleChange = (event) => {
        setText(event.target.value);
    }

    let clearText = () => {
        if (text.trim() !== '') {
            setText('');
            props.showAlert('Text area cleared!', 'Success');
        }
    };

    let upperCase = () => {
        if (text.trim() !== '') {
            setText(text.toUpperCase());
            props.showAlert('Converted to uppercase!', 'Success');
        }
    }

    let lowerCase = () => {
        if (text.trim() !== '') {
            setText(text.toLowerCase());
            props.showAlert('Converted to lowercase!', 'Success');
        }
    }

    let copyText = () => {
        if (text.trim() !== '') {
            navigator.clipboard.writeText(text);
            props.showAlert('Text copied!', 'Success');
        }
    };

    let removeExtraSpaces = () => {
        if (text.trim() !== '') {
            const trimmedText = text.replace(/\s+/g, ' ');
            setText(trimmedText);
            props.showAlert('Extra spaces removed!', 'Success')
        }
    }

    return (
        <>
            <div className="container mt-5">
                <label htmlFor="myBox" className="form-label">Enter text below</label>
                <textarea onChange={handleChange} value={text} className="form-control" id="myBox" rows="3"></textarea>
            </div>

            <div className="container mt-3">
                <button onClick={clearText} type="button" className="m-1 btn btn-outline-secondary">Clear Textarea</button>
                <button onClick={upperCase} type="button" className="m-1 btn btn-outline-secondary">Upper Case</button>
                <button onClick={lowerCase} type="button" className="m-1 btn btn-outline-secondary">Lower Case</button>
                <button onClick={copyText} type="button" className="m-1 btn btn-outline-secondary">Copy text</button>
                <button onClick={removeExtraSpaces} type="button" className="m-1 btn btn-outline-secondary">Remove Extra Spaces</button>
            </div>

            <div className="container mt-4">
                <h5 className='mb-4'>View changes below</h5>

                <h6>{text}</h6>
                <h6>Text summary</h6>
                <p>{text.trim() === '' ? '0' : text.trim().split(/\s+/).length} words | {text.replace(/\s+/g, '').length} characters</p>
            </div>

        </>
    )
}

export default Textform;