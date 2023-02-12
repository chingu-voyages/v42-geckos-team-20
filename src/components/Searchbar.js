import { useContext, useCallback, useState } from 'react';
import { Context } from '../App.js';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ setSearchPattern }) => {
  // const [inputText, setInputText] = useState('');

  const { searching, setSearching, searchWord, setSearchWord } = useContext(Context);
  
  // const onChangeInputText = useCallback((e) => {
  //   let searchWord = "";
  //   searchWord += e.target.value;
  //   searchWord === "" ? setSearching(false) : setSearching(true)
  //   setSearchPattern(sanitizeSearchPattern(searchWord));
  // }, []);

  // const sanitizeSearchPattern = (searchWord) => {
  //   searchWord = searchWord.trim();
  //   let searchRegEx = new RegExp(searchWord, "i")
  //   return searchRegEx;
  // };
  function handleChange(event) {
    setSearchWord(event.target.value)
  }
  
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
        // value={inputText}
        // onChange={onChangeInputText}
        value={searchWord}
        onChange={handleChange}
      />
    </Paper>
  );
};

export default Searchbar;
