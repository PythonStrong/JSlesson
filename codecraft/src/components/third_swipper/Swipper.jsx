import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { FaArrowRight, FaStar } from 'react-icons/fa6';
import { product, table2 } from '../../assets';
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyBillAlt, FaPhoneAlt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";



export default function Swipper() {
    const [value, setValue] = useState('');

    const click = () => {
        setValue("Adedd");
    }
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "90%", margin: 'auto' }}>
                <h1>New <br /> Arrivals</h1>
                <div><button className='ok'><p>More Products</p><FaArrowRight /></button></div>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
 

                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {/* 1 */}
                <SwiperSlide>
                    <div className='swip'>
                        <div className='back'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', marginLeft: '10px', marginTop: '10px' }}>
                                    <button className='but'>New</button>
                                    <button className='but2'>-50%</button>
                                </div>
                                <div>
                                    <CiHeart className='heart' />
                                </div>
                            </div>
                            <img src={product} alt="" />
                            <div>
                                <button className='btn type1'></button>
                            </div>
                        </div>
                        <div className='texts'>
                            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <h4>Loveseat Sofa</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><h4 style={{ color: "#000" }}>$199.00</h4><h4 style={{ color: "#6C7275", textDecoration: 'line-through' }}>$400.00</h4></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className='swip'>
                        <div className='back'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', marginLeft: '10px', marginTop: '10px' }}>
                                    <button className='but'>New</button>
                                    <button className='but2'>-50%</button>
                                </div>
                                <div>
                                    <CiHeart className='heart' />
                                </div>
                            </div>
                            <img src={product} alt="" />
                            <div>
                                <button className='btn type1'></button>
                            </div>
                        </div>
                        <div className='texts'>
                            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <h4>Loveseat Sofa</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><h4 style={{ color: "#000" }}>$199.00</h4><h4 style={{ color: "#6C7275", textDecoration: 'line-through' }}>$400.00</h4></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className='swip'>
                        <div className='back'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', marginLeft: '10px', marginTop: '10px' }}>
                                    <button className='but'>New</button>
                                    <button className='but2'>-50%</button>
                                </div>
                                <div>
                                    <CiHeart className='heart' />
                                </div>
                            </div>
                            <img src={product} alt="" />
                            <div>
                                <button className='btn type1'></button>
                            </div>
                        </div>
                        <div className='texts'>
                            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <h4>Loveseat Sofa</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><h4 style={{ color: "#000" }}>$199.00</h4><h4 style={{ color: "#6C7275", textDecoration: 'line-through' }}>$400.00</h4></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <div className='swip'>
                        <div className='back'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', marginLeft: '10px', marginTop: '10px' }}>
                                    <button className='but'>New</button>
                                    <button className='but2'>-50%</button>
                                </div>
                                <div>
                                    <CiHeart className='heart' />
                                </div>
                            </div>
                            <img src={product} alt="" />
                            <div>
                                <button className='btn type1'></button>
                            </div>
                        </div>
                        <div className='texts'>
                            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <h4>Loveseat Sofa</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><h4 style={{ color: "#000" }}>$199.00</h4><h4 style={{ color: "#6C7275", textDecoration: 'line-through' }}>$400.00</h4></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 5 */}
                <SwiperSlide>
                    <div className='swip'>
                        <div className='back'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', marginLeft: '10px', marginTop: '10px' }}>
                                    <button className='but'>New</button>
                                    <button className='but2'>-50%</button>
                                </div>
                                <div>
                                    <CiHeart className='heart' />
                                </div>
                            </div>
                            <img src={product} alt="" />
                            <div>
                                <button className='btn type1'></button>
                            </div>
                        </div>
                        <div className='texts'>
                            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <h4>Loveseat Sofa</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><h4 style={{ color: "#000" }}>$199.00</h4><h4 style={{ color: "#6C7275", textDecoration: 'line-through' }}>$400.00</h4></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 6 */}
                <SwiperSlide>
                    <div className='swip'>
                        <div className='back'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', marginLeft: '10px', marginTop: '10px' }}>
                                    <button className='but'>New</button>
                                    <button className='but2'>-50%</button>
                                </div>
                                <div>
                                    <CiHeart className='heart' />
                                </div>
                            </div>
                            <img src={product} alt="" />
                            <div>
                                <button className='btn type1'></button>
                            </div>
                        </div>
                        <div className='texts'>
                            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <h4>Loveseat Sofa</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><h4 style={{ color: "#000" }}>$199.00</h4><h4 style={{ color: "#6C7275", textDecoration: 'line-through' }}>$400.00</h4></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 7 */}
                <SwiperSlide>
                    <div className='swip'>
                        <div className='back'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', marginLeft: '10px', marginTop: '10px' }}>
                                    <button className='but'>New</button>
                                    <button className='but2'>-50%</button>
                                </div>
                                <div>
                                    <CiHeart className='heart' />
                                </div>
                            </div>
                            <img src={product} alt="" />
                            <div>
                                <button className='btn type1'></button>
                            </div>
                        </div>
                        <div className='texts'>
                            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <h4>Loveseat Sofa</h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><h4 style={{ color: "#000" }}>$199.00</h4><h4 style={{ color: "#6C7275", textDecoration: 'line-through' }}>$400.00</h4></div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            {/* for cards  */}
            <div className='sim_parent'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'100px'}}>
                    {/* 1 */}
                    <div className='sim'>
                        <TbTruckDelivery size={50} />
                        <h2>Free Shipping</h2>
                        <h4>Order above $200</h4>
                    </div>
                    {/* 2 */}
                    <div className='sim'>
                        <FaMoneyBillAlt size={50} />
                        <h2>Money-back</h2>
                        <h4>30 days guarantee</h4>
                    </div>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'100px'}}>

                    {/* 3 */}
                    <div className='sim'>
                        <GrSecure size={50} />
                        <h2>Secure Payment</h2>
                        <h4>Secured by Stripe</h4>
                    </div>
                    {/* 4 */}
                    <div className='sim'>
                        <FaPhoneAlt size={50} />
                        <h2>24/7 Support</h2>
                        <h4>Phone and Email support</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
