import { Box, Container, useColorModeValue, Image, Icon, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import g from "./assets/g.png";
import Sharing from "./pages/Sharing/SharingHome";
import SharingPost from "./pages/Sharing/SharingPost";
import Subscription from "./pages/Subscription/SubscriptionHome";
import SelectSubscription from "./pages/Subscription/SelectSubscription";
import SelectBookLover from "./pages/Subscription/SelectBookLover";
import SelectBookReader from "./pages/Subscription/SelectBookReader";
import SelectBookWorm from "./pages/Subscription/SelectBookWorm";
import SelectBook from "./pages/Subscription/SelectBook";
import SelectBookSubscription from "./pages/Subscription/SelectBookSubscription"
import ManageSubscription from "./pages/Subscription/ManageSubscription";
import SelectLover from "./components/Subscription/SelectLover";
import SelectReader from "./components/Subscription/SelectReader"
import SelectWorm from "./components/Subscription/SelectWorm"

import { UserProvider } from "./context/userContext";
import { BooksProvider } from "./context/booksContext";
import { CartProvider } from "./context/cartContext";
import SharingHome from "./pages/sharing/SharingHome";
import PostRequest from "./pages/sharing/postrequest";
import ShareRequest from "./components/Sharing/ShareRequest";
import ShareBook from "./components/Sharing/ShareBook";
import ManageRequest from "./pages/sharing/ManageRequest"


import { UserProvider } from './context/userContext';

import { Account, Cart, Home, Login, ProductPage, Register, Shop } from "./pages";

import { Dashboard, Settings, Orders, Chat } from "./components/Account";

import { PrivateRoutes } from "./utils/privateRoutes";

// import {Account, Cart, Home, Login, ProductPage, Register, Shop} from "./pages";

// import {Dashboard, Settings, Orders, Chat} from "./components/Account";

const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="100%" cy="100%" r="100%" fill="hsla(1334, 86%, 52%, 0.2)" />
      {/* <circle cx="100%" cy="100%" r="100%" fill="hsla(343, 91%, 58%, 1)" /> */}
      <circle cx="85%" cy="43%" r="50%" fill="hsla(194, 89%, 52%, 0.2)" />
    </Icon>
  );
};
import AdminDashboard from "./pages/AdminDashboard";
import AdminNotifications from "./pages/AdminNotifications";
import AdminUserMgt from "./pages/AdminUserMgt";
import AdminShop from "./pages/AdminShop";
import AdminInventory from "./pages/AdminInventory";
import AdminDonations from "./pages/AdminDonations";
import AdminSubscriptions from "./pages/AdminSubscriptions";
import AdminSettings from "./pages/AdminSettings";


function App() {

  return (

    <Box>
      <Router>
      
        
        <UserProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/sharing" element={<Sharing />}></Route>
            <Route exact path="/sharingPost" element={<SharingPost />}></Route>
            <Route exact path="/subscriptions" element={<Subscription />}></Route>
            <Route exact path="/selectSubscription" element={<SelectSubscription />}></Route>
            <Route exact path="selectBook" element={<SelectBook />} ></Route>
            <Route exact path="/selectBookReader" element={<SelectBookReader />}></Route>
            <Route exact path="/selectBookWorm" element={<SelectBookWorm />}></Route>
            <Route exact path="/selectBook/:id" element={<SelectBookSubscription />}></Route>
            <Route exact path="/shop" element={<Shop />}></Route>
            <Route exact path="/shop/:id" element={<ProductPage />}></Route>
            <Route exact path="/cart/:userId" element={<Cart />}></Route>

          <Route exact path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route exact path="/adminnotifications" element={<AdminNotifications />}></Route>
          <Route exact path="/adminusermgt" element={<AdminUserMgt />}></Route>
          <Route exact path="/adminshop" element={<AdminShop />}></Route>
          <Route exact path="/admininventory" element={<AdminInventory />}></Route>
          <Route exact path="/admindonations" element={<AdminDonations />}></Route>
          <Route exact path="/adminsubscriptions" element={<AdminSubscriptions />}></Route>
          <Route exact path="/adminsettings" element={<AdminSettings />}></Route>
          <Route exact path="/sharingHome" element={<SharingHome />}></Route>
          
    
          <Route exact path="/PostRequest" element={<PostRequest />}>
          <Route index element={<ShareBook />} />
            <Route path="shareBook" element={<ShareBook/>} />
            <Route path="shareRequest" element={<ShareRequest />} />
            <Route path="ManageRequest" element={<ManageRequest />} />
          </Route> 

            
            <Route exact path="/account" element={<Account />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="orders" element={<Orders />} />

              <Route path="chat" element={<Chat />} />
            </Route>

            <Route exact path="/selectBookLover" element={<SelectBookLover />}>
              <Route index element={<SelectLover />} />
              <Route path="details" element={<SelectLover />} />
              <Route path="selectBook" element={<SelectBook />} />
              <Route path="manageSubscription" element={<ManageSubscription />} />
              <Route path="chat" element={<Chat />} />
            </Route>

            <Route exact path="/selectBookReader" element={<SelectBookReader />}>
              <Route index element={<SelectReader />} />
              <Route path="details" element={<SelectReader />} />
              <Route path="selectBook" element={<SelectBook />} />
              <Route path="manageSubscription" element={<ManageSubscription />} />
              <Route path="chat" element={<Chat />} />
            </Route>

            <Route exact path="/selectBookWorm" element={<SelectBookWorm />}>
              <Route index element={<SelectWorm />} />
              <Route path="details" element={<SelectWorm />} />
              <Route path="selectBook" element={<SelectBook />} />
              <Route path="manageSubscription" element={<ManageSubscription />} />
              <Route path="chat" element={<Chat />} />
            </Route>

          </Routes>
          <Footer />
        </UserProvider>
      </Router>
      


    </Box>
  );
}
// gg

export default App;
