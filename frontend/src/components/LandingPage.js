import React, { useEffect } from 'react';
import './Slider.scss';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    useEffect(() => {
        const header = document.getElementById('myHeader');
        const page = document.getElementById('page');
        const openMenuButton = document.getElementById('openmenu');

        const handleScroll = () => {
            page.classList.remove('menuopen');
            if (window.scrollY >= 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);

        openMenuButton.addEventListener('click', () => {
            header.classList.remove('sticky');
            page.classList.add('menuopen');
        });

        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            openMenuButton.removeEventListener('click', () => {
                header.classList.remove('sticky');
                page.classList.add('menuopen');
            });

            links.forEach((link) => {
                link.removeEventListener('click', (event) => {
                    event.preventDefault();

                    const targetId = link.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        };
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div className='conta'>
            <header id="myHeader" className="">
                {/* <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.6 401.1">
                    <path fill="#fff" fillRule="evenodd" d="M502.8 0h211.8l-23 39.7-138.5 240L483 401H342.7L413 279.6 251.4 0h140.3L483 158.1 538.6 62 502.8 0Zm-201 279.6L140.1 0H0l231.7 401 70-121.4Z" />
                </svg> */}
                <img alt="img" id="logo" src='https://cdn.discordapp.com/attachments/1170293654896787498/1204471233727692850/image.png?ex=65d4da40&is=65c26540&hm=619cb1f1107bb16f8b45950a05753aeb8cb1e6d3c12190b5c9343133989cd5e5&' height="50" width="32" />
                <nav>
                    <a href="#vision">Home</a>
                    <a href="#knowledge">AI Stylist</a>
                    <a href="#space">Marketplace</a>
                    <a href="#future">Contact US</a>
                    <button id="openmenu">
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
            <div id="page" className="">
            <section id="vision" style={{ 
    backgroundImage: "url(https://cdn.discordapp.com/attachments/1170293654896787498/1204389803517542480/Vision.jpg?ex=65d48e69&is=65c21969&hm=4ca24da7accd6e997030fb0dfc85048ae20c614806518e5a24c8464aca859681&)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}}>
    <h1>Charm</h1><h1 className='pink'>è</h1><h1>.</h1>
</section>

<section id="knowledge" style={{ 
    backgroundImage: "url(https://cdn.discordapp.com/attachments/1169346758636224614/1204509432067792916/image.png?ex=65d4fdd3&is=65c288d3&hm=fa6be7d5bb223e8d3bef5fd6cd8cdbed9d52d1cc41341e92ff1be086e8d970eb&)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}}>
    <h2>Generate your Style.</h2>
    <Link to='AiStylist' class="button-52" role="button">AI Stylist</Link>

</section>

                <section id="space">
                    <h2>Marketplace</h2>
                    <div className="card-container">
                        <div className="card">
                            <img src="https://cdn.discordapp.com/attachments/1170293654896787498/1204478434047164537/istockphoto-876424182-612x612.jpg?ex=65d4e0f4&is=65c26bf4&hm=70bf9c943590d99ddd7d1f33d8abddd8765368ad0e9c500bca83d6e696dab401&" alt="Gota 1" />
                            <div className="card-content">
                                <h3>Plain Shirts</h3>
                                <p>₹ 100</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://cdn.discordapp.com/attachments/1170293654896787498/1204478466356019260/riddhi-fashion-men-shirt-casual-shirts-navy-blue02-xl-trendy-shirts-men-shirts-shirts-casual-shirt-cotton-shirts-shirt-men-shirt-product-images-rvnszwuiph-0-202211101117.webp?ex=65d4e0fc&is=65c26bfc&hm=de0a1fea382f62967daef04e54633e2a6c78cd32ab87d98fae7def498e6f55ba&" alt="Gota 2" />
                            <div className="card-content">
                                <h3>Checked Shirts</h3>
                                <p>₹ 130</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://cdn.discordapp.com/attachments/1170293654896787498/1204478706199040161/1000_F_275805702_NZRGGlVw1qTQ3DlUXquMgboRJYp8cxWp.jpg?ex=65d4e135&is=65c26c35&hm=c9f48e9f43dcb054381625f464a1ab75361104c0e4f3e882593e68609ace0c84&" alt="Gota 3" />
                            <div className="card-content">
                                <h3>Kurtis</h3>
                                <p>₹ 120</p>
                            </div>
                        </div>
                        
                    </div>
                    <Link to='/marketplace' class="button-57" role="button"><span class="text">See More</span><span>Let's Go!</span></Link>
                    
                </section>
                <section id="future" style={{ 
                    backgroundImage: "url(https://assets.codepen.io/214624/future.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
            }}>
                    <h2>Contact Us</h2>
                    <form className='contactform'>
                        <input className='cont-text' type="text" placeholder="Name" />
                        <input className="email-text" type="email" placeholder="Email" />
                        <textarea className='message-text ' placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;
