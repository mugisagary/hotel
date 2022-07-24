import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi,faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css"
function Header() {
 
    return (

        <div className="header">
            <div className='headerContainer'>
                <div className="headerList">
                    <div className="headerListItem Active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flihgts</span>
                    </div> 
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airtaxi</span>
                    </div>
                </div>

                <h1 className="headerTitle">
                    A lifetime of discounts? It's Genius At Summit Resort Hotel.
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels – unlock instant savings of 10% or
                    more with a free SummitBooking account
                </p>
                <button className='headerBtn'> Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="where are you going " className="headerSearchInput">
                        </input>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                       <span className="headerSearchText">date to date</span>
                    </div>
 
                     <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                       <span className="headerSearchItem">2 adults 2 children 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                   <button className="headerBtn">search</button>
                   </div>
                    </div>
                </div>
            </div>
    



    );
}

export default Header;