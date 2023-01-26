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
        <IconButton onClick={onSubmitInput} sx={{ p: '0.8rem' }}>
          <SearchIcon sx={{padding: '0.8rem'}} />
        </IconButton>
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search Placeholder"
          value={inputText}
          onChange={onChangeInputText}
        />
      </Paper>
    </div>
  );
};

export default Searchbar;
