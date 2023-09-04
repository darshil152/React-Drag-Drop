import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faAddressBook, faCalendarDays, faLock, faClock, faUser, faHome, faBagShopping, faGaugeHigh, faL } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar() {


    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isprofile, setProfile] = useState(false)
    const [isDashboard, setDashboard] = useState(false)
    const [isPlusMinus, setPlusMinus] = useState(false)
    const [isChartSimple, setChartSimple] = useState(false)
    const [isLogout, setLogout] = useState(false)
    const [overlay, setOverlay] = useState(false)



    const handleTrigger = () => {
        if (isOpen) {
            setIsOpen(!isOpen);

        } else {
            setIsOpen(!isOpen);

        }
    };

    const handleLogout = () => {
        localStorage.removeItem("Login");
        navigate("/signin");
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const profileEnter = () => {
        setProfile(true)
    }
    const PlusMinusEnter = () => {
        setPlusMinus(true)
    }
    const DashboardEnter = () => {
        setDashboard(true)
    }
    const ChartSimpleEnter = () => {
        setChartSimple(true)
    }
    const LogoutEnter = () => {
        setLogout(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const profileLeave = () => {
        setProfile(false)
    }
    const PlusMinusLeave = () => {
        setPlusMinus(false)
    }
    const DashboardLeave = () => {
        setDashboard(false)
    }
    const ChartSimpleLeave = () => {
        setChartSimple(false)
    }
    const LogoutLeave = () => {
        setLogout(false)
    }

    const show = () => {
        if (overlay) {
            document.getElementById('menu').style.left = "-270px"
            setOverlay(false)
        } else {
            setOverlay(true)
        }
    }

    return (
        <>
            <div className={overlay ? 'overlay' : 'overlay d-none'} id="overlay" onClick={show}></div>
            <div className='sidebar-main-section shadow' id="menu">
                <img src={logo} className='img-fluid ml-3 mt-3' width="200" height="75" alt="" />
                <div className="page m-3 ml-3">
                    <div className="my"></div>

                    <div className={`sidebar-backdrop ${isOpen ? "sidebar-backdrop--open" : ""}`} onClick={() => setIsOpen(false)}></div>

                    <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>

                        <Link className="d-flex mt-4 anchor3" to="/addproduct" onClick={() => setIsOpen(false)}>
                            <div className="sidebar-position" onMouseEnter={DashboardEnter}
                                onMouseLeave={DashboardLeave} title="">
                                {isDashboard ? <FontAwesomeIcon icon={faGaugeHigh} shake /> : <FontAwesomeIcon icon={faGaugeHigh} />}
                                <span>Add Product</span>
                            </div>
                        </Link>


                        <Link className="d-flex mt-4  anchor3" to="/events" onClick={() => setIsOpen(false)}>
                            <div className="sidebar-position" onMouseEnter={ChartSimpleEnter}
                                onMouseLeave={ChartSimpleLeave}>
                                {isChartSimple ? <FontAwesomeIcon icon={faCalendarDays} shake /> : <FontAwesomeIcon icon={faCalendarDays} />}
                                <span>Product</span>
                            </div>
                        </Link>

                        <Link className="d-flex mt-4 anchor3" to="/users" onClick={() => setIsOpen(false)}>
                            <div className="sidebar-position" onMouseEnter={PlusMinusEnter}
                                onMouseLeave={PlusMinusLeave}>
                                {isPlusMinus ? <FontAwesomeIcon icon={faUser} shake /> : <FontAwesomeIcon icon={faUser} />}
                                <span>Banners</span>
                            </div>
                        </Link>





                        <Link className="d-flex mt-4 anchor3" to="/admin">
                            <div className="sidebar-position" onMouseEnter={profileEnter}
                                onMouseLeave={profileLeave}>
                                {isprofile ? <FontAwesomeIcon icon={faLock} shake /> : <FontAwesomeIcon icon={faLock} />}
                                <span>Orders</span>
                            </div>
                        </Link>


                        <Link className="d-flex mt-4 anchor3" to="/timeslot" onClick={() => setIsOpen(false)}>
                            <div className="sidebar-position" onMouseEnter={ChartSimpleEnter}
                                onMouseLeave={ChartSimpleLeave}>
                                {isChartSimple ? <FontAwesomeIcon icon={faClock} shake /> : <FontAwesomeIcon icon={faClock} />}
                                <span>Return Orders</span>
                            </div>
                        </Link>



                        <Link className="d-flex  mt-4 anchor3" to="/contactdata"    >
                            <div className="sidebar-position" onMouseEnter={profileEnter}
                                onMouseLeave={profileLeave}>
                                {isprofile ? <FontAwesomeIcon icon={faAddressBook} shake /> : <FontAwesomeIcon icon={faAddressBook} />}
                                <span>Coupons</span>
                            </div>
                        </Link>

                        <Link className="d-flex mt-4 anchor3" to="/allorder"    >
                            <div className="sidebar-position" onMouseEnter={profileEnter}
                                onMouseLeave={profileLeave}>
                                {isprofile ? <FontAwesomeIcon icon={faBagShopping} shake /> : <FontAwesomeIcon icon={faBagShopping} />}
                                <span>Cart</span>
                            </div>
                        </Link>


                        <Link className="d-flex mt-4 anchor3" to="/allorder"    >
                            <div className="sidebar-position" onMouseEnter={profileEnter}
                                onMouseLeave={profileLeave}>
                                {isprofile ? <FontAwesomeIcon icon={faBagShopping} shake /> : <FontAwesomeIcon icon={faBagShopping} />}
                                <span>Users</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </div >
        </>
    )
}