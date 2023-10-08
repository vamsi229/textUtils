import React from 'react'

export default function Alert(props) {
  return ( 
    props.alert &&
   <>
   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{`${props.alert.type[0].toUpperCase() + props.alert.type.slice(1)}. : ${props.alert.msg}`}</strong> 
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
   </>
  )
}
