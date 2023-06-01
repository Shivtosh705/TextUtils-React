import React from 'react'

export default function About(props) {

// const [myStyle,setMyStyle] = useState(
//     {
//         color:"balck",
//         backgroundColor:"white",
        
//     }
// )

let myStyle={
  color: props.mode ==='dark'?'white':'#042743',
  backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
}


    

  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h1 className='my-3'>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>
        Textutils gives you a way to analyze your text quickly efficiently.Be it word count,character count.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count stastics for a given
        text. TextUtils reports the number of words and characters.Thus it is suitable for writing text with word / character 
        limit.
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software work in any web browser such as chrome , Firefox, Internet Wxplorer, Safari.It 
        suits to count characters in facebook, blog, books, excel document, pdf document, essay,etc.
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
