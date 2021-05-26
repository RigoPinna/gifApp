import React from 'react'
import { Redirect, Switch, BrowserRouter, Route } from 'react-router-dom';
import GifExperApp from '../GifExpertApp';
import { GifFavorite } from '../GifFavorite';
import ReactGA from 'react-ga';


export const AppRouter = () => {
    ReactGA.initialize('G-YBM4R832NX'); // Aqui pones tu identificador de cuenta de Google Analytics
    ReactGA.event({
        category: 'Usuario',
        action: 'Cuenta creada'
    });
    history.listen(location => ReactGA.pageview(location.pathname));

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