import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import NotValue from '../NotValue/'
import { AiFillCaretDown } from "react-icons/ai";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
Index.propTypes = {
    
};

function Index(props) {
    
    const dataArr = props.data || [];
    const[valueItem,setValue] = useState(dataArr[0] || '')
    const handleChange=(event)=>{
       
        setValue(event.target.value);

    }
   
    return (
        <div className="form-group">
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label={props.title}
                  value={valueItem}
                  onChange={handleChange}
                >
                {dataArr.map(tmp=>{
                    return (
                        <MenuItem key={tmp} style={{fontSize: '12px'}} value={tmp}>{tmp}</MenuItem>

                    )
                })}
                 
                 
                </Select>
              </FormControl>
            </Box>
            </div>
    );
    
}

export default Index;

