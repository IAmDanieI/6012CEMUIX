import React from 'react';
import HeroImg from '../../img/HeroImg.png';
import '../../dist.css/Homepage.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import useFetch from '../../useFetch';


const Homepage = () => {
    const {data:featured1} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
    const {data:featured2} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908")
    const {data:featured3} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855")

    return (
        <>
            <div className="homepage__container">
                <div className="left__container ">
                    <motion.h1
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0  }}
                        transition ={{ duration: 1 ,delay: .5, type: 'spring'}}>
                        Easy Meals,     
                        Even Easier Life
                    </motion.h1>
                    
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0 }}
                            transition ={{ duration: 1 ,delay: .6, type: 'spring', ease: 'easeOut'}}>
                                <div className="left__buttons">
                                    <Link to="/meal-recipe-website-reactjs/find" className="find__btn btn">Find Meal</Link>
                                    <Link to="/meal-recipe-website-reactjs/random" className="random__btn btn"><i className='bx bxs-dice-5 bx-tada bx-rotate-90' ></i>Help Me Choose!</Link>
                                </div>
                        </motion.div>
                </div>

                <div className="right__container">
                <motion.img 
                    initial={{opacity: 0, y: 50}}
                    animate={{ scale: 1.1, opacity: 1, y: 0  }}
                    transition ={{ duration: 1 ,delay: .6, type: 'spring'}}
                    src={HeroImg} 
                    alt="HeroImage"
                />
                </div>
            </div>

            <motion.div 
                className="featured__section"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0 }}
                exit={{opacity: 0, y: 10}}
                transition={{duration: 1, delay: 1.6, ease: 'easeOut', type: 'spring', stiffness: '200'}}>

                <h1>Featured Meals</h1>
                <p>All our best meals in one delicious snap</p>

                <motion.div 
                    className="featured__container"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0 }}
                    exit={{opacity: 0}}
                    transition={{duration: .5, delay:1, ease: 'easeOut'}}>
                    {featured1 && 
                        featured1.map(featured1 => (
                            <div className="featured__meal" key={featured1.idMeal}>
                                <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay:1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                
                                    <Link to={`/meal-recipe-website-reactjs/meal/${featured1.idMeal}`} className="meal__item">
                                        <img src={featured1.strMealThumb} alt="" />
                                        <div className="meal__lowered">
                                            <h3>{featured1.strMeal}</h3>
                                            <p><i className='bx bx-map-alt' ></i>{featured1.strArea}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))
                    }
                    {featured2 && 
                        featured2.map(featured2 => (
                            <div className="featured__meal" key={featured2.idMeal}>
                                <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay:1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                    
                                    <Link to={`/meal-recipe-website-reactjs/meal/${featured2.idMeal}`} className="meal__item">
                                        <img src={featured2.strMealThumb} alt="" />
                                        <div className="meal__lowered">
                                            <h3>{featured2.strMeal}</h3>
                                            <p><i className='bx bx-map-alt' ></i>{featured2.strArea}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))
                    }
                    {featured3 && 
                        featured3.map(featured3 => (
                            <div className="featured__meal" key={featured3.idMeal}>
                                    <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 1, delay:1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                    
                                    <Link to={`/meal-recipe-website-reactjs/meal/${featured3.idMeal}`} className="meal__item">
                                        <img src={featured3.strMealThumb} alt="" />
                                        <div className="meal__lowered">
                                            <h3>{featured3.strMeal}</h3>
                                            <p><i className='bx bx-map-alt' ></i>{featured3.strArea}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </>
    );
}

export default Homepage;
