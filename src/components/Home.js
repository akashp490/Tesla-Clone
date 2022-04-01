import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        
    <Section 
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
    />
     <Section 
        title="Lower Cost Solar Panels"
        description="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
    />
     <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs less than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
    />
     <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"        
    />
    
    </Container>
  )
}

export default Home

const Container= styled.div`
    height: 100vh;

`