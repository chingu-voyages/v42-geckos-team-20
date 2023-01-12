import products from "../data/products.json";
import Button from '@mui/material/Button';


const CategoryFilters = () => {

    const productCategories = []

    for(let product of products) {
        for (let category of product.categories) {
            if (!productCategories.includes(category)) {
                productCategories.push(category)
            }
        }
    }


    return (
        <div>
            {productCategories.map(category => 
            <Button variant="outline" key={category}>
                {category}
            </Button>
            )}
        </div>
    )

}

export default CategoryFilters;