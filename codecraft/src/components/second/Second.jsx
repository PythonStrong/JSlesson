import React from 'react'
import './second.css'
import { table, table2, table3 } from '../../assets'
import { FaArrowRight } from "react-icons/fa6";

export default function Second() {
    return (
        <div>
            {/* for table */}
            <div className='card_parent'>
                {/* 1 */}
                <div className='card'>
                    <div className='texts'>
                        <h1>Living Room</h1>
                        <div><button className='wait'><p>Shop Now</p><FaArrowRight /></button></div>
                    </div>
                    <img src={table} alt="" />
                </div>
                <div>
                    {/* 2 */}
                    <div className='card2'>
                        <div className='texts'>
                            <h1>Living Room</h1>
                            <div><button className='wait'><p>Shop Now</p><FaArrowRight /></button></div>
                        </div>
                        <img src={table2} width={'648px'} height={'319px'} alt="" />
                    </div>
                    {/* 3 */}
                    <div className='card3'>
                        <div className='texts'>
                            <h1>Living Room</h1>
                            <div><button className='wait'><p>Shop Now</p><FaArrowRight /></button></div>
                        </div>
                        <img src={table3} width={'648px'} height={'319px'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
