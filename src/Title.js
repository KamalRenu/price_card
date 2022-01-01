import React from 'react'

function Title() {
    return (
        <div className="row justify-content-center">
        <div className="col-md-8 text-center">
        <h3 className="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
        <h6 className="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
        <div className="switcher-box mt-4 d-flex align-items-center justify-content-center">
          <span className="font-14 font-weight-medium">MONTHLY</span>
          <div className="onoffswitch position-relative mx-2">
            <input type="checkbox" name="onoffswitch1" className="onoffswitch-checkbox d-none" id="myonoffswitch1"/>
            <label className="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
							<span className="onoffswitch-inner d-block"></span>
							<span className="onoffswitch-switch d-block bg-white position-absolute"></span>
						</label>
          </div>
          <span className="font-14 font-weight-medium">YEARLY</span>
        </div>
      </div>
      </div>
    )
}

export default Title
