import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Services.css" 

const Services = () => {
  return (
    <>
    <section className='services'>
        <Container>
            <Row md={2} sm={1} className="services-item d-flex">
                <div className="services-title">
                    <h3>خدماتنا</h3>
                    <img src="https://cdn.pixabay.com/photo/2020/12/05/14/08/man-5806012_1280.jpg" className='w-100' alt="" />
                </div>
                <Row md={2} sm={1} className="services-info">
                    <div>
                        <h6>الاستشارات القانونية</h6>
                        <p>تقديم المشورة القانونية المتخصصة في مختلف مجالات القانون المدني، التجاري، والجنائي.</p>
                    </div>
                    <div>
                        <h6>صياغة ومراجعة العقود</h6>
                        <p>إعداد العقود التجارية والمدنية وضمان توافقها مع الأنظمة والتشريعات المعمول بها.</p>
                    </div>
                    <div>
                        <h6>التقاضي وتمثيل العملاء أمام المحاكم</h6>
                        <p>تمثيل الأفراد والشركات في جميع درجات التقاضي والدفاع عن حقوقهم ومصالحهم.</p>
                    </div>
                    <div>
                        <h6>قضايا العمل والعمال</h6>
                        <p>التمثيل القانوني في القضايا العمالية وتنظيم العلاقة بين أصحاب العمل والموظفين.</p>
                    </div>
                    <div>
                        <h6>قضايا الشركات والتجارة</h6>
                        <p>تأسيس الشركات، تعديل الأنظمة، وحل النزاعات التجارية باحترافية.</p>
                    </div>
                    <div>
                        <h6>التحكيم وتسوية النزاعات</h6>
                        <p>تقديم حلول بديلة للنزاعات من خلال التحكيم والوساطة القانونية.</p>
                    </div>
                </Row>
            </Row>  
        </Container>
    </section> 
    </>
  )
}

export default Services