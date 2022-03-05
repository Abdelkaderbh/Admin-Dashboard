import React from 'react'

import "./widgetLg.css"

const WidgetLg = () => {

  const Btn = ({type}) => {
    return <button className={'WidgetLgBtn ' + type}> {type}</button>
  }

  return (
    <div className='widgetLg'>
       <h3 className="widgetLgTitle">
          Latest Transactions </h3>
    <table className="widgetLgTable">
      <tr className="TableTr">
        <th className="TableTh">
          Customer
        </th>
        <th className="TableTh">
          Date
        </th>
        <th className="TableTh">
          Amount
        </th>
        <th className="TableTh">
          Status
        </th>
      </tr>
      <tr className="TableTr">
          <td className="TableUser">
            <img src="data:image/jpeg;base64,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" alt="" className="widgetLgImg" />
            <span className="UserName">
                  Susana
            </span>
          </td>
          <td className="Date">
            02/03/2022
          </td>

          <td className="Amount">
            250$
          </td>

          <td className="Status">
                <Btn type="Approved " />
          </td>

      </tr>

      <tr className="TableTr">
          <td className="TableUser">
            <img src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x" alt="" className="widgetLgImg" />
            <span className="UserName">
                  Ramy
            </span>
          </td>
          <td className="Date">
            02/03/2022
          </td>

          <td className="Amount">
            250$
          </td>

          <td className="Status">
                <Btn type="Approved " />
          </td>
      </tr>

      <tr className="TableTr">
          <td className="TableUser">
            <img src="https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?b=1&k=20&m=1311084168&s=170667a&w=0&h=mE8BgXPgcHO1UjSmdWYa21NIKDzJvMrjOffy39Ritpo=" alt="" className="widgetLgImg" />
            <span className="UserName">
                  Anna
            </span>
          </td>
          <td className="Date">
            02/01/2022
          </td>

          <td className="Amount">
           5000$
          </td>

          <td className="Status">
                <Btn type="Pending " />
          </td>
      </tr>

      <tr className="TableTr">
          <td className="TableUser">
            <img src="https://i.imgur.com/zLCYdR9.jpeg" alt="" className="widgetLgImg" />
            <span className="UserName">
                  John
            </span>
          </td>
          <td className="Date">
            02/03/2022
          </td>

          <td className="Amount">
            250$
          </td>

          <td className="Status">
                <Btn type="Declined " />
          </td>
      </tr>

    </table>

    </div>
  )
}

export default WidgetLg