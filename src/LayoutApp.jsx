import React from 'react'
import NavbarApp from './components/NavbarApp'
import MyCarousel from './components/MyCarousel'
import Product1 from './components/Product1'
import OfferZone from './components/OfferZone'
import CustomerBenefits from './components/CustomerBenefits'
import FooterApp from './components/FooterApp'

export default function LayoutApp() {
  return (
    <>
      <NavbarApp />
      <MyCarousel />
      <OfferZone />
      <Product1 />
      <CustomerBenefits />
      <FooterApp />
    </>
  )
}

