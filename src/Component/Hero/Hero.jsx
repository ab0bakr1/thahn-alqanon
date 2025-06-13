import React from 'react'
import { Container } from 'react-bootstrap'
import "./Hero.css"


const Hero = () => {
  return (
    <div className='hero' style={{backgroundImage:"url('https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-3d-rendered-concept-illustration-of-legal-justice-and-rules-image_3882668.jpg')"}}>
        <Container>
        <div className="heroItem">
          <div className="heroInfo w-100">
            <h2>مكتبك القانوني الأكثر ثقة منذ عام 1998</h2>
            <p>حلول قانونية متخصصة لمشاكلك القانونية المعقدة</p>
            <p>تقديم الخدمات القانونية الأساسية بأسعار تحقق العدالة</p>
            <p>نحن نقدم الحلول القانونية التي تضمن حماية حقوقك ومصالحك بكل دقة ومهنية</p>
            <p>نحن هنا لنمثلك بشجاعة وفعالية في قاعات المحاكم وخارجها</p>
            <p>احصل على خدمة قانونية شاملة تلبي جميع احتياجاتك من خلال فريقنا المتخصص</p>
            <button>خدماتنا</button>
          </div>
        </div>
        </Container>
    </div>
  )
}

export default Hero