import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import './style.css'
import ListCustomer from './ListCustomer';
import AddCustomer from '../AddCustomer'
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
            <AddCustomer  checkHide ={openAddCustom} checkClost = {handleAddCustom}></AddCustomer>
            </div>
            <div className="title-page">
            
            </div>
            <div className="odermain">
                <div className="customer ">
                    <div className="customer-info ">
                    <div className='product'>
                        <div className="option">
                            
                        <Search className='search' placeholder="Search..."  enterButton />
                        <Button type="primary" onClick={()=>handleAddCustom(true)}>Thểm khách hàng</Button>
                        </div>
                            
                            <ListCustomer/>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Index;