import './GoodsComponent.css';

function GoodsItem({img, availability, productname, price}) {
    return (
        <div className="goods-item">
            <div className="goods-item-img">
                <img src={img} alt="img"/>
            </div>            
            <div className="goods-description">
                <span className='sklad'>{availability}</span>
                <p className="googs-item-name">{productname}</p>
                <span className="goods-item-price">{price + ' Kč'}</span>
                <button type="button" className='goods-item-button'>
                    <i className='button-plus'>+</i>
                    Do studia
                </button>
            </div>
        </div>
    )
}

const GoodsList = ({products}) => {

    const elements = products.map(item => {
        const {id, ...itemProps} = item;
        return (
            <GoodsItem key={id} {...itemProps}/>
        )
    })

    return (
        <div className="goods-list">
            {elements}
        </div>
    )
}

export default GoodsList;