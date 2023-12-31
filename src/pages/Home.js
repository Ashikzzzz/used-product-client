import React from 'react'
import Banner from '../components/Banner'
import Advertised from '../components/Advertised'
import Categories from '../components/Categories'
import Review from '../components/Review'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Advertised></Advertised>
        <Categories></Categories>
        <Review></Review>
        <Faq></Faq>
    </div>
  )
}

export default Home