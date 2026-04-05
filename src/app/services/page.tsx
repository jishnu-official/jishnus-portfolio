import React from 'react';

const Services: React.FC = () => {
    return (
        <div>
            <h1>Our Services</h1>
            <div>
                <h2>Service Offerings</h2>
                <ul>
                    <li>
                        <h3>Web Development</h3>
                        <p>We offer custom web development services tailored to your needs.</p>
                    </li>
                    <li>
                        <h3>SEO Optimization</h3>
                        <p>Enhance your online presence with our SEO optimization services.</p>
                    </li>
                    <li>
                        <h3>Digital Marketing</h3>
                        <p>Boost your brand with our comprehensive digital marketing strategies.</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Benefits</h2>
                <p>Our services come with numerous benefits including:</p>
                <ul>
                    <li>Increased visibility</li>
                    <li>Enhanced customer engagement</li>
                    <li>Improved conversion rates</li>
                    <li>Customized solutions</li>
                </ul>
            </div>
            <div>
                <h2>Packages</h2>
                <ul>
                    <li>
                        <h3>Basic Package</h3>
                        <p>Includes basic web development services.</p>
                    </li>
                    <li>
                        <h3>Standard Package</h3>
                        <p>Includes web development and SEO services.</p>
                    </li>
                    <li>
                        <h3>Premium Package</h3>
                        <p>Includes all services with advanced features and support.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Services;