import React, { Fragment,useState, useEffect } from 'react';
import Navbar from "../src/Home/navbar"
import Banner from "../src/Home/banner"
import About from "../src/Home/about"
import Contact from "../src/Home/contact"

import Footer from '../src/Home/footer'

export const Home=()=>(
  <Fragment>
             <Navbar/>
             <Banner/>
             <About/>
             <Contact/>
             <Footer/>
             
            </Fragment>
  )