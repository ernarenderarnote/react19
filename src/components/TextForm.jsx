import  {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = () => {
        setText('');
    }
    return (
        <>
            <div className="container">
                <div className="text-form-container">

                    <div className="mb-3">
                        <label htmlFor="myTextBox" className="form-label">{props.heading}</label>
                        <textarea className="form-control" id="myTextBox" rows="8" onChange={handleOnChange} value={text}></textarea>
                        <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                        <button className="btn btn-success mt-3 mx-1" onClick={handleLowerCase}>Convert to Lower</button>
                        <button className="btn btn-danger mt-3 mx-1" onClick={handleClearText}>Clear All</button>
                    </div>
                </div> 
            </div>

            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
            </div>
        </>   
    );

    
    
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired, 
};

