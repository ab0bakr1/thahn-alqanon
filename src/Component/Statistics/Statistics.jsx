import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import './Statistics.css' // Assuming you have a CSS file for styling

const Statistics = () => {
      const [num, setNum] = useState(0);
  const [consultations, setConsultations] = useState(0);
  const [branches, setBranches] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  const sectionRef = useRef(null);

  const countUp = (target, setter) => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setter(start);
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          countUp(100, setNum);
          countUp(8541, setConsultations);
          countUp(6, setBranches);
          setHasCounted(true);
        }
      },
      {
        threshold: 0.5, // يبدأ العد عندما يظهر 50% من القسم
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasCounted]);

  return (
    <section ref={sectionRef} className='Statistics'>
        <Container>
            <div className='Statistics-item'>
                <div>
                    <span>{num}</span>
                    <h6>عدد المحامين</h6>
                </div>
                <div>
                    <span>{consultations}</span>
                    <h6>الاستشارات القانونية</h6>
                </div>
                <div>
                    <span>{branches}</span>
                    <h6>عدد الفروع</h6>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Statistics