import React from 'react'

function Alert(props) {
    return (
        <>
            <div style={{ height: '60px' }}>
                {props.alert && (
                    <div className="alert alert-primary alert-dismissible fade show custom-alert" role="alert" >
                        <strong>{props.alert.typ}</strong>: {props.alert.msg}
                    </div>
                )}
            </div>
        </>
    )
}

export default Alert