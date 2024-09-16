import {useState} from 'react'

export default function About() {
    
    const [accordianStyle, themeMode] = useState({ 
        color: '#fff',
        backgroundColor: '#000'
        }
    );
    const [accordianText, accordianTextMode] = useState('Light Mode');

    const changeThemeMode = () => {
        if(accordianStyle.color == '#fff'){
            themeMode({
                color: '#000',
                backgroundColor: '#fff'
            });
            accordianTextMode('Dark Mode');
        }else{
            themeMode({
                color: '#fff',
                backgroundColor: '#000'
            });
            accordianTextMode('Light Mode');
        }
        
    }

    return (
        <>
        <div className="container" style={accordianStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample"  >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={accordianStyle}>
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordianStyle}>
                            <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={accordianStyle}>
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={accordianStyle}>
                            <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={accordianStyle}>
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordianStyle}> 
                            <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&aposs also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="container my-3">
            <button type="button" className="btn btn-success" onClick={changeThemeMode}>{accordianText}</button>
        </div>
        </>
    )
}
