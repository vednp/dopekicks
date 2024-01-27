export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of the product',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the product',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description of the product',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Product Slug',
      options: {
        source: 'name',
        maxLength: 200, 
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200), 
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
  ],
}
