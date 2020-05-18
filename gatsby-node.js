exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      product: allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      collection: allShopifyCollection {
        edges {
          node {
            handle
          }
        }
      }
    }
  `)

  const productTemplate = require.resolve(`./src/templates/ProductPage/index.js`)
  const collectionTemplate = require.resolve('./src/templates/CollectionPage/index.js')

  if (result.errors) {
    return
  }
  
  result.data.product.edges.forEach(product => {
    
    createPage({
      path: `/product/${product.node.handle}/`,
      component: productTemplate,
      context: {
        handle: product.node.handle,
      },
    })
  })
  
  result.data.collection.edges.forEach(collection => {
    createPage({
      path: `/collection/${collection.node.handle}/`,
      component: collectionTemplate,
      context: {
        handle: collection.node.handle,
      },
    })
  })
}