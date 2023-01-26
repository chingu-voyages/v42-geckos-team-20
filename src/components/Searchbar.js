import React, { useContext, useCallback, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Context} from '../App.js';

const Searchbar = ({setSearchPattern}) => {
  const {searching, setSearching} =useContext(Context)
  
  const onChangeInputText = useCallback((e) => {
    let searchWord ="";
    searchWord += e.target.value;
    setSearchPattern(sanitizeSearchPattern(searchWord));
    searchWord ==="" ? setSearching(false) : setSearching(true)
  }, []);

  const sanitizeSearchPattern = (searchWord)=>{
    searchWord = searchWord.trim();
    return searchWord;
  }
  
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
        <IconButton sx={{ p: '10px' }}>
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
