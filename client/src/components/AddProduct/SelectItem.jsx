import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
SelectItem.propTypes = {
    
};

function SelectItem(props) {
    const[valueItem,setValue] = useState('')
    const data = props.data || [];
    const handleChange=(event)=>{
        props.handleValue(event.target.value)
        setValue(event.target.value);

    }
    return (
        <div className="form-group">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label={props.title}
                  value={valueItem}
                  onChange={handleChange}
                >
                {data.map(tmp=>{
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

export default SelectItem;