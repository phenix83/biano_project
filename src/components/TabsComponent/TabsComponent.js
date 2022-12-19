import {NavLink} from 'react-router-dom';
import './TabsComponent.css';

const Tabs = () => {    

    return (
        <div className="btn-group">            
            <NavLink to="/" className="btn" >
                Kategorie
            </NavLink>
        
            <NavLink to="/favourites" className="btn">                    
                <i className="fa-regular fa-heart"></i>
                Oblíbené                    
            </NavLink>
            <NavLink to="/recomended" className="btn">
                <i className="fa-regular fa-star"></i>
                Doporučené
            </NavLink>
      </div>        
    )
}

export default Tabs;