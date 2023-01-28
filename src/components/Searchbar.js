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
    <Paper
      id="Searchbar"
      component="form"
      sx={{ 
        margin: '0.25rem 40px',
        padding: '0.5rem',
        display: 'flex', 
        width: 'calc(100% - 80px)',
        backgroundColor: 'background.paper' ,
        borderRadius: '50px',
        alignItems: 'center'
      }}
    >
      <SearchIcon sx={{ ml: 1, color: "text.secondary" }} />

      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search products, categories, + users..."
        value={inputText}
        onChange={onChangeInputText}
      />
    </Paper>
  );
};

export default Searchbar;
