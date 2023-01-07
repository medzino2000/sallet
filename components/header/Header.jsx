import React from 'react'
import Logo from '../../assets/Vector.png'
import CTA from './CTA/CTA'
import SABS from './SABS/SABS'
import SKILL from './SKILL/SKILL'
import TESTI from './TESTI/TESTI'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"



// import required modules
import { Pagination } from "swiper"

import Dich01 from '../../assets/dish 1.png'
import FB from '../../assets/facebook.png'
import IMG01 from '../../assets/img01.png'
import IMG02 from '../../assets/img02.png'
import IMG03 from '../../assets/img03.png'
import IMG04 from '../../assets/img04.png'
import IMG05 from '../../assets/img05.png'
import IMG06 from '../../assets/img06.png'
import IMG08 from '../../assets/img08.png'
import IN from '../../assets/instagram.png'
import Logow from '../../assets/logow.png'
import PH from '../../assets/phone.png'
import testimonial01 from '../../assets/testimonial01.png'
import testimonial02 from '../../assets/testimonial02.png'
import WH from '../../assets/whatsapp.png'
import Media from '../header/Media/Media'
import './header.css'


function Header() {

  const data = [
    {
      "src": PH,
      "link": ""
    },
    {
      "src": WH,
      "link": ""
    },
    {
      "src": IN,
      "link": ""
    },
    {
      "src": FB,
      "link": ""
    }
  ];

  return (
    <header id='header'>

      <nav>

        <div><img src={Logo} alt="" /></div>
        <div className="link-container">
          <ul>
            <li>
              <a href="#menu">menu</a>
            </li>
            <li>
              <a href="#about_us">about us</a>
            </li>
            <li>
              <a href="#our_location">our location</a>
            </li>
            <li>
              <a href="#our_cheffs">our cheffs</a>
            </li>
          </ul>
          <button className='toggel-menu'>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="hero_section_container">
        <div className="hero_section_left">
          <h1>
            Sallet
            <br />
            <span>Al Sayad</span>
            <br />
            Restaurent
          </h1>
          <p>Restaurant style Yogurt Mint Sauce is delicious <br />dip which is quick and easy to ...</p>

          <div className="cta_container">
            <CTA
              CtaClassName="cta_order"
              title="Order Now"
            />
            <CTA
              CtaClassName="cta_menu"
              title="Download The Menu"
            />
          </div>
          <div className="media_container">
            {
              data.map((item) => {
                return (
                  <Media
                    link={item.link}
                    src={item.src}
                  />
                )
              })
            }
          </div>
          <div className='lun-container'>
            <div>
              <h5>Lunch</h5>
              <p>1:00-03:00PM</p>
            </div>
            <div>
              <h5>Dinner</h5>
              <p>7:00-10:00PM</p>
            </div>
          </div>
        </div>

        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
          <SwiperSlide><img className='dich-01' src={Dich01} alt="" /></SwiperSlide>
        </Swiper>

      </div>
      <div className="meni">
        <SKILL
          SkillClassName="skill"
          title="Our Menu"
          name="Click To Download"
        />
      </div>
      <div className='about-us'>
        <SKILL
          SkillClassName="skill"
          title="Our Story"
          name="About Us"
        />
        <p className='aboutusp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sapiente! Libero sed repellat quam quos omnis doloremque qui quisquam corporis laborum quae iusto sequi ducimus modi assumenda, nobis expedita ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque pariatur architecto nihil, iure quam saepe recusandae natus eligendi omnis necessitatibus ea laborum officiis,<br /> voluptatem consequatur! Dolorem exercitationem voluptatibus nesciunt. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis velit illo cum odio minus eaque similique doloremque quisquam consequuntur iure, cumque mollitia numquam aliquid perspiciatis et voluptatem voluptas nesciunt nobis!</p>
      </div>
      <img className='image01' src={IMG01} alt="" />
      <img className='image02' src={IMG02} alt="" />
      <div className="loc">
        <SKILL
          SkillClassName="skill"
          title="Location"
          name="Where To Find Us"
        />
      </div>
      <img className='image03' src={IMG03} alt="" />
      <img className='image04' src={IMG04} alt="" />
      <a href="https://www.google.com/maps/place/%D8%B3%D9%84%D8%A9+%D8%A7%D9%84%D8%B5%D9%8A%D8%A7%D8%AF%E2%80%AD/@25.2360452,55.3017894,17.53z/data=!4m5!3m4!1s0x3e5f42d0063221dd:0x1f2c91aaccf83877!8m2!3d25.2361166!4d55.3036174" target="_blank" rel="noreferrer">
        <img className='image05' src={IMG05} alt="" />
      </a>



      <div className="testimonial">
        <SKILL
          SkillClassName="skill dif"
          title="testimonial"
          name="What They're Saying"
        />
      </div>

      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-711f53f8-a05b-4c2f-9ded-a74f5f302f57"></div>

      <img className='image06' src={IMG06} alt="" />

      

      <img className='image08' src={IMG08} alt="" />

      <div className="peri">
        <SABS />
      </div>

      <div className="kbl">
        <div className="log-med">
          <img src={Logow} alt="" />
          <div className="media_container">
            {
              data.map((item) => {
                return (
                  <Media
                    link={item.link}
                    src={item.src}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="cont">
          <h3>Contact</h3>
          <div>
            <span></span>
            <p>F1 - 320 Jeff Heights, Main Blvd, <br />
              Gulberg, Lahore, Pakistan</p>
          </div>
          <div>
            <span></span>
            <p>+92 - 300 - 115 - 222 -444 </p>
          </div>
          <div>
            <span></span>
            <p>support@yannal.com</p>
          </div>
        </div>
        <div className="supo">
          <h3>Suport</h3>
          <p>Faq</p>
          <p>Shipping & Returns</p>
          <p>Contact Us</p>
          <p>Our Partners</p>
        </div>
        <div className="Inf">
          <h3>Info</h3>
          <p>Dates</p>
          <p>Parties</p>
          <p>Brithdays</p>
          <p>Menu</p>
        </div>

      </div>




      <div className="hero_section_right"></div>


    </header>
  )
}

export default Header