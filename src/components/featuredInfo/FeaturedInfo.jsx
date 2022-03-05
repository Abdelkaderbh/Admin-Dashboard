import React from 'react'
import "./featuredInfo.css"
import {ArrowDownward,ArrowUpward} from "@material-ui/icons" 


const FeaturedInfo = () => {
  return (
    <div className='featured'>

        <div className="featuredItem">
                 <span className="title"> Featured Info </span>

                 <div className="moneyContainer">
                     <span className="Money">20000$</span>
                     <span className="MoneyRate">- 10  <ArrowDownward className='featuredIcon Negative'/> </span>
                 </div>
                 <span className="subtitle">
                     Compared to last month
                 </span>
        </div>

        <div className="featuredItem">
                 <span className="title"> Sales </span>

                 <div className="moneyContainer">
                     <span className="Money">20000$</span>
                     <span className="MoneyRate">- 10  <ArrowDownward className='featuredIcon Negative' /> </span>
                 </div>
                 <span className="subtitle">
                     Compared to last month
                 </span>
        </div>

        <div className="featuredItem">
                 <span className="title"> Cost </span>

                 <div className="moneyContainer">
                     <span className="Money">20000$</span>
                     <span className="MoneyRate">+ 2.0  <ArrowUpward className='featuredIcon'/> </span>
                 </div>
                 <span className="subtitle">
                     Compared to last month
                 </span>
        </div>
      







    </div>
  )
}

export default FeaturedInfo