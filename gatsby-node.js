// This file currently builds pages from the graphql data returned from the gatsby-source-shopify plugin

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allShopifyProduct {
                edges {
                  node {
                    title
                    handle
                    description
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
        }
    `)
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
        createPage({
            path: `/wines/${node.handle}`,
            component: path.resolve(`./src/templates/productTemplate.js`),
            context: {
                product: node
            }
        })
    })
}
