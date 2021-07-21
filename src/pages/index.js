import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SiteWidth from '../components/siteWidth'
import ProductTile from '../components/productTile'

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      nodes {
        title
        description
        id
        totalInventory
        handle
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



const stockCheckThenRenderProduct = (product) => {
  return (
    product.totalInventory ? <ProductTile key={product.id} product={product}/> : null
  )
}

const Index = ({ data }) => {
  return (
    <Layout>
      <SiteWidth>
      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}
        {data.allShopifyProduct.nodes.map(product => stockCheckThenRenderProduct(product))}
      </SiteWidth>
    </Layout>
  )
}
 
export default Index