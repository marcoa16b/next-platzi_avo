import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

// esta es una pagina dinamica
// ya que es una pagina dinamica necesita obligatoriamente el 
// metodo getStaticPaths asi podra tener todas las paginas 
// necesarias de antemano.

export const getStaticPaths = async () => {
  const response = await fetch('https://next-platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    }
  }))
  
  return{
    paths,
    // incremental statyc generation
    // 404 for everything else.
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`https://next-platzi-avo.vercel.app/api/avo/${id}`)
  const product: TProduct = await response.json()
  
  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
