import React from 'react'
import ApproveModal from '../../Modals/approvemodal/ApproveModal'
import DeleteModal from '../../Modals/delete modal/DeleteModal'
import DisableModal from '../../Modals/disable modal/DisableModal'
import EditModal from '../../Modals/edit modal/EditModal'
import FilterModal from '../../Modals/filter modal/FilterModal'
import ViewOptionModal from '../../Modals/vire options modal/ViewOptionModal'
import { Link } from "react-router-dom";

import './user.css'
import AddModal from '../../Modals/add modal/AddModal'


const Users = () => {
  return (
    <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>

      <h2 className='text-main'>Users</h2>
      <div className='options d-flex justify-content-end'>
        <button className="btn  dropdown-toggle option-dropdown ms-2" type="button" data-bs-toggle="modal" data-bs-target="#viewOptionsModal" >
          View Options
        </button>
        <button className="btn dropdown-toggle ms-2 option-dropdown" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
          Filter
        </button>
        <ViewOptionModal columns={{
          name: "Columns",
          content: ["Address", "Phone Number", "No. of Partners", "Person-in-charge", "Billing Address", "Shipping Address", "Created By", "Last Modified By"]
        }} />

        <FilterModal filterby={[{ name: "Role", content: ["Admin", "Teacher", "Country Partner"] }, { name: "Country", content: ["Egypt", "China", "USA"] }, { name: "Status", content: ["Disabled", "Enabled"] }]} />

      </div>
      <div className='d-flex justify-content-between mt-2 align-items-center'>
        <div className='d-flex'>
          <button className='add-btn shadow-sm py-1 px-3' data-bs-toggle="modal" data-bs-target="#addModal"><i className='fas fa-plus'></i> Add New User</button>
          <AddModal addData={{ type: "user", content: ["Full Name", "Role", "Username", "Email", "Password", "Confirm Password"] }} />
          <button className='approve-btn shadow-sm py-1 px-3 ms-3'><i className="fa-solid fa-user-check"></i> Mass Enable User</button>
          <button className='approve-btn shadow-sm py-1 px-3 ms-3'><i className="fa-solid fa-user-large-slash"></i>Mass Disable User</button>
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
                <td>Role</td>
                <td>Country</td>
                <td>Permission Overridden?</td>
                <td>Email</td>
                <td>Created By</td>
                <td>Last Modified By</td>
                <td>Last Login</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lorem, ipsum.
                  <div className='users__icons'>
                    <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                    <EditModal editData={{ type: "user", content: ["Full Name", "Role", "Username", "Email", "Password", "Confirm Password"] }} />
                    <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                    <DeleteModal deleteData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <i className="fa-solid fa-user-check me-2 enabled-icon" data-bs-toggle="modal" data-bs-target="#approveModal"></i>
                    <ApproveModal approveData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <Link className='text-black' to={"/dashboard/manage-users/user-permissions"}>
                      <i className="fa-solid fa-eye me-2"></i>
                    </Link>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Egypt</td>
                <td>Yes</td>
                <td>Lorem, ipsum.@email.com</td>
                <td>Niazy(15/6/2022 14:00)   </td>
                <td>Niazy(15/6/2022 14:00) </td>
                <td>15/6/2022 14:00</td>
                <td><span className="status-btn disabled">Disabled</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lorem, ipsum.
                  <div className='users__icons'>
                    <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                    <EditModal editData={{ type: "user", content: ["Full Name", "Role", "Username", "Email", "Password", "Confirm Password"] }} />
                    <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                    <DeleteModal deleteData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <i className="fa-solid fa-user-check me-2 enabled-icon" data-bs-toggle="modal" data-bs-target="#approveModal"></i>
                    <ApproveModal approveData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <Link className='text-black' to={"/dashboard/manage-users/user-permissions"}>
                      <i className="fa-solid fa-eye me-2"></i>
                    </Link>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Egypt</td>
                <td>Yes</td>
                <td>Lorem, ipsum.@email.com</td>
                <td>Niazy(15/6/2022 14:00)   </td>
                <td>Niazy(15/6/2022 14:00) </td>
                <td>15/6/2022 14:00</td>
                <td><span className="status-btn disabled">Disabled</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lorem, ipsum.
                  <div className='users__icons'>
                    <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                    <EditModal editData={{ type: "user", content: ["Full Name", "Role", "Username", "Email", "Password", "Confirm Password"] }} />
                    <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                    <DeleteModal deleteData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <i className="fa-solid fa-user-check me-2 enabled-icon" data-bs-toggle="modal" data-bs-target="#approveModal"></i>
                    <ApproveModal approveData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <Link className='text-black' to={"/dashboard/manage-users/user-permissions"}>
                      <i className="fa-solid fa-eye me-2"></i>
                    </Link>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Egypt</td>
                <td>Yes</td>
                <td>Lorem, ipsum.@email.com</td>
                <td>Niazy(15/6/2022 14:00)   </td>
                <td>Niazy(15/6/2022 14:00) </td>
                <td>15/6/2022 14:00</td>
                <td><span className="status-btn disabled">Disabled</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lorem, ipsum.
                  <div className='users__icons'>
                    <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                    <EditModal editData={{ type: "user", content: ["Full Name", "Role", "Username", "Email", "Password", "Confirm Password"] }} />
                    <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                    <DeleteModal deleteData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <i className="fa-solid fa-user-large-slash me-2 disabled-icon" data-bs-toggle="modal" data-bs-target="#disableModal"></i>
                    <DisableModal disableData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <Link className='text-black' to={"/dashboard/manage-users/user-permissions"}>
                      <i className="fa-solid fa-eye me-2"></i>
                    </Link>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Egypt</td>
                <td>Yes</td>
                <td>Lorem, ipsum.@email.com</td>
                <td>Niazy(15/6/2022 14:00)   </td>
                <td>Niazy(15/6/2022 14:00) </td>
                <td>15/6/2022 14:00</td>
                <td><span className="status-btn enabled-btn">Enabled</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Lorem, ipsum.
                  <div className='users__icons'>
                    <i className="fa-solid fa-pen-to-square me-2" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                    <EditModal editData={{ type: "user", content: ["Full Name", "Role", "Username", "Email", "Password", "Confirm Password"] }} />
                    <i className="fa-solid fa-trash me-2" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                    <DeleteModal deleteData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <i className="fa-solid fa-user-large-slash me-2 disabled-icon" data-bs-toggle="modal" data-bs-target="#disableModal"></i>
                    <DisableModal disableData={{ type: "a user", content: "Lorem, ipsum." }} />
                    <Link className='text-black' to={"/dashboard/manage-users/user-permissions"}>
                      <i className="fa-solid fa-eye me-2"></i>
                    </Link>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Egypt</td>
                <td>Yes</td>
                <td>Lorem, ipsum.@email.com</td>
                <td>Niazy(15/6/2022 14:00)   </td>
                <td>Niazy(15/6/2022 14:00) </td>
                <td>15/6/2022 14:00</td>
                <td><span className="status-btn enabled-btn">Enabled</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users