import { useContext } from "react";
import { Context } from '../App';

import { Button, Tabs } from '@mui/material';
 
const CategoryFilters = () => {
    const { activeCategory, setActiveCategory, categories } = useContext(Context);
 
    return (
        <Tabs
            value={activeCategory}
            onChange={(event) => setActiveCategory(event.target.value)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            indicatorColor="transparent"
        >
            <Button
                variant={activeCategory === "All" ? "contained" : "outlined"}
                value="All"
                onClick={() => setActiveCategory("All")}
                sx={{ 
                    minWidth: "fit-content", 
                    margin: 1
                }}
            >
                All
            </Button>

            {categories.map((category) => (
                <Button
                    variant={activeCategory === category ? "contained" : "outlined"}
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    sx={{ 
                        minWidth: "fit-content", 
                        margin: 1, 
                        borderRadius: "50px" 
                    }}
                >
                    {category}
                </Button>
            ))}
        </Tabs>
    )
}
 
export default CategoryFilters;