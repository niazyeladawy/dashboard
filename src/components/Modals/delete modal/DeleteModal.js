import React from 'react'
import './deletemodal.css'


const DeleteModal = ({deleteData}) => {
    return (


        <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className='modal-header-icon'>
                            <i className="fa-solid fa-5x text-white fa-trash-can"></i>
                        </div>
                    </div>
                    <div className="modal-body text-center ">
                        <p className=''>You are about to delete   {deleteData.type}</p>
                        <p className='text-main'>{deleteData.content}</p>
                        <p className='fs-5'>This will delete the {deleteData.type} <br/> from the database Are you sure?</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-evenly">
                        <button type="button" className="btn bg-white px-5" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-confirm px-5 ">Confirm</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeleteModal