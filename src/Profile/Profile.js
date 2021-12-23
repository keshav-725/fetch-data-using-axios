import React, { useState, useEffect } from "react";
import $ from 'jquery';
import "./profile.css"
import shopping_cart from "../image/shopping-cart.webp"
import "./profile.css"

const Profile = () => {
    return (
        <div className="container">
            <div className="Profile">
                <div className="row">
                    <div className="col animated flipInX">
                        <img src={shopping_cart} width="500px" />
                    </div>
                    <div className="col">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div class="card" style={{ width: "100%",height:"500px", backgroundColor: "grey" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">Personal Equipments</h5>
                                            <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div class="card" style={{ width: "100%",height:"500px", backgroundColor: "grey" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">Technology</h5>
                                            <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div class="card" style={{ width: "100%", height:"500px",backgroundColor: "grey" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">Schools</h5>
                                            <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
