import { useState } from 'react';
import './LeftMenu.css';

const LeftMenu = () => {

    const [collapse, setCollapse] = useState(true);

    const toggleCollapse = () => {
        setCollapse(!collapse)
    }

    const toggleArrow = collapse ? 'turnArrow' : '';

    return (
        <div className='list'>
            <div className="categorie">
                <i className="far fa-folder"></i>
                <a href='@'>Kategorie</a>
                <button className={`arrow-left ${toggleArrow}`} onClick={toggleCollapse}>                
                    <i className="fa fa-angle-left"></i>
                </button>                
            </div>
            {collapse && (<div className='toggleCollapse'>
                <div className="divider"></div>
                <div className="all-products">                    
                    <a href='@'>
                        <i className="fa fa-angle-left"></i>
                        Všechny produkty
                    </a>
                </div>
                <div className="divider"></div>
                <div className="list-item">
                    <a href='@'>Sedací soupravy</a>
                </div>
                <div className="list-item">
                    <a href='@'>Obývací stěny</a>
                </div>
                <div className="list-item">
                    <a href='@'>Křesla</a>
                </div>
                <div className="list-item">
                    <a href='@'>Lenošky</a>
                </div>
                <div className="list-item">
                    <a href='@'>Postele</a>
                </div>
            </div>)}
        </div>
    )
}

export default LeftMenu;