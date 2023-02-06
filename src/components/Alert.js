import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-2`}role="alert">
                <strong>{props.alert.msg}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
