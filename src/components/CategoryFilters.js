import { useContext } from "react";
import { Context } from '../App';
import { Button, Tabs } from '@mui/material';
import "./categoryFilters.css";
import "../styles/Button.css";
 
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
                className="btn"
                value="All"
                onClick={() => setActiveCategory("All")}
                sx={{ minWidth: "fit-content", margin: 1 }}
            >
                All

            </Button>
            {categories.map((category) => (
                <Button
                    variant={activeCategory === category ? "contained" : "outlined"}
                    className="btn"
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    sx={{ minWidth: "fit-content", margin: 1 }}
                >
                    {category}
                </Button>
            ))}
        </Tabs>
    )
}
 
export default CategoryFilters;