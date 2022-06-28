import React from 'react'

const UserPermissions = () => {
    return (
        <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>

            <h2 className='text-main'>User Permissions</h2>
            <div className='row px-5'>
                <div className='col-lg-6'>
                    <div className='item'>
                        <div className='d-flex justify-content-evenly'>
                            <p>Allow Access<span>*</span></p>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPermissions