import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../ChartData'
import WidgetSm from '../../components/widgetSmall/WidgetSm'
import WidgetLg from '../../components/widgetLarge/WidgetLg'

const Home = () => {
  return (
    <div className='home'> 
    <FeaturedInfo /> 
    <Chart data={userData} title="User Data Analytics" grid dataK="Active User" />
          <div className="homeWidget">
            <WidgetSm />
            <WidgetLg />
          </div>
    </div>
  )
}

export default Home