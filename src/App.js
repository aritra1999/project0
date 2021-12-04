import { React, useEffect, useState } from 'react';

import Body from './Body.jsx';
import BodyMobile from './Body-mobile.jsx';

import Navbar from './Navbar.jsx';
import NavbarMobile from './Navbar-mobile.jsx';

import Social from './Social.jsx';

import SidebarMobile from './Leftbar-mobile.jsx';
import Sidebar from './Leftbar.jsx';

import Contact from './Contact.jsx';

const getDevice = () => {
	if(window.innerHeight === 720 && window.innerWidth === 1280)return "tablet";
	if(window.innerWidth < 700)return "mobile";
	if(window.innerWidth < 1200)return "tablet";
	if(window.innerWidth < 1700)return "laptop";
	return "bigscreen";
}


function App() {
	const [device, setDevice] = useState(getDevice());
	const updateMedia = () => {
		setDevice(getDevice());
	}

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	})

	
	
	if(device === "mobile"){
		
		return (
			<div className="App"> 
				<NavbarMobile />
				<div className="w-screen flex max-h-screen">	
					{/* <SidebarMobile /> */}
					<BodyMobile device={device} />
					<Contact />
				</div>
			</div>
		);
	}
	if(device === "tablet"){
		
		return (
			<div className="App"> 
				<Navbar />
				<div className="w-screen flex max-h-screen">	
					<SidebarMobile />
					<BodyMobile device={device} />
					<Social />
				</div>
			</div>
		);
	}
	if(device === "laptop"){
		
		return (
			<div className = "App">
				<Navbar />
				<div className="w-screen flex max-h-screen">				
					<SidebarMobile />
					<Body />
					<Social />
				</div>
			</div>
		);
	}
	if(device === "bigscreen"){
		
		return (
			<div className = "App">
				<Navbar />
				<div className="w-full flex max-h-screen">				
					<Sidebar /> 
					<Body />
					<Social />
				</div>
			</div>
		);
	}	
}

export default App;