import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import MeetNeighbors from '../components/MeetNeighbors';
import TheGames from '../components/TheGames';
import Team from '../components/Team';
import Faq from '../components/Faq';
import Copyright from '../components/Copyright';
import Artist from '../components/Artist';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection />
        <MeetNeighbors />
        <Team />
        <Faq />
        <Artist />
        <Copyright />
        </>
    );
};

export default Home;
