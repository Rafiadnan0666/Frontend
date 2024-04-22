import React from "react";

const DetailProduct = () => {
    return (
        <section className="section mt-5">
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <figure className="image is-4by3">
                            <img src="https://picsum.photos/800/600" alt="" />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="content">
                            <div className="title is-4">Product Title</div>
                            <div className="subtitle is-6">Product Subtitle</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo ad mollitia rem doloremque dolore enim numquam magnam omnis debitis itaque odit incidunt molestiae totam animi, nisi quidem, accusantium suscipit!
                            </p>
                            <p><strong>Price :</strong> 1.000.000</p>
                            <p>Stock</p>
                            <button className="button is-primary w-100">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailProduct;
