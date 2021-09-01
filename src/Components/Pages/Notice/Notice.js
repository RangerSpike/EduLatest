import React from 'react'
import { NavLink} from 'react-router-dom';
import Navbar from '../../Common/Navbar/Navbar';
import './Notice.css'
function Notice() {
    return (  <>
        <Navbar/>       
        <div className="row">
                  
        <div className="col-4-xxxl col-12">
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Create A Notice</h3>
                        </div>
                        
               </div>
                    <form className="new-added-form">
                        <div className="row">
                            <div className="col-10-xxxl col-lg-5 col-12 form-group">
                                <label>Title</label>
                                <input type="text" placeholder="" className="form-control"/>
                            </div>
                            <div className="col-12-xxxl col-lg-5 col-12 form-group">
                                <label>Details</label>
                                <input type="text" placeholder="" className="form-control"/>
                            </div>
                            <div className="col-12-xxxl col-lg-5 col-12 form-group">
                                <label>Posted To </label>
                                <input type="text" placeholder="" className="form-control"/>
                               
                            </div>
                            <div className="col-12-xxxl col-lg-5 col-12 form-group">
                                <label>Date</label>
                                <input type="text" placeholder="" className="form-control air-datepicker"/>
                              
                            </div>
                            <div className="col-12 form-group mg-t-8">
                                <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>   
        <div className="col-8-xxxl col-12">
        <div className="card height-auto">
            <div className="card-body">
                <div className="heading-layout1">
                    <div className="item-title">
                        <h3>Notice Board</h3>
                    </div>
                    </div>
                <form className="mg-b-20">
                    <div className="row gutters-8">
                        <div className="col-lg-5 col-12 form-group">
                            <input type="text" placeholder="Search by Date ..." className="form-control"/>
                        </div>
                        <div className="col-lg-5 col-12 form-group">
                            <input type="text" placeholder="Search by Title ..." className="form-control"/>
                        </div>
                        <div className="col-lg-2 col-12 form-group">
                            <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                        </div>
                    </div>
                </form>
                <div className="notice-board-wrap">
                    <div className="notice-list">
                        <div className="post-date bg-skyblue">21 April, 2021</div>
                        <h6 className="notice-title"><NavLink to="#">
                        Dear Parents,

                        This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                            </NavLink></h6>
                    <div className="entry-meta">  zeeshan ulla baig / <span>5 min ago</span></div>
                    </div>
                    
                </div>
                <div className="notice-board-wrap">
                <div className="notice-list">
                    <div className="post-date bg-skyblue">21 April, 2021</div>
                    <h6 className="notice-title"><NavLink to="#">
                    Dear Parents,

                    This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                        </NavLink></h6>
                <div className="entry-meta">  zeeshan ulla baig / <span>5 min ago</span></div>
                </div>
                
            </div>
            <div className="notice-board-wrap">
            <div className="notice-list">
                <div className="post-date bg-skyblue">21 April, 2021</div>
                <h6 className="notice-title"><NavLink to="#">
                Dear Parents,

                This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                Dear Parents,

                This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                Dear Parents,

                This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                Dear Parents,

                This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                Dear Parents,

                This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                    </NavLink></h6>
            <div className="entry-meta">  zeeshan ulla baig / <span>5 min ago</span></div>
            </div>
            
        </div>
        <div className="notice-board-wrap">
        <div className="notice-list">
            <div className="post-date bg-skyblue">21 April, 2021</div>
            <h6 className="notice-title"><NavLink to="#">
            Dear Parents,

            This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
                </NavLink></h6>
        <div className="entry-meta">  zeeshan ulla baig / <span>5 min ago</span></div>
        </div>
        
    </div>
    <div className="notice-board-wrap">
    <div className="notice-list">
        <div className="post-date bg-skyblue">21 April, 2021</div>
        <h6 className="notice-title"><NavLink to="#">
        Dear Parents,

        This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
            </NavLink></h6>
    <div className="entry-meta">  zeeshan ulla baig / <span>5 min ago</span></div>
    </div>
    
</div>
<div className="notice-board-wrap">
<div className="notice-list">
    <div className="post-date bg-skyblue">21 April, 2021</div>
    <h6 className="notice-title"><NavLink to="#">
    Dear Parents,

    This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
        </NavLink></h6>
<div className="entry-meta">  zeeshan ulla baig / <span>5 min ago</span></div>
</div>



</div>
<div className="notice-board-wrap">
<div className="notice-list">
<div className="post-date bg-skyblue">21 April, 2021</div>
<h6 className="notice-title"><NavLink to="#">
Dear Parents,

This is to request you to join us for an online Orientation Programme for Classes VI to VIII on the 16th of April ’21 (Friday) from 10:00 a.m.  and for Classes IX and X on the 16th of April ’21 (Friday) from 12:00 noon via Zoom. It is imperative that at least one parent with the student attends the same.
    </NavLink></h6>
<div className="entry-meta">  zeeshan ulla baig / <span>5 min ago</span></div>
</div>

</div>
            </div>
        </div>
    </div>

        </>
    )
}

export default Notice
