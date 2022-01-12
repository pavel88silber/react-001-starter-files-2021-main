import React from 'react'

const Header = (props) => 
        (
            <header className='top'>
                <div className='wrap'>
                    <div className='header-content'>

                        <div className='header-rating'>
                            <div className='header-rating_tag'>דירוג</div>
                            <div className='header-rating_icon'>✯✯✯✯✯</div>
                        </div>
                    {/* <Burger /> */}

                    <div className='header-divider'></div>
                    <h1 className='font-effect-fire-animation'>{props.title}</h1>
                    <h3>
                        <span>
                            משלוח מהיר
                            <span className='sub-header'> #המבורגרים </span>
                        </span>
                    </h3>
                    </div>
                </div>
        </header>
        )

export default Header