import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {duration: 3, type: "spring"}
  return (
    <div className={css.container}>

        {/* left Side */}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>

            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>
                    {" "}
                    Seedily say has suitable disposal and boy. 
                    Exercise joy man children</span>

            </div>
        </div>

    {/* midle side hero image */}
    <div className={css.wrapper}>

        {/* blue circle */}
        <motion.div
        initial={{bottom:"-6rem"}}
        whileInView={{bottom:"-10rem"}} 
        className={css.blueCircle}
        transition={transition}
        ></motion.div>


            <motion.img
            transition={transition}
            initial={{bottom:"-6rem"}}
            whileInView={{bottom:"-10rem"}} 


             src={HeroImg} alt="" width={600} />
            <div className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best Signut Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>

    </div>

    {/* right side */}
    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>

        </div>
    </div>

    </div>
  )
}

export default Hero