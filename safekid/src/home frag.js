import React, { Fragment,useState, useEffect } from 'react';
import Navbar from "./Home/navbar"
import Banner from "./Home/banner"
import About from "./Home/about"
import Contact from "./Home/contact"

import Footer from './Home/footer'

export const Home=()=>(
  <Fragment>
             <Navbar/>
             <Banner/>
             <About/>
             <Contact/>
             <Footer/>
             
            </Fragment>
  )