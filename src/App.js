import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './router/Routes';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Location from './components/pages/Location'
import Design from './components/pages/Design'
import Catering from './components/pages/Catering'
import AboutUs from './components/pages/AboutUs'
import ViewLocation from './components/pages/ViewLocation'
import MyAccount from './components/pages/MyAccount'
import MyProduct from './components/pages/MyProduct'
import './app.css';


function App() {
  const [data, setData] = useState({});

  const handleChange = (obj) => {
    setData(obj);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={Routes.home} exact component={Home} />
          <Route path={Routes.signUp} exact render={(props) => <SignUp handleChange={handleChange} data={data}  {...props} />} />
          <Route path={Routes.Login} exact render={(props) => <Login handleChange={handleChange} data={data}  {...props} />} />
          <Route path={Routes.account} exact render={(props) => <MyAccount handleChange={handleChange} data={data}  {...props} />} />
          <Route path={Routes.location} exact component={Location} />
          <Route path={Routes.design} exact component={Design} />
          <Route path={Routes.catering} exact component={Catering} />
          <Route path={Routes.AboutUs} exact component={AboutUs} />
          <Route path={Routes.viewLocation} exact component={ViewLocation} />
          <Route path={Routes.myProject} exact component={MyProduct} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Category</label>
// <select name="category" onChange={handleChange} >
//     <option value="1">Location</option>
//     <option value="2">Catering food</option>
//     <option value="3">Design</option>
// </select>

// <Route path={Routes.management} exact component={CateringFood} />
// <Route path={Routes.map} exact component={Map} />


//////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import '../../app.css'
// import './signUp.css'

// import serviceSupplier from '../../api/serviceSupplier';

// const SignUp = (props) => {
//     const initialSupplier = {
//         firstName: null,
//         lastName: "",
//         nameCompany: "",
//         email: false,
//         phone: '',
//         category: ''
//     };
//     const [Supplier, setSupplier] = useState(initialSupplier);

//     // const [obj,setObj]=useState('');

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setSupplier({ ...Supplier, [name]: value });
//     }
//     const onSubmit = () => {
//         let data = {
//             firstName: Supplier.firstName,
//             lastName: Supplier.lastName,
//             nameCompany: Supplier.nameCompany,
//             email: Supplier.email,
//             phone: Supplier.phone,
//             category: Supplier.category
//         }
//         console.log('data',)
//         try {
//             const { dataResponse } = serviceSupplier.create(data.category, 78, data)
//             console.log('dataResponse', dataResponse);
//             // setFetchedData(dataResponse)
//         } catch (e) {
//             console.log(e);
//             throw e;
//         }
//     };

//     // const newTutorial = () => {
//     //     setTutorial(initialTutorialState);
//     //     setSubmitted(false);
//     // };




//     // const onSubmit = e => {
//     //     e.preventDefault();
//     //     props.handleChange(obj)
//     //     console.log(obj)
//     //     // fetchData()
//     // }


//     // const fetchData = () => {
//     //     console.log('Data-fetch Supplier',Supplier)
//     //     

//     // };



//     return (
//         <div className="form-container">
//             <form onSubmit={onSubmit}>
//                 <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">First name</label>
//                 <input className="border py-2 px-3 text-grey-darkest" type="text" name="First name" onChange={handleChange} />

//                 <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Last name</label>
//                 <input className="border py-2 px-3 text-grey-darkest" type="text" name="Last name" onChange={handleChange} />

//                 <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Name Company</label>
//                 <input className="border py-2 px-3 text-grey-darkest" type="text" name="Name Company" onChange={handleChange} />

//                 <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Email</label>
//                 <input className="border py-2 px-3 text-grey-darkest" type="text" name="Email" onChange={handleChange} />

//                 <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Mobile number</label>
//                 <input className="border py-2 px-3 text-grey-darkest" type="tel" name="Mobile number" onChange={handleChange} />

//                 <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Category</label>
//                 <select name="category" onChange={handleChange} >
//                     <option value="1">Location</option>
//                     <option value="2">Catering food</option>
//                     <option value="3">Design</option>
//                 </select>


//                 <button type="submit" className="block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default SignUp

