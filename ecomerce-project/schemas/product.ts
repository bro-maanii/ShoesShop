export default {
    name: 'product', //through this name we call 
    type: 'document',
    title: 'Product', //this is shown on sanity 
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },{
        name:'images',
        type:'array',
        title:'Image of Product',
        of:[{type:'image'}]
      },{
        name:'description',
        type:'text',
        title:'Description of Product'
      },{
        name:'slug',
        type:'slug',
        title:'Product Slug',
        // make sanity to write slug as its own
        options:{
            source:'name',
        }
      },{
        name:'bprice',
        type:'number',
        title:'Product Before Price'
      },{
        name:'aprice',
        type:'number',
        title:'Product After Price'
      },{
        name:'category',
        title:'Product Category',
        type:"reference",
        to:[{
            type:'category'
        }]
      },{
        name: 'sale',
        type: 'string',
        title: 'Sale Avaliable(yes or no)',
        
      },{
        name:'price_id',
        type:'string',
        title:'Stripe Price Id'
      }
    ]
  }