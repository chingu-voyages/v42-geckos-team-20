import Searchbar from './Searchbar';
import CategoryFilters from './CategoryFilters';

import { Box } from '@mui/material';

const SubHeader = ({setSearchPattern, handleFilterClick}) => {
  return (
    <Box
      id="Subheader"
      sx={{
        padding: "2rem 0 1rem",
        position: "sticky",
        top: "64px",
        zIndex: 1,
        bgcolor: "background.paper"
      }}
    >
      <Searchbar setSearchPattern={setSearchPattern} />
      <CategoryFilters handleFilterClick={handleFilterClick} />
    </Box>
  )
}

export default SubHeader;