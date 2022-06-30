import React from 'react'
import './addorgmodal.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AddOrgModal = () => {
    return (
        <div className="modal fade" id="addOrgModal" tabIndex={-1} aria-labelledby="addOrgModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add Organisation </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Organisation 1</Tab>
                            <Tab>Organisation 2</Tab>
                            <Tab>Organisation 3</Tab>
                            <Tab>Organisation 4</Tab>
                            <Tab>Organisation 5</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Organisation 1</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' aria-describedby="emailHelp" />
                                        </div>
                                        <div className='row row50'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className='d-flex justify-content-between align-items-end mb-3'>
                                                        <div className="">
                                                            <label htmlFor="formFile" className="form-label">Upload Image<span className="text-danger">*</span></label>
                                                            <input className="form-control" type="file" id="formFile" />

                                                        </div>
                                                        <button type="button" className="btn approve-btn"> <span>Upload</span></button>
                                                    </div>


                                                    <div className="image-preview position-relative">
                                                        <div className='position-absolute'>
                                                            <i className='fas fa-image'></i>
                                                            <p>No preview available</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Organisation 2</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' aria-describedby="emailHelp" />
                                        </div>
                                        <div className='row row50'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className='d-flex justify-content-between align-items-end mb-3'>
                                                        <div className="">
                                                            <label htmlFor="formFile" className="form-label">Upload Image<span className="text-danger">*</span></label>
                                                            <input className="form-control" type="file" id="formFile" />

                                                        </div>
                                                        <button type="button" className="btn approve-btn"> <span>Upload</span></button>
                                                    </div>


                                                    <div className="image-preview position-relative">
                                                        <div className='position-absolute'>
                                                            <i className='fas fa-image'></i>
                                                            <p>No preview available</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Organisation 3</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' aria-describedby="emailHelp" />
                                        </div>
                                        <div className='row row50'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className='d-flex justify-content-between align-items-end mb-3'>
                                                        <div className="">
                                                            <label htmlFor="formFile" className="form-label">Upload Image<span className="text-danger">*</span></label>
                                                            <input className="form-control" type="file" id="formFile" />

                                                        </div>
                                                        <button type="button" className="btn approve-btn"> <span>Upload</span></button>
                                                    </div>


                                                    <div className="image-preview position-relative">
                                                        <div className='position-absolute'>
                                                            <i className='fas fa-image'></i>
                                                            <p>No preview available</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Organisation 4</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' aria-describedby="emailHelp" />
                                        </div>
                                        <div className='row row50'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className='d-flex justify-content-between align-items-end mb-3'>
                                                        <div className="">
                                                            <label htmlFor="formFile" className="form-label">Upload Image<span className="text-danger">*</span></label>
                                                            <input className="form-control" type="file" id="formFile" />

                                                        </div>
                                                        <button type="button" className="btn approve-btn"> <span>Upload</span></button>
                                                    </div>


                                                    <div className="image-preview position-relative">
                                                        <div className='position-absolute'>
                                                            <i className='fas fa-image'></i>
                                                            <p>No preview available</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">

                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Organisation 5</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label">Organisation Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter Organisation Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Organisation Address<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Organisation Address' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Email<span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="orgEmail" placeholder='Enter  Email' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Phone Number<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Phone' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Person-in-charge<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Person-in-charge' aria-describedby="emailHelp" />
                                        </div>
                                        <div className='row row50'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgPillAdress" className="form-label">Billing Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgPillAdress" placeholder='Enter Billing Address' aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="  mb-3">
                                                        <label htmlFor="orgShipAddress" className="form-label">Shipping Address<span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="orgShipAddress" placeholder='Enter Shipping Address' aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <div className='d-flex justify-content-between align-items-end mb-3'>
                                                        <div className="">
                                                            <label htmlFor="formFile" className="form-label">Upload Image<span className="text-danger">*</span></label>
                                                            <input className="form-control" type="file" id="formFile" />

                                                        </div>
                                                        <button type="button" className="btn approve-btn"> <span>Upload</span></button>
                                                    </div>


                                                    <div className="image-preview position-relative">
                                                        <div className='position-absolute'>
                                                            <i className='fas fa-image'></i>
                                                            <p>No preview available</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='d-flex justify-content-end mb-4'>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default AddOrgModal