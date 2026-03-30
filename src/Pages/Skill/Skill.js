import React from 'react'
import { Row, Col, Typography } from 'antd';
import './Skill.scss';
import { skills } from '../../data/skills';

export default function Skill() {
    const { Paragraph } = Typography;
    return (
        <div className='skill'>
            <div className='skill__cards'>
                <Row gutter={24} className='row-skill'>
                    {skills.map((item) => (
                        <Col xl={6} lg={8} md={12} sm={24} xs={24} className='skill__card skill__card--no-padding' key={item.title}>
                            <div className='skill__media'>
                                <img className='skill__image' src={item.png ? item.png : item.img} alt={item.title} />
                            </div>
                            <div className='skill__card-item'>
                                <h2>{item.title}</h2> 
                            </div>
                            <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: 'more' }}>{item.description}</Paragraph>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}
