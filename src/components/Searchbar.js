import React, { useCallback, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({setSearching, setSearchPattern}) => {

  
  const onSubmitInput = useCallback(() => {
    console.log("SEARCH button says: Hook me up OR not!")
  }, []);
  
  const onChangeInputText = useCallback((e) => {
    setSearching(true)
    let searchWord ="";
    searchWord += e.target.value;
    setSearchPattern(searchWord);
    searchWord ==="" ? setSearching(false) : console.log("still searhing")
  }, []);

  
  return (
    <div 
      id="Searchbar" 
      style={{ height: "fit-content" }}
    >
      <Paper
        component="form"
        sx={{ 
              margin: '0 auto',
              display: 'flex', 
              width: '85%', 
              backgroundColor: '#eeeee4' ,
              borderRadius: '10px',
              boxShadow: 'none',
            }}
      >
        <IconButton onClick={onSubmitInput} sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Placeholder"
          onChange={onChangeInputText}
        />
      </Paper>
    </div>
  );
};

export default Searchbar;
