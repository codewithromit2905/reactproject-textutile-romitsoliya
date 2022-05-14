import React,{useState} from 'react'

export default function Textform(props){

    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to upper case","success")
    }
    const handledownclick=()=>{
        let newtext=text.toLocaleLowerCase();
        setText(newtext)
        props.showAlert("converted to lower case","success")

    }
    const handleonchange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const handleoncopy=()=>{
      console.log("copy is done sucessfully")
      let Text=document.getElementById('mybox');
      Text.select();
      Text.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(Text.value);
      props.showAlert("text is copied sucessfully","success")

      
    }
    const handleonclear=()=>{
      setText("");
      props.showAlert("your text is cleared sucessfully","success")


    }
    const [text, setText] = useState('enter text here');
  return (
      <>
    <div className='container'>
        <h2>{props.heading}</h2>
      <div className="mb-3" >
      <textarea name="" id="mybox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleonchange} cols="80" rows="5"></textarea>
      </div>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-2  my-1 " onClick={handleupclick}>convert into uppercase</button> 
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-2  my-1 " onClick={handledownclick}>convert into Lowercase</button> 
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1  " onClick={handleoncopy}>Copy text</button> 
      <button disabled={text.length===0} type="button" className="btn btn-primary " onClick={handleonclear}>Clear text</button> 

    </div>
    <div className="container my-2">
        <h3>your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element!=0}).length}words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter Something to preview it"}</p>
    </div>
    </>
  )
}
