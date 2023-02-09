import { useContext, useCallback, useState } from 'react';
import { Context } from '../App.js';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  const [inputText, setInputText] = useState('');
  const { setSearching } = useContext(Context);
  const { setSearchPattern } = useContext(Context);

  const onChangeInputText = useCallback((e) => {
    setInputText(e.target.value)
    inputText === "" ? setSearching(false) : setSearching(true)
    setSearchPattern(sanitizeSearchPattern(inputText));
  });

  const sanitizeSearchPattern = (searchWord) => {
    searchWord = searchWord.trim();
    let searchRegEx = new RegExp(searchWord, "i")
    return searchRegEx;
  };
  
  return (
    <Paper
      id="Searchbar"
      component="form"
      sx={{ 
        margin: '0.25rem 40px',
        padding: '0.5rem',
        display: 'flex', 
        width: 'calc(100% - 80px)',
        bgcolor: 'background.paper',
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
