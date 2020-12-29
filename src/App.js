import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// COMPONENTS
import Header from './components/Header/Header'
import ActionBar from './components/ActionBar/ActionBar'
import CardsGroup from './components/CardsGroup/CardsGroup'
import BottomBar from './components/ActionBar/BottomBar'


import './App.scss'

// ACTIONS
import { getProducts } from './store/actions/products.actions'
import { getUser } from './store/actions/user.actions'

function App() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.stateProducts)
  const {user} = useSelector(state => state.stateUser)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getUser())
    //eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header user={user}/>
      <div className="container">
        <ActionBar />
        <CardsGroup products={products} user={user}/>
        <BottomBar />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
