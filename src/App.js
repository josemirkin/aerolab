import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

// COMPONENTS
import Header from './components/Header/Header'
import ActionBar from './components/ActionBar/ActionBar'
import CardsGroup from './components/CardsGroup/CardsGroup'


import './App.scss'
import { getProducts } from './store/actions/products.actions'

function App() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.stateProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ActionBar />
        <CardsGroup products={products}/>
      </div>
    </div>
  );
}

export default App;
