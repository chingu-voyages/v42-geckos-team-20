import Searchbar from './Searchbar';
import CategoryFilters from './CategoryFilters';

import { Box } from '@mui/material';

const SubHeader = ({setSearchPattern,handleFilterClick}) => {
  return (
    <Box
      id="Subheader"
      sx={{
        mt: "80px",
        padding: "1rem 0",
        position: "sticky",
        top: "80px",
        zIndex: 1,
        bgcolor: "background.paper"
      }}
    >
      <Searchbar setSearchPattern={setSearchPattern}/>
      <CategoryFilters handleFilterClick={handleFilterClick}/>
    </Box>
  )
}

export default SubHeader;