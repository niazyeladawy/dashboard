import React from 'react'
import './schools.css'

const Schools = () => {
    return (
        <div className='schools overflow-hidden'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>Schools</h2>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='status d-flex'>
                        <div className='pending-item rounded-3 shadow px-4 py-2 bg-white text-center me-3'>
                            <i class="fa-solid fa-clock-rotate-left fa-2x"></i>
                            <span className='d-block fs-3 fw-bold'>  11</span>
                            <p className='mb-0'>Pending Schools</p>
                        </div>
                        <div className='total-item rounded-3 shadow px-4 py-2 bg-white text-center me-3'>
                            <i class="fa-solid fa-school fa-2x"></i>
                            <span className='d-block fs-3 fw-bold'> 100</span>
                            <p className='mb-0'>Total Schools</p>
                        </div>
                    </div>
                    <div className='options me-4'>
                        <button className="btn  dropdown-toggle option-dropdown ms-2" type="button"  >
                            View Options
                        </button>
                        <button class="btn dropdown-toggle ms-2 option-dropdown" type="button" >
                            Filter
                        </button>
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-2 align-items-center'>
                    <div className='d-flex'>
                        <button className='add-btn shadow-sm py-1 px-3 me-3'><i className='fas fa-plus'></i> Add New School</button>
                        <button className='approve-btn shadow-sm py-1 px-3 me-3'><i class="fa-solid fa-check"></i> Mass Approve</button>
                        <button className='delete-btn shadow-sm py-1 px-3 me-3'><i className='fas fa-trash'></i> Mass Delete</button>
                    </div>
                    <div className='border-b-main'>
                        <i className='fas fa-magnifying-glass text-main'></i>
                        <input className='input-transparent px-5 ' type="text" placeholder='Search for Schools' />
                    </div>
                </div>
                <div className='mt-3 position-relative'>
                    <div className='overflow-auto'>
                        <table className='w-100 '>
                            <thead className='bg-main'>
                                <tr>
                                    <td></td>
                                    <td>School/Tuition</td>
                                    <td>Country</td>
                                    <td>Email</td>
                                    <td>Teachers</td>
                                    <td>Phone Number   </td>
                                    <td>Address</td>
                                    <td>Postal Code</td>
                                    <td>Province/State</td>
                                    <td>Created By</td>
                                    <td>Approved By</td>
                                    <td>Rejected By</td>
                                    <td>Last Modified By</td>
                                    <td>Status</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className='approved_icons'>Lorem, ipsum.
                                        <div className='school__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2"></i>
                                            <i className="fa-solid fa-trash me-2"></i>
                                            <i class="fa-solid fa-user-plus"></i>
                                            <i class="fa-solid fa-user-ninja"></i>
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.@email.com</td>
                                    <td>5   </td>
                                    <td>0103166314</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn approved'>Approved</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className='approved_icons'>Lorem, ipsum.
                                        <div className='school__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2"></i>
                                            <i className="fa-solid fa-trash me-2"></i>
                                            <i class="fa-solid fa-user-plus me-2"></i>
                                            <i class="fa-solid fa-user-ninja me-2"></i>
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.@email.com</td>
                                    <td>5   </td>
                                    <td>0103166314</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn approved'>Approved</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className='pending_icons'>Lorem, ipsum.
                                        <div className='school__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2"></i>
                                            <i className="fa-solid fa-trash me-2"></i>
                                            <i class="fa-solid fa-square-check me-2"></i>
                                            <i class="fa-solid fa-square-xmark me-2"></i>
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.@email.com</td>
                                    <td>5   </td>
                                    <td>0103166314</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn pending'>Approved</span></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className='pending_icons'>Lorem, ipsum.
                                        <div className='school__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2"></i>
                                            <i className="fa-solid fa-trash me-2"></i>
                                            <i class="fa-solid fa-square-check me-2"></i>
                                            <i class="fa-solid fa-square-xmark me-2"></i>
                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.@email.com</td>
                                    <td>5   </td>
                                    <td>0103166314</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn pending'>Approved</span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className='rejected_icons'>Lorem, ipsum.
                                        <div className='school__icons'>
                                            <i className="fa-solid fa-pen-to-square me-2"></i>
                                            <i class="fa-solid fa-trash-arrow-up me-2"></i>

                                        </div>
                                    </td>
                                    <td>Lorem.</td>
                                    <td>Lorem, ipsum.@email.com</td>
                                    <td>5   </td>
                                    <td>0103166314</td>
                                    <td>Lorem ipsum dolor sit.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td>Lorem, ipsum.</td>
                                    <td className=''>kelly(2020/05/5 13:00)</td>
                                    <td className=''><span className='status-btn rejected'>Deleted</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schools