export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of the product'
      },
      {
        name: 'image',
        type: 'array',
        title: 'Image of the product',
        of: [{type: 'image'}]
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description of the product'
      },
      {
          name: 'slug',
          type: 'string',
          title: 'Product Slug',
          options:{
            source: 'name',
          }
        },
        {
          name: 'price',
          type: 'number',
          title: 'Price'
        },
        {
          name: 'category',
          type: 'reference',
          title: 'Category',
          to: [{type: 'category'}]
        }
    ]
  }