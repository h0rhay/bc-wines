import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        description
        id
        totalInventory
        images {
          gatsbyImageData
        }
        variants {
          price
          weight
          productId
          id
          sku
          availableForSale
        }
      }
    }
  }
`

const Product = ({ product }) => {
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

const stockCheckThenRenderProduct = (product) => {
  return (
    product.totalInventory ? <Product key={product.id} product={product}/> : null
  )
}

const Index = ({ data }) => {
  return (
    <div>
      <h1>Beaucatcher Wines</h1>
      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}
      {data.allShopifyProduct.nodes.map(product => stockCheckThenRenderProduct(product))}
    </div>
  )
}
 
export default Index