import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import About from './components/about/About';
import Projects from './components/projects/Projects';
import slide1 from './img/slide-1.jpg';
import './style/App.scss';

function App() {

    const activeClass = "active";

    return (
        <Router>
            <div className="App">
                <section className="navigation-panel">
                    <div className="container">
                        <div className="logo-container">
                            <span className="logo-text">
                                Green Fair
                            <i className="fab fa-envira leaf-icon"></i>
                                <i className="fab fa-envira leaf-icon"></i>
                            </span>
                        </div>
                        <nav>
                            <NavLink exact={true} className="nav-link" activeClassName={activeClass} to="/">Home</NavLink> {/* exact заставляет искать полное свопадение url */}
                            <NavLink className="nav-link" activeClassName={activeClass} to="/about">About</NavLink>
                            <NavLink className="nav-link" activeClassName={activeClass} to="/projects">Projects</NavLink>

                            <a href="" className="nav-link">Achievement</a>
                            <a href="" className="nav-link">Event</a>
                            <a href="" className="nav-link">Testimonial</a>
                            <a href="" className="nav-link">Blog</a>
                            <a href="" className="nav-link">Contact us</a>
                        </nav>
                    </div>
                </section>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <div>
                            <section className="protect-nature">
                                <img src={slide1} className="slide-back" alt="slide-image" />
                            </section>

                            <section className="latest-work">

                                <div className="container sections-with-h2">
                                    <h2 className="text-header-2"> Our latest work</h2>
                                    <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <div className="tab-control">
                                        <button className="tab-button">Show all</button>
                                        <button className="tab-button">Environment</button>
                                        <button className="tab-button">Climate</button>
                                        <button className="tab-button">Photography</button>
                                        <button className="tab-button">Species</button>
                                    </div>

                                    <div className="tab-item active">

                                        <div className="work-case">
                                            <img src="https://img.rg.ru/img/content/178/22/40/kotik_d_850.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case">
                                            <img src="https://bipbap.ru/wp-content/uploads/2017/09/5114e7b13c84a77355cbec162ca7ff45.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz3Q19f_We3E0r-p_jxFm8cMB9DPBN2m3wFYhpo1bzHt4RTX1H" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case">
                                            <img src="https://medialeaks.ru/wp-content/uploads/2017/10/catbread-03-600x400.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                        <div className="work-case">
                                            <img src="https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-1-1.jpg" alt="" />
                                            <div className="case-description">
                                                <span>Sun Homes, Dhaka</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-item"></div>
                                    <div className="tab-item"></div>
                                    <div className="tab-item"></div>
                                    <div className="tab-item"></div>
                                </div>
                            </section>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
