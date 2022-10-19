import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import './style.css'
import ListProduct from './ListProduct';
import AddProduct from '../AddProduct'
import { Button } from 'antd';
import { Input } from 'antd';
const { Search } = Input;
Index.propTypes = {
    
};

function Index(props) {
    const [openAddCustom, setOpenAddCustom] = React.useState(false);

    const handleAddCustom = (rs)=>{
        setOpenAddCustom(rs)
    }
    return (
        <div className='odermain'>
             <div className='resultday infowarehouse  title'>
            <AddProduct  checkHide ={openAddCustom} checkClost = {handleAddCustom}></AddProduct>
            </div>
            <div className="title-page">
            
            </div>
            <div className="odermain">
                <div className="customer ">
                    <div className="customer-info ">
                    <div className='product'>
                        <div className="option">
                            
                        <Search className='search' placeholder="Search..."  enterButton />
                        <Button type="primary" onClick={()=>handleAddCustom(true)}>Thểm sản phẩm</Button>
                        </div>
                            
                            <ListProduct/>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Index;