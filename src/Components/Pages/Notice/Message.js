import React from 'react'
import Navbar from '../../Common/Navbar/Navbar';
function Message() {
    return (
        <>
        <Navbar/>
        <div className="row">
                   
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Write New Message</h3>
                        </div>
                       
                    </div>
                    <form className="new-added-form">
                    <div classname="text-centre" style={{marginLeft:'100px'}}>
                    <div className="row">
                    
                        <div className="col-xl-3 col-lg-6 col-12 form-group-1" >
                        <label>Send to</label>
                        <select className="select3 select2-hidden-accessible" data-select2-id="1" tabIndex="-1" aria-hidden="true">
                            <option value="" data-select2-id="3">Select </option>
                            <option value="1">Teacher</option>
                            <option value="1">Student</option>
                            
                        </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                    <label>standard</label>
                    <select className="select3 select2-hidden-accessible" data-select2-id="1" tabIndex="-1" aria-hidden="true">
                        <option value="" data-select2-id="3">Select</option>
                        <option value="1">1 </option>
                        <option value="1">2 </option>
                        <option value="2">3 </option>
                        <option value="3">4 </option>
                    </select>
                </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                        <label>Section</label>
                        <select className="select3 select2-hidden-accessible" data-select2-id="1" tabIndex="-1" aria-hidden="true">
                            <option value="" data-select2-id="3">Select</option>
                            <option value="1">A</option>
                            <option value="1">B</option>
                            <option value="2">C </option>
                            <option value="3">D</option>
                        </select>
                    </div>
                    </div>
                    </div>
                            <div className="col-10 form-group" style={{paddingTop:"50px"}}>
                                <label>Title</label>
                                <input type="text" placeholder="" className="form-control"/>
                            </div>
                            <div className="col-10 form-group">
                                <label>Recipient</label>
                                <input type="text" placeholder="" className="form-control"/>
                            </div>
                            <div className="col-10 form-group">
                                <label>Message</label>
                                <textarea className="textarea form-control" name="message" id="form-message" cols="10" rows="9"></textarea>
                            </div>
                            <div className="col-12 form-group mg-t-8">
                                <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark" style={{marginLeft:'356px'}}>Send</button>
                              
                            </div>
                        
                    </form>
                </div>
            </div>
        </div>
       
        </div>  
        </>
    )
}

export default Message
