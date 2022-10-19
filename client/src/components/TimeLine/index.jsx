import React from 'react';
import PropTypes from 'prop-types';
import ItemTimeLine from './ItemTimeLine';

Index.propTypes = {
    
};

function Index(props) {
    const data = [
        {
            title: 'Nguyễn Ngọc Huy vừa đăng nhập hệ thống',
            date: '12/05/2022 10:17:15'
        },
        {
            title: 'Nguyễn Ngọc Huy vừa thêm mới ứng dụng',
            date: '08/05/2022 20:30:01'
        },
        {
            title: 'Sàn TMÐT vừa thêm mới',
            date: '08/05/2022 20:30:00'
        },
        {
            title: 'Nguyễn Ngọc Huy vừa đăng nhập hệ thống',
            date: '09/05/2022 18:15:12'
        },
        {
            title: 'Nguyễn Ngọc Huy vừa đăng nhập hệ thống',
            date: '12/05/2022 07:03:17'
       
        },
        {
            title: 'Nguyễn Ngọc Huy vừa đăng nhập hệ thống',
            date: '12/05/2022 07:03:17'
       
        },
        {
            title: 'Nguyễn Ngọc Huy vừa đăng nhập hệ thống',
            date: '12/05/2022 07:03:17'
        },
        {
            title: 'Nguyễn Ngọc Huy vừa đăng nhập hệ thống',
            date: '12/05/2022 07:03:17'
       
        },
        {
            title: 'Nguyễn Ngọc Huy vừa đăng nhập hệ thống',
            date: '12/05/2022 07:03:17'
        }
    ]
    return (
        <div className='timeline'>
            <div className="top-resultday">
                <h5>HOẠT ĐỘNG GẦN ĐÂY</h5>
               
            </div>

            <div className="content-timeline">
                {data.map((tmp, index)=>{
                    return (
                        <ItemTimeLine key={index} tmp = {tmp}></ItemTimeLine>
                    )
                })}
                

            </div>
        </div>
    );
}

export default Index;