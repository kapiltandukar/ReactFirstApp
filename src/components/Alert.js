import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.displayAlert && <div className={`alert alert-${props.displayAlert.type} alert-dismissible fade show`} role="alert">
        {capitalize(props.displayAlert.type)} : <strong>{props.displayAlert.msg}</strong> 
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  
  )
}
