import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';
import SiteWidth from '../components/siteWidth';
import ProductTile from '../components/productTile';

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
`;

const stockCheckThenRenderProduct = (product) =>
  product.totalInventory ? (
    <ProductTile key={product.id} product={product} />
  ) : null;

const Index = ({ data }) => (
  <Layout>
    <Seo title="Homepage" />
    <SiteWidth>
      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}
      {data.allShopifyProduct.nodes.map((product) =>
        stockCheckThenRenderProduct(product)
      )}
    </SiteWidth>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
