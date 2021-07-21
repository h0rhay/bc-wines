import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const Product = ({ pageContext }) => {
    const { product } = pageContext
    return (
        <div>
            {console.log(product)}
            <GatsbyImage image={getImage(product.images[0])} alt={product.title.toLowerCase()}/>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>£ {product.variants[0]['price']}</p>
            <p>SKU {product.variants[0]['sku']}</p>
            <p>Quantity available: {product.totalInventory}</p>
        </div>
    )
}
 
export default Product