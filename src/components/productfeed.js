import React from 'react'
import Product from './product';

function Productfeed({products}) {
    return (
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {products.slice(0, 4).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
        <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
          alt=""
        />
        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
        {products.slice(5, products.length).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    );
}

export default Productfeed;