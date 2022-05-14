import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Codewithronny</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
        </li>
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2"   onClick={()=>{props.togglemode('primary')}}  style={{height:'30px',width:'30px' ,cursor:'pointer'}}></div>
      </div>
      <div className="d-flex">
        <div className="bg-danger rounded mx-2"   onClick={()=>{props.togglemode('danger')}}  style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
      </div>
      <div className="d-flex">
        <div className="bg-success rounded mx-2"   onClick={()=>{props.togglemode('')}}  style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
      </div>
       
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch"  onClick={()=>{props.togglemode(null)}} id="flexSwitchCheckDefault "/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{Color:props.mode==='white'?'dark':'white'}} >Enabledark mode</label>
</div>
      
      
    </div>
  </div>
</nav>
  )
}
