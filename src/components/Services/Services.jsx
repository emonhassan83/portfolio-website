import { AiOutlineArrowRight, AiFillCheckCircle } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <p>service icon</p>
                        <h3 className="services__title">Web<br />Designer</h3>
                    </div>

                    <span className="services__button">View More<AiOutlineArrowRight/></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <RxCross1 className='services__modal-close'/>

                            <h3 className="services__modal-title">Web<br />Designer</h3>
                            <p className="services__modal-description">Service with more than 6 month of experience. Providing quality work and delivering high-quality, user-centric design.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I create ux element interaction.</p>
                                </li>

                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <p>service icon</p>
                        <h3 className="services__title">Frontend <br />Developer</h3>
                    </div>

                    <span className="services__button">View More<AiOutlineArrowRight/></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <RxCross1 className='services__modal-close'/>

                            <h3 className="services__modal-title">Frontend <br />Developer</h3>
                            <p className="services__modal-description">Service with more than 6 month of experience. Providing quality work and delivering high-quality, user-centric design.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I create ux element interaction.</p>
                                </li>

                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <p>service icon</p>
                        <h3 className="services__title">Backend <br />Developer</h3>
                    </div>

                    <span className="services__button">View More<AiOutlineArrowRight/></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <RxCross1 className='services__modal-close'/>

                            <h3 className="services__modal-title">Backend <br />Developer</h3>
                            <p className="services__modal-description">Service with more than 6 month of experience. Providing quality work and delivering high-quality, user-centric design.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I create ux element interaction.</p>
                                </li>

                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <AiFillCheckCircle className='services__modal-icon'/>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;