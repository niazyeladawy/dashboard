import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './addparticipantmodal.css'

const AddParticipatnModal = () => {
    return (
        <div className="modal fade" id="addOrgParticipant" tabIndex={-1} aria-labelledby="addOrgParticipantLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content px-5">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Add Participant </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Participant 1</Tab>
                            <Tab>Participant 2</Tab>
                            <Tab>Participant 3</Tab>
                            <Tab>Participant 4</Tab>
                            <Tab>Participant 5</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="modal-body rounded-3 shadow-sm mb-3 ">
                                <form action="" >
                                    <div className='d-flex justify-content-between flex-wrap py-4 px-5' >
                                        <h4 className='w-100 text-center mt-0 text-main'>Participant 1</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Competition/Assessment' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Grade' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">School<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select School' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Partner/Teacher' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
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
                                        <h4 className='w-100 text-center mt-0 text-main'>Participant 2</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Competition/Assessment' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Grade' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">School<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select School' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Partner/Teacher' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
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
                                        <h4 className='w-100 text-center mt-0 text-main'>Participant 3</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Competition/Assessment' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Grade' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">School<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select School' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Partner/Teacher' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
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
                                        <h4 className='w-100 text-center mt-0 text-main'>Participant 4</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Competition/Assessment' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Grade' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">School<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select School' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Partner/Teacher' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
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
                                        <h4 className='w-100 text-center mt-0 text-main'>Participant 5</h4>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgName" className="form-label"> Name<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgName" placeholder='Enter  Name' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgadd" className="form-label">Class<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgadd" placeholder='Enter Class' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgEmail" className="form-label">Competition/Assessment<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgEmail" placeholder='Enter  Competition/Assessment' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPhone" className="form-label">Grade<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPhone" placeholder='Enter  Grade' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">Country<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select Country' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgCountry" className="form-label">School<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgCountry" placeholder='Select School' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Partner/Teacher<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Partner/Teacher' aria-describedby="emailHelp" />
                                        </div>
                                        <div className=" item mb-3">
                                            <label htmlFor="orgPerson" className="form-label">Tuition Centre<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="orgPerson" placeholder='Enter Tuition Centre' aria-describedby="emailHelp" />
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

export default AddParticipatnModal