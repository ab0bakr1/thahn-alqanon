import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import "./contact.css"


const contact = () => {
  return (
    <section>
        <Row md={2} sm={1}>
            <Col md={6} sm={12} className="contact-right">
                <div className="contact-info">
                    <h5>مستشار محترف في مجال الخدمات القانونية والإدارية​</h5>
                    <h3>مكتب مستشار محترف للاستشارات القانونية والإدارية​</h3>
                    <button type="button">ابقى على تواصل</button>
                </div>
            </Col>
            <Col md={6} sm={12}  className="contact-left ">
                <div className="contact-info">
                    <h4>نحن نتبع أفضل الممارسات</h4>
                    <h6>حن ملتزمون ببناء علاقات قائمة على الثقة مع عملائنا وتلبية احتياجاتهم القانونية بكفاءة واحترافية</h6>
                    <p><FontAwesomeIcon icon={faPhoneFlip} />96655555555</p>
                    <p><FontAwesomeIcon icon={faWhatsapp} />96655555555</p>
                    <p><FontAwesomeIcon icon={faEnvelope} />abobakralmashhor@gmail.com</p>
                    <p><FontAwesomeIcon icon={faLocationDot} />السعودية ,جدة ,النسيم</p>
                </div>
            </Col>
        </Row>
    </section>
  )
}

export default contact