import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import imgnotproduct from'../../img/nottopproduct.svg';
import Select from '../Select'
Index.propTypes = {
    
};

function Index(props) {
    const arrInfoItem = [
        {title: "Sản phẩm dưới định mức",
        value: 0
        },
        {title: "Số tồn kho chi nhánh",
        value: 2
        },
        {title: "Giá trị tồn kho chi nhánh",
        value: 5
        }
    ]

    const arrSelect = ["Tất cả chi nhánh", "Chi nhánh mặc định"]

    const[checkSelect, setCheckSelect] = useState('')
    const[getValueSelect1, setValueSelect1] = useState('Tất cả chi nhánh')

    const handleSelect = (id)=>{
        if(checkSelect === id){
            setCheckSelect('')

        }else{
            setCheckSelect(id)

        }
    }
    const changeValue = (rs)=>{
        setValueSelect1(rs);
        setCheckSelect('')

    }
    
    return (
        <div className='resultday infowarehouse'>
            <div className="top-resultday">
                <h5>THÔNG TIN KHO</h5>
                <Select data = {arrSelect} />
            </div>
            <div className="bottom-oderpending list-warehouse-info">
                {arrInfoItem.map((tmp, index)=>{
                    return(
                        <div key={index} className="item-warehouse">
                            <div className="left-item-warehouse">
                                <p>{tmp.title}</p>
                                <h6>{tmp.value}</h6>
                            </div>
                            <IoMdArrowDropright className='icon-ware'/>
                        </div>
                    )
                })}
                
            
             

               
            </div>
        </div>
    );
}

export default Index;