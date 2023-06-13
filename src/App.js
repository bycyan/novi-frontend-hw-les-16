import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            {/*<NavBar />*/}
            {/*<div className="content">*/}
            {/*    <Routes>*/}
            {/*        <Route exact path="/">*/}
            {/*            /!*<Home />*!/*/}
            {/*        </Route>*/}
            {/*        <Route path="/profile">*/}
            {/*            {isAuth ? <Profile /> : <Navigate to="/" />}*/}
            {/*        </Route>*/}
            {/*        <Route exact path="/signin">*/}
            {/*            <SignIn />*/}
            {/*        </Route>*/}
            {/*        <Route exact path="/signup">*/}
            {/*            <SignUp />*/}
            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</div>*/}

            <div>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/profile"
                            element={isAuth ? <Profile /> : <Navigate to="/" />}
                        />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
