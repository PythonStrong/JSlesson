import React from 'react'
import './sofa.css'
import { table } from '../../assets'

export default function Sofa() {
    return (
        <div>
            <div className='plastik'>
                <img width={'720px'} height={'532px'} src={table} alt="" />
                <div className='bottom'>
                    <h2 style={{ color: '#377DFF', fontSize: '16px' }}>SALE UP TO 35% OFF</h2>
                    <h1 style={{ color: '#141718', fontSize: '40px' }}>HUNDREDS of New lower prices!</h1>
                    <p style={{ color: '#141718', fontSize: '20px' }}>It’s more affordable than ever to give every room in your home a stylish makeover</p>
                    <button className='bat'>Shop Now</button>
                </div>
            </div>
            {/* arcticles  */}
            <div className='arcticle'>
                <div className='word'>
                    <h2 style={{fontSize:'40px', color:'#000'}}>Articles</h2>
                    <button className="bat">More Articles</button>
                </div>
                <div className='arc'>
                    {/* 1 */}
                    <div style={{display:'flex', alignItems:'center', flexDirection:'column', gap:'10px'}}>
                        <img width={357} height={325} src={table} alt="" />
                        <h2>7 ways to decor your home</h2>
                        <button className="bat">Read More</button>
                    </div>
                    {/* 2 */}
                    <div style={{display:'flex', alignItems:'center', flexDirection:'column', gap:'10px'}}>
                        <img width={357} height={325} src={table} alt="" />
                        <h2>Kitchen organization</h2>
                        <button className="bat">Read More</button>
                    </div>
                    {/* 3 */}
                    <div style={{display:'flex', alignItems:'center', flexDirection:'column', gap:'10px'}}>
                        <img width={357} height={325} src={table} alt="" />
                        <h2>Decor your bedroom</h2>
                        <button className="bat">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
