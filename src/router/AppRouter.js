import React from 'react'
import { Redirect, Switch, BrowserRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import GifExperApp from '../GifExpertApp';
import { GifFavorite } from '../GifFavorite';


export const AppRouter = () => {

    return (
             <BrowserRouter basename={process.env.PUBLIC_URL}>
               
                    <Switch>
                    <Route exact path="/favorites" component={ GifFavorite } />
                    <Route exact path="/" component={ GifExperApp } />
                    <Redirect to="/" />
                    </Switch>

            </BrowserRouter> 
    );
}