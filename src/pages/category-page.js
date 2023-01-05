import Tabs from "../components/TabsComponent/TabsComponent";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import SubCategoryList from "../components/SubCategory/SubCategory";
import GoodsList from "../components/GoodsComponent/GoodsComponent";
import products from '../components/GoodsComponent/goods.json';
import data from '../components/SubCategory/subcategoryitems.json';
import './category-page.css';

const CategoryPage = () => {
    return (
        <div className="container">
            <Tabs />
            <div className="row wrapper">
                <div className="col-3 left-menu">
                    <LeftMenu/>
                </div>                
                <div className="col-12 col-lg-9 col-md-9 col-sm-12 main-content">
                    <div className="sofas">                        
                        <a href='@'>
                            <i className="fa fa-angle-left"></i>
                            Sedací soupravy
                        </a>                        
                        <div className="divider"></div>
                    </div>
                    <SubCategoryList data={data}/>
                    <GoodsList products={products}/>
                </div>                
            </div>            
        </div>
    )
}

export default CategoryPage;