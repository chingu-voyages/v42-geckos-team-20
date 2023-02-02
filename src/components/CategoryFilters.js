import { useContext } from "react";
import { Context } from '../App';
import products from "../data/products.json";
import { Button, Tabs } from '@mui/material';
 
// get an array of categories from products json
const categories = products.map(product => product.categories).flat()
const uniqueCategories = [...new Set(categories)]
 
const CategoryFilters = () => {
    const { activeCategory, setActiveCategory } = useContext(Context);
 
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
                className="btn"
                value="All"
                onClick={() => setActiveCategory("All")}
                sx={{ 
                    minWidth: "fit-content", 
                    margin: 1
                }}
            >
                All
            </Button>

            {uniqueCategories.map((category) => (
                <Button
                    variant={activeCategory === category ? "contained" : "outlined"}
                    className="btn"
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