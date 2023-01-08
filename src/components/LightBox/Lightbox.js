import App from '../../App';
import './Lightbox.css';

const Lightbox = ({isOpen, toggleIsOpen, Wrapper = 'div'}) => {

    const stopPropagation = (event) => {
        event.stopPropagation();
    }

    return (
        
        isOpen ?
            <Wrapper className='lightbox' onClick={toggleIsOpen}>
                <div className='lightbox-container' onClick={stopPropagation}>
                    <div className="lightbox-header">
                        <button className='close-button' onClick={toggleIsOpen}>                                
                            <i class="fa-thin fa-xmark"></i>
                        </button>
                        <div className="lightbox-choose-product">
                            <span>Vyberte produkt</span>
                        </div>
                    </div>
                    <div className="lightbox-content">
                        <div className="lightbox-header lightbox-header-small">
                            <button className='close-button' onClick={toggleIsOpen}>                                
                                <i class="fa-thin fa-xmark"></i>
                            </button>
                            <div className="lightbox-choose-product">
                                <span>Vyberte produkt</span>
                            </div>
                        </div>
                        <App/>
                    </div>
                </div> 
            </Wrapper>
            : null
        
    )
}

export default Lightbox;