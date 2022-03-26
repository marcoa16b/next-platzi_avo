import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// esta es una pagina estatica

export const getStaticProps = async () => {
  
  const response = await fetch('https://next-platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()
  
  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
