import { useContext, useState, useEffect } from "react";
import { Context } from '../App';

import { Pagination as Pages, Stack } from '@mui/material';

export default function Pagination() {
  const { products, setPageStart, setPageEnd } = useContext(Context);

  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(products.length / PER_PAGE);

  useEffect(() => {
    setPageStart((page * PER_PAGE) - PER_PAGE)
    setPageEnd((page * PER_PAGE) - 1)
  }, [page])

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
      <Pages 
        count={count} 
        page={page}
        onChange={handleChange}
        color="primary" 
        size="large"
      />
    </Stack>
  )
}