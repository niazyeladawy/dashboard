import React from 'react'
import './editmodal2.css'
const EditModal2 = ({editData}) => {
    return (
        <div className="modal fade" id="editModal2" tabIndex={-1} aria-labelledby="editModal2Label" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-block">
                        <h5 className='text-center'>Edit {editData.type}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body  px-5">
                        <form action="" >
                            <div className='d-flex justify-content-between flex-wrap rounded-3 shadow-sm p-5' >
                                {
                                    editData.content.map((item, idx) => (
                                        <div className=" item mb-3" key={idx}>
                                            <label htmlFor={`exampleInput${item}`} className="form-label">{item}</label>
                                            {
                                                (item === "Password") || (item === "Confirm Password") ? <input type="password" className="form-control" id={`exampleInput${item}`} aria-describedby="emailHelp" placeholder={`Enter ${item}`} /> : <input type="text" className="form-control" id={`exampleInput${item}`} aria-describedby="emailHelp" placeholder={`Enter ${item}`} />
                                            }


                                        </div>
                                    ))
                                }
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type="button" className="btn btn-confirm px-4 mt-3 "><i className="fa-solid fa-floppy-disk me-3"></i> <span>Save</span></button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal2