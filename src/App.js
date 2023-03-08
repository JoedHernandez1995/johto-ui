import './App.css';

import Menu from './components/Menu';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Banks from './components/Banks';
import CreditCards from './components/CreditCards';
import Cycles from './components/Cycles';
import Home from './components/Home';
import Transactions from './components/Transactions';
import Users from './components/Users';
const App = () => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Routes>
                    <Route exact path="/" element={<Home></Home>} />
                    <Route exact path="/banks" element={<Banks></Banks>} />
                    <Route exact path="/creditCards" element={<CreditCards></CreditCards>} />
                    <Route exact path="/cycles" element={<Cycles></Cycles>} />
                    <Route exact path="/transactions" element={<Transactions></Transactions>} />
                    <Route exact path="/users" element={<Users></Users>} />
                </Routes>
                
            </Router>

            
        </div>
    );
}

export default App;