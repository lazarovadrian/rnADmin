import React from 'react'

import './Header.css'

export const Header = ({title}) => {
    return(
        <div className='Header'>
        <div className='Header-Body'>
          <div className='flex-1 d-flex flex-row justify-content-start align-items-center'>
            
            <div className='Header-Title'>{title}</div>

          </div>
          <div className='flex-1 d-flex flex-row justify-content-end align-items-center'>
            
              <div className='Header-UserName'>
                {/* {userName} */}
              </div>
            
            <a className='btn btn-primary Header-ExitBtn'>Выйти</a>
          </div>
        </div>        
      </div>
    )
}