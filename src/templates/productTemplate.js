import React from 'react';
import PropTypes from 'prop-types';
import SiteWidth from '../components/siteWidth';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ProductTile from '../components/productTile';

const Product = ({ pageContext }) => {
  console.log('pc', pageContext);
  const { product } = pageContext;
  return (
    <Layout>
      <Seo title={product.title} />
      <SiteWidth>
        <ProductTile product={product} productPage />
      </SiteWidth>
    </Layout>
  );
};

Product.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Product;
