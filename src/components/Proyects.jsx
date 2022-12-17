import React from 'react';
import '../styles/proyects.css';
import ecommerceImage from '../assets/imagesProyects/E-commerce.png';
import rickAndMortyImage from '../assets/imagesProyects/rick-and-morty.png';
import pokedexImage from '../assets/imagesProyects/pokedex.png';
import ecommerceWithReactImage from '../assets/imagesProyects/e-commerce-with-react.png';
import coverVideo from '../assets/videos/cover-video-proyects.mp4';

const Proyects = ({ scrollHeight, id }) => {
    return (
        <div className='proyects-container' id={id}>
            {/* <video className='video-proyects' src={coverVideo} autoPlay loop muted /> */}
            <h1>Proyects</h1>
            <ul className='proyects-section'>
                <li className={`proyect-item proyect-item-left ${scrollHeight > 1600 ? 'proyect-visible-left' : ''}`}>
                    <div className='section'>
                        <img src={ecommerceImage} alt="" className='image-proyect' />
                        <div className='hover'>
                            <h2>E-Commerce</h2>
                            <p>Proyecto Realizado para la compra de productos</p>
                            <div className='btn-link-proyect'>
                                <a href='https://e-commerce-academlo.netlify.app/' target='_blank'>
                                    Ver Proyecto
                                </a>
                                <a href='https://github.com/leonel1741/e-commerce' target='_blank'>Ver Repositorio</a>
                            </div>
                        </div>
                    </div>
                </li>

                <li className={`proyect-item proyect-item-right ${scrollHeight > 1800 ? 'proyect-visible-right' : ''}`}>
                    <div className='section'>
                        <img src={rickAndMortyImage} alt="" className='image-proyect' />
                        <div className='hover'>
                            <h2>Rick And Morty</h2>
                            <p>Proyecto Realizado para ver a los personajes de la serie </p>
                            <div className='btn-link-proyect'>
                                <a href='https://rick-and-morty-app-leonel.netlify.app/' target='_blank'>
                                    Ver Proyecto
                                </a>
                                <a href="https://github.com/leonel1741/rick-and-morty" target='_blank'>Ver Repositorio</a>
                            </div>
                        </div>
                    </div>
                </li>

                <li className={`proyect-item proyect-item-left ${scrollHeight > 2000 ? 'proyect-visible-left' : ''}`}>
                    <div className='section'>
                        <img src={pokedexImage} alt="" className='image-proyect' />
                        <div className='hover'>
                            <h2>Pokedex</h2>
                            <p>Proyecto Realizado para explorar a todos los pokemones</p>
                            <div className='btn-link-proyect'>
                                <a href='https://pokedex-with-pokeapi.netlify.app/' target='_blank'>
                                    Ver Proyecto
                                </a>
                                <a href="https://github.com/leonel1741/pokedex-app" target='_blank'>Ver Repositorio</a>
                            </div>
                        </div>
                    </div>
                </li>

                <li className={`proyect-item proyect-item-right ${scrollHeight > 2200 ? 'proyect-visible-right' : ''}`}>
                    <div className='section'>
                        <img src={ecommerceWithReactImage} alt="" className='image-proyect' />
                        <div className='hover'>
                            <h2>E-Commerce-with-ReactJS</h2>
                            <p>Proyecto Realizado para la compra de productos con ReactJs</p>
                            <div className='btn-link-proyect'>
                                <a href='https://e-commerce-academlo-with-react.netlify.app/' target='_blank'>
                                    Ver Proyecto
                                </a>
                                <a href="https://github.com/leonel1741/e-commerce-with-react-academlo" target='_blank'>Ver Repositorio</a>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Proyects;