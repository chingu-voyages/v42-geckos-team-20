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
    searchWord === "" ? setSearching(false) : setSearching(true)
    setSearchPattern(sanitizeSearchPattern(searchWord));
  }, []);

  const sanitizeSearchPattern = (searchWord)=>{
    searchWord = searchWord.trim();
    let searchRegEx = new RegExp(searchWord, "i")
    return searchRegEx;
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
              height: '2.8em',
            }}
      >
        <IconButton sx={{ p: '0.8rem' }}>
          <SearchIcon sx={{padding: '0.8rem'}} />
        </IconButton>
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search Placeholder"
          onChange={onChangeInputText}
        />
      </Paper>
    </div>
  );
};

export default Searchbar;
