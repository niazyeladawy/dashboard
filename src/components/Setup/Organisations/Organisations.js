import React from 'react'
import './organisation.css'

const Organisations = () => {
    return (
        <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>

            <h2 className='text-main'>Organisations</h2>
            <div className='options'>
                options
            </div>
            <div className='d-flex justify-content-between mt-2 align-items-center'>
                <div className='d-flex'>
                    <button className='add-btn shadow-sm py-1 px-3'><i className='fas fa-plus'></i> Add New Organization</button>
                    <button className='delete-btn shadow-sm py-1 px-3 ms-3'><i className='fas fa-trash'></i> Mass Delete</button>
                </div>
                <div className='border-b-main'>
                    <i className='fas fa-magnifying-glass text-main'></i>
                    <input className='input-transparent px-5 ' type="text" placeholder='Search for Organisation' />
                </div>
            </div>
            <div className='mt-3 position-relative'>
                <div className='overflow-auto'>
                    <table className='w-100 '>
                        <thead className='bg-main'>
                            <tr>
                                <td></td>
                                <td>Name</td>
                                <td>Country</td>
                                <td>Email</td>
                                <td>Address</td>
                                <td>Phone Number</td>
                                <td>No. of  partners    </td>
                                <td>Person-in-charge</td>
                                <td>Billing Address</td>
                                <td>Shipping Address</td>
                                <td>Shipping Address</td>
                                <td>Created By</td>
                                <td>Last Modified By</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lorem, ipsum.
                                    <div className='organization__icons'>
                                        <i className="fa-solid fa-pen-to-square me-2"></i>
                                        <i className="fa-solid fa-trash me-2"></i>
                                        <i className="fa-solid fa-eye me-2"></i>
                                    </div>
                                </td>
                                <td>Lorem.</td>
                                <td>Lorem, ipsum.@email.com</td>
                                <td>Lorem ipsum dolor sit.</td>
                                <td>0103166314</td>
                                <td>5   </td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>kelly(2020/05/5 13:00)</td>
                                <td>kelly(2020/05/5 13:00)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lorem, ipsum.
                                    <div className='organization__icons'>
                                        <i className="fa-solid fa-pen-to-square me-2"></i>
                                        <i className="fa-solid fa-trash me-2"></i>
                                        <i className="fa-solid fa-eye me-2"></i>
                                    </div>
                                </td>
                                <td>Lorem.</td>
                                <td>Lorem, ipsum.@email.com</td>
                                <td>Lorem ipsum dolor sit.</td>
                                <td>0103166314</td>
                                <td>5   </td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>kelly(2020/05/5 13:00)</td>
                                <td>kelly(2020/05/5 13:00)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Lorem, ipsum.
                                    <div className='organization__icons'>
                                        <i className="fa-solid fa-pen-to-square me-2"></i>
                                        <i className="fa-solid fa-trash me-2"></i>
                                        <i className="fa-solid fa-eye me-2"></i>
                                    </div>
                                </td>
                                <td>Lorem.</td>
                                <td>Lorem, ipsum.@email.com</td>
                                <td>Lorem ipsum dolor sit.</td>
                                <td>0103166314</td>
                                <td>5   </td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>kelly(2020/05/5 13:00)</td>
                                <td>kelly(2020/05/5 13:00)</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Lorem, ipsum.
                                    <div className='organization__icons'>
                                        <i className="fa-solid fa-pen-to-square me-2"></i>
                                        <i className="fa-solid fa-trash me-2"></i>
                                        <i className="fa-solid fa-eye me-2"></i>
                                    </div>
                                </td>
                                <td>Lorem.</td>
                                <td>Lorem, ipsum.@email.com</td>
                                <td>Lorem ipsum dolor sit.</td>
                                <td>0103166314</td>
                                <td>5   </td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>Lorem, ipsum.</td>
                                <td>kelly(2020/05/5 13:00)</td>
                                <td>kelly(2020/05/5 13:00)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Organisations