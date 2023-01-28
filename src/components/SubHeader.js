import Searchbar from './Searchbar';
import CategoryFilters from './CategoryFilters';

import { Box } from '@mui/material';

const SubHeader = ({handleFilterClick}) => {
  return (
    <Box
      id="Subheader"
      sx={{
        padding: "1rem 0",
        position: "sticky",
        top: "64px",
        zIndex: 1,
        bgcolor: "background.paper"
      }}
    >
      <Searchbar />
      <CategoryFilters handleFilterClick={handleFilterClick}/>
    </Box>
  )
}

export default SubHeader;