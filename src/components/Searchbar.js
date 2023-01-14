import React, { useCallback, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
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
    <>
    <Paper
      component="form"
      sx={{ 
            margin: '20px auto',
            display: 'flex', 
            maxWidth: '85%', 
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
        value={inputText}
        onChange={onChangeInputText}
      />
    </Paper>
    </>
  );
};

export default Searchbar;
