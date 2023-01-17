import products from "../data/products.json";
import Button from '@mui/material/Button';
import "./categoryFilters.css";


const CategoryFilters = ({handleFilterClick}) => {

    const productCategories = []

    for(let product of products) {
        for (let category of product.categories) {
            if (!productCategories.includes(category)) {
                productCategories.push(category)
            }
        }
    }


    return (
        <div id="Category-buttons">
            {productCategories.map(category => 
            <Button variant="outlined" color="info" className="btn" key={category} href="#" onClick={handleFilterClick} >
                {category}
            </Button>
            )}
        </div>
    )

}

export default CategoryFilters;