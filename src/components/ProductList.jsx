// export const ProductList = () => {
//   return (
//     <div>
//       <h2>Our Products</h2>
//       <div>
//         <h3>Laptop</h3>
//         <p>Price: $999</p>
//       </div>
//       <div>
//         <h3>Phone</h3>
//         <p>Price: $699</p>
//       </div>
//       <div>
//         <h3>Tablet</h3>
//         <p>Price: $499</p>
//       </div>
//     </div>
//   );
// };


export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
    },
    {
      id: 2,
      name: "Phone",
      price: 699,
    },
    {
      id: 3,
      name: "Tablet",
      price: 499,
    },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      {products.map((product) => {
        return (
            
         <div key={product.id}>
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
          </div>
          
        );
      })}
    </div>
  );
};



// const productElements = products.map((product) => {
//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// });

//  In the return {productElements}



// We can add the filter
// const productElements = products
//   .filter((product) => {
//     return product.price > 500;
//   })