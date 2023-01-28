import React, { useCallback, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  const [inputText, setInputText] = useState('');

  const onSubmitInput = useCallback(() => {
    console.log(inputText);
  }, [inputText]);
  
  const onChangeInputText = useCallback((e) => {
    setInputText(e.target.value);
  }, []);
  
  return (
    <div 
      id="Searchbar" 
      style={{ height: "fit-content" }}
    >
      <Paper
        component="form"
        sx={{ 
          margin: '0.25rem auto',
          padding: '0.5rem',
          display: 'flex', 
          width: '90%',
          backgroundColor: 'background.paper' ,
          borderRadius: '50px',
          alignItems: 'center'
        }}
      >
        <SearchIcon sx={{ ml: 1, color: "text.secondary" }} />

        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search products, categories, and users..."
          value={inputText}
          onChange={onChangeInputText}
        />
      </Paper>
    </div>
  );
};

export default Searchbar;
