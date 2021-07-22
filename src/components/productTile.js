import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const ProductTile = ({ product, productPage }) => (
  <div>
    {console.log(product)}
    <GatsbyImage
      image={getImage(product.images[0])}
      alt={product.title.toLowerCase()}
    />
    <h2>
      {productPage ? (
        product.title
      ) : (
        <Link to={`/wines/${product.handle}`}>{product.title}</Link>
      )}
    </h2>
    <p>{product.description}</p>
    <p>£ {product.variants[0].price}</p>
    <p>SKU {product.variants[0].sku}</p>
    <p>Quantity available: {product.totalInventory}</p>
    <button type="button">Buy this wine</button>
  </div>
);

ProductTile.propTypes = {
  product: PropTypes.object.isRequired,
  productPage: PropTypes.bool,
};

export default ProductTile;
