import React, {useState} from 'react'

function form(props) {
    const [text, settext] =useState("Enter the text");

    function click() {
        console.log("sd");
        
    }

    return(
        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
  <button className='btn btn-primary mt-3' onClick={click}>Convert to Upercase</button>
</div>
    
)
}
export default form
