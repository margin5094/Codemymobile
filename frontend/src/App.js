import {BrowserRouter, Route} from 'react-router-dom';
import {Cart} from './views/Cart';
import {Checkout} from './views/Checkout';
import {ProductDetail} from './views/ProductDetail';
import {ProductList} from './views/ProductList';
import {Signin} from './views/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>
              My Shop
            </a>
          </div>
          <div>
            <a href='/cart'>Cart</a>
            <a href='/signin'>Sign In</a>
          </div>
        </header>
        <main>
          <Route path='/cart/:id?' component={Cart} exact></Route>
          <Route path='/checkout' component={Checkout} exact></Route>
          <Route path='/signin' component={Signin}></Route>
          <Route path='/product/:id' component={ProductDetail} exact></Route>
          <Route path='/' component={ProductList} exact></Route>
        </main>
        <footer className='row center'>All rights reserved!</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
