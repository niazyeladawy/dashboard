import React from 'react'
import './addcompetiton.css'

const AddCompetition = () => {
    return (
        <div className=' overflow-hidden w-100 add-comp'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>Add Competition</h2>
                <div className='px-5'>
                    <div className='container-fluid'>
                        <div className="accordion " id="accordionPanelsStayOpenExample">

                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Competition 1
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div classname="accordion-body ">
                                        <div className="accordion-item mx-4 mb-5">
                                            <h2 className="accordion-header" id="settingsAccord-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#settingsAccord-collapseOne" aria-expanded="true" aria-controls="settingsAccord-collapseOne">
                                                    <i className="fa-solid fa-gear me-2"></i> Settings
                                                </button>
                                            </h2>
                                            <div id="settingsAccord-collapseOne" className="accordion-collapse collapse show" aria-labelledby="settingsAccord-headingOne">
                                                <div className="accordion-body">
                                                    <form action="">
                                                        <div className='row'>
                                                            <div className='col-lg-4'>
                                                                <label htmlFor="CompetitionName">Competition Name</label>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <input type="text" className='form-control' name="CompetitionName" placeholder='Competition Name' id="CompetitionName" />
                                                                </div>

                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="CompetitionIdentifier">Competition Identifier</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <input type="text" className='form-control' name="CompetitionIdentifier" placeholder='Competition Identifier' id="CompetitionIdentifier" />
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="startDate">Start</label>


                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <input id="startDate" className="form-control" type="date" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mx-4 mb-5">
                                            <h2 className="accordion-header" id="countryPartnerAccord-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#countryPartnerAccord-collapseOne" aria-expanded="true" aria-controls="countryPartnerAccord-collapseOne">
                                                    <i className=" fas fa-user me-2"></i> Country Partner
                                                </button>
                                            </h2>
                                            <div id="countryPartnerAccord-collapseOne" className="accordion-collapse collapse show" aria-labelledby="countryPartnerAccord-headingOne">
                                                <div className="accordion-body">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddCompetition