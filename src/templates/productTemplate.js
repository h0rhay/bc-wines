import React from 'react'
import SiteWidth from '../components/siteWidth'
import Layout from '../components/layout'
import ProductTile from '../components/productTile'

const Product = ({ pageContext }) => {
    const { product } = pageContext
    return (
        <Layout>
            <SiteWidth>
                <ProductTile product={product} productPage />
            </SiteWidth>
        </Layout>
    )
}
 
export default Product