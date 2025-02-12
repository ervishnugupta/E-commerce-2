import React from 'react'
import { useFilterContext } from '../Context/Filter_Context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filter_products, grid_view} = useFilterContext()

//   if(isLoading){
//     return <h1>Loading...</h1>
// }

  if(grid_view){
    return <GridView products ={filter_products}/>
  }

  if(grid_view === false){
    return <ListView products ={filter_products} />
  }

}

export default ProductList
