import React from 'react'
import SiteWidth from '../components/siteWidth'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProductTile from '../components/productTile'

const Product = ({ pageContext }) => {
    const { product } = pageContext
    return (
        <Layout>
          <Seo title={product.title} />
            <SiteWidth>
                <ProductTile product={product} productPage />
            </SiteWidth>
        </Layout>
    )
}
 
export default Product