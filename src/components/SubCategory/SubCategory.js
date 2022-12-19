import './SubCategory.css'

function SubCategoryItem({img, name}) {
    return (
        <div className='subcat-item'>
            <div className="subcat-item-img-box">
                <img src={img} alt="img" className='subcat-item-img'/>
            </div>            
            <p className="subcat-item-name">{name}</p>
        </div>
    )
}

const SubCategoryList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <SubCategoryItem key={id} {...itemProps}/>
        )
    })

    return (
        <div className='subcat-wrapper'>
            <h1 className="subcat-title">Nábytek</h1>
            <div className="subcat">
                {elements}
            </div>            
        </div>
    )
}

export default SubCategoryList;