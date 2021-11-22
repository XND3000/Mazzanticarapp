import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
               title="Eventura Pura"
               description="
               THE EXCLUSIVE SUPERCAR"
               backgroundImg="beach_car2.jpg"
               leftBtnText="Discover the Inspiration"
               rightBtnText="Videos"
            />
            <Section 
               title="EVANTRA 771 / 781"
               description="THE EXCLUSIVE SUPERCAR"
               backgroundImg="image023.jpg"
               leftBtnText="Discover the Inspiration"
               rightBtnText="Videos"
            />
            <Section 
               title="EVANTRA MILLECAVALLI R"
               description="THE EXCLUSIVE SUPERCAR"
               backgroundImg="image027.jpg"
               leftBtnText="Discover the Inspiration"
               rightBtnText="Videos"
            /> 
                 <Section 
               title="EVANTRA BRONZE"
               description="OUR NEW SUPERCAR"
               backgroundImg="bronze.png"
               leftBtnText="Discover the Inspiration"
               rightBtnText="Videos"
            /> 
            <Section
               title="History"
               description="THE BIRTH OF A PASSION"
               backgroundImg="image029.jpg"
               leftBtnText="Discover the Inspiration"
               rightBtnText="Videos" 
            />
            <Section
               title="Accessories"
               description="THE BIRTH OF A PASSION"
               backgroundImg="image028.jpg"
               leftBtnText="Shop now"
            />
        </Container>
        
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
` 



      

