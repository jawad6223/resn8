import React from 'react'
import { icons } from '../Constant/Icons/Icons'


export const Foot = () => {
    return (
        <section>
        <div className="container-fluid foot_BG pb-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className='project_detail pt-3'>
                  Copyright <div className='copyright_icon ps-1 pe-1'>{icons.CopyrightIcon}</div> 2024. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
