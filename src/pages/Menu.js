import React from 'react';
import Footer from '../components/Footer';
import Menus from '../components/Menus';
const Menu = () => {
    return (
        <div className='d-grid gap-2 col-5 mx-auto'>
      <Menus/>
        <Footer />
    </div>
    );
};

export default Menu;