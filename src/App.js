import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import { NavBar, Homepage, Exchanges, Cryptocurrency, CryptoDetails,News } from './components';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <NavBar/>
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/cryptocurrencies" element={<Cryptocurrency />}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />}/>
              <Route exact path="/exchanges" element={<Exchanges />}/>
              <Route exact path="/news" element={<News/>}/>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color:'white', textAlign:'center'}}>
            Crypto Universe &copy; All rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Cryptocurrency</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
