import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Statistics = () => {
    const [num , setNum] = useState()
    
  return (
    <section>
        <Container>
            <div>
                <div>
                    <span></span>
                    <h6>عدد المحامين</h6>
                </div>
                <div>
                    <span></span>
                    <h6>الاستشارات القانونية</h6>
                </div>
                <div>
                    <span></span>
                    <h6>عدد الفروع</h6>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Statistics