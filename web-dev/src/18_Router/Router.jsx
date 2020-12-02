import React, { Component, Fragment } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';



const Router = ( {children} ) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
)

export default Router;

