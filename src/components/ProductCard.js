//component to display fetched data from server

import React from "react";
import { Card, Icon } from "semantic-ui-react";

function ProductCard({products}){

   

    const displayProducts = products.map((product) => (
        <Card
        key={product.id}
        image={product.image}
        header={product.title}
        meta={product.category}
        description={product.description}
        // extra={product.rating.map((rat) => {
        //     <p>{rat.rate}</p>
        // })}
      />
    ))

    return (
        <>
      {displayProducts}
        
        </>
    )
}

export default ProductCard;