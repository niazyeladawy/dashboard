import React from 'react'
import AddOrgModal from '../../Modals/add org modal/AddOrgModal'

import DeleteModal from '../../Modals/delete modal/DeleteModal'
import './organisation.css'

const Organisations = () => {
    return (
        <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>

            <h2 className='text-main'>Organisations</h2>
            <div className='options d-flex justify-content-end'>
                <button className="btn  dropdown-toggle option-dropdown ms-2" type="button" data-bs-toggle="modal" data-bs-target="#viewOptionsModal" >
                    View Options
                </button>
                <button className="btn dropdown-toggle ms-2 option-dropdown" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
                    Filter
                </button>
                <div className="modal fade" id="viewOptionsModal" tabIndex={-1} aria-labelledby="viewOptionsModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h4>Columns</h4>
                                <form>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="addressCheckbox" defaultValue="option1" />
                                        <label className="form-check-label" htmlFor="addressCheckbox">Address</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="phoneCheckbox" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="phoneCheckbox">Phone Number</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="PartnersCheckbox" defaultValue="Partners" />
                                        <label className="form-check-label" htmlFor="PartnersCheckbox">No. of Partners</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="personCheckbox" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="apersonCheckbox">Person-in-charge</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="BillingCheckbox" defaultValue="Billing" />
                                        <label className="form-check-label" htmlFor="BillingCheckbox">Billing Address</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="shippingCheckbox" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="shippingCheckbox">Shipping Address</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="createdCheckbox" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="createdCheckbox">Created By</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="modifiedCheckbox" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="modifiedCheckbox">Last Modified By</label>
                                    </div>
                                    <h4 className='mt-3'>Pagination</h4>
                                    <div className="input-group mb-3 align-items-center">
                                        <label className="me-3" htmlFor="inputGroupSelect01">Options:</label>
                                        <select className="form-select" id="inputGroupSelect01">

                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                        </select>
                                    </div>
                                    <button type='submit' className='approve-btn p-2 px-3 rounded-3'><i className="fa-solid fa-check  me-3"></i> Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="modal fade" id="filterModal" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h4>Filter By</h4>
                                <form>
                                    <div className='d-flex justify-content-start'>
                                        <div className="input-group mb-3 align-items-center me-3">
                                            <select className="form-select py-2" id="countrySelect">
                                                <option >Country</option>
                                                <option value={"Egy"}>Egy</option>
                                                <option value={"Usa"}>Usa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type='submit' className='approve-btn p-2 px-3 rounded-3'><i className="fa-solid fa-arrow-rotate-right me-3"></i> Reset Filters</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

        <AddOrgModal/>
            </div>
            <div className='d-flex justify-content-between mt-2 align-items-center'>
                <div className='d-flex'>
                    <button className='add-btn shadow-sm py-1 px-3' data-bs-toggle="modal" data-bs-target="#addOrgModal"><i className='fas fa-plus'></i> Add New Organization</button>
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
                                    <div className='organization__icons__icons'>
                                        <i className="fa-solid fa-pen-to-square me-2"></i>
                                        <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{type:"an organisation",content:"Lorem, ipsum."}} />
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
                                        <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{type:"an organisation",content:"Lorem, ipsum."}} />
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
                                        <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{type:"an organisation",content:"Lorem, ipsum."}} />
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
                                        <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                            <DeleteModal deleteData={{type:"an organisation",content:"Lorem, ipsum."}} />
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