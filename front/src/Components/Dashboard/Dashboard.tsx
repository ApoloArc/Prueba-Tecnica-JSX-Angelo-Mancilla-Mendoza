import React from 'react'
import SectionFirstContainer from './Sections/SectionFirstContainer/SectionFirstContainer'
import SectionNewArrivals from './Sections/SectionNewArrivals/SectionNewArrivals'
import SectionSecondContainer from './Sections/SectionSecondContainer/SectionSecondContainer'
import SectionServices from './Sections/SectionServices/SectionServices'



function Dashboard() {

  return (
    // este componente va a mostrar la pantalla principal, la vamos a seccionar
    <div>

      <SectionFirstContainer />
      <SectionSecondContainer />
      <SectionNewArrivals />
      <SectionServices />
    </div>
  )
}

export default Dashboard