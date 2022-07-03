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
                                                                    <label htmlFor="CompetitionDate">Competition Date</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <input id="CompetitionDate" className="form-control" type="date" />
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <p className='text-center mb-0'>To</p>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <input id="CompetitionEndDate" className="form-control" type="date" />
                                                                            <button type="button" class="btn btn-sm btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
                                                                                <div class="handle"></div>
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="Re-runofcompetition?">Re-run of competition?</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className="form-check form-switch">
                                                                                <input className="form-check-input" type="checkbox" id="Re-runofcompetition?" />
                                                                                
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            
                                                                        </div>
                                                                        <div className='col-md-4'>
                                                                            <div className=" ">
                                                                                <input className="form-control" type="text" id="Re-runofcompetition?" placeholder='Competition Reference' />
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="CompetitionFormat">Competition Format</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                    <div className='row align-items-center'>
                                                                        <div className='col-md-4'>
                                                                            <div className="form-check form-switch">
                                                                                <input className="form-check-input" type="checkbox" id="CompetitionFormat" />
                                                                                
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="InputTag">Tags</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                   
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="DifficultyGroup">Difficulty Group</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                   
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="GradesParticipating">Grades Participating</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                   
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4'>
                                                                <div className='mb-4'>
                                                                    <label htmlFor="CompetitionInstructions">Competition Instructions</label>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-8'>
                                                                <div className='mb-4'>
                                                                   
                                                                    
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