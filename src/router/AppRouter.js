import React from 'react'
import { Redirect, Switch, BrowserRouter, Route } from 'react-router-dom';
import GifExperApp from '../GifExpertApp';
import { GifFavorite } from '../GifFavorite';



export const AppRouter = () => {
    

    return (
             <BrowserRouter>
               
                    <Switch>
                    <Route exact path="/favorites" component={ GifFavorite } />
                    <Route exact path="/" component={ GifExperApp } />
                    <Redirect to="/" />
                    </Switch>

            </BrowserRouter> 
    );
}