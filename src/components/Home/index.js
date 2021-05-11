import { useState } from 'react';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar'

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar isOpen={isOpen} toggle={toggle} />
       </div>
    )
}
