import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import SideBar from './components/side_bar';
import UserList from './components/user_list';
import TokenList from './components/token_list';
import PostList from './components/post_list';
import ReactDOM from 'react-dom/client';
import PostAdd from './components/post_add';
import ContactList from './components/contact_list';
import ContactReply from './components/post_reply';
import PartnerList from './components/partners_list';
import PartnerAdd from './components/partner_add';

function Main() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <UserList/>
              </div>
            </div>
          </Route>
          <Route exact path="/tokens">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <TokenList/>
              </div>
            </div>
          </Route>
          <Route exact path="/posts">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <PostList/>
              </div>
            </div>
          </Route>
          <Route exact path="/post_add">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <PostAdd/>
              </div>
            </div>
          </Route>
          <Route exact path="/contacts">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <ContactList/>
              </div>
            </div>
          </Route>
          <Route exact path="/reply_contact">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <ContactReply/>
              </div>
            </div>
          </Route>
          <Route exact path="/partners">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <PartnerList/>
              </div>
            </div>
          </Route>
          <Route exact path="/partner_add">
            <div className='page-fill'>
              <Header/>
              <div className="page-content">
                <SideBar/>
                <PartnerAdd/>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
