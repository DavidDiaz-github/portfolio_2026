import { Button, Modal, Input, Row, Col } from 'antd';
import React,{ useState } from 'react';
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    UserOutlined
} from '@ant-design/icons';

import './Home.scss';

export default function Home() {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const contact = () => {
        setIsVisibleModal(true)
        setModalContent(
            <MyForm setIsVisibleModal={setIsVisibleModal} />
        )
    }
    const closed = () => {
        setIsVisibleModal(false)
    }
    
    return (
      <div className='home' >
        <div className='home__background' aria-hidden='true'>
            <span className='home__orb home__orb--one' />
            <span className='home__orb home__orb--two' />
            <span className='home__orb home__orb--three' />
        </div>
        
            <div className='home__card'>
                <h1>David Díaz</h1>
                <h2>Programador Web</h2>
                <Button type='primary' className='btn-contact' onClick={contact}>Contacta</Button>
                <div className='home__ul'>
                    <ul className='ul'>
                        <li><a href='https://github.com/DavidDiaz-github/' target='_blank' rel="noopener noreferrer"><GithubOutlined /></a></li>
                        <li><a href='https://www.linkedin.com/in/david-diaz-fueyo/' target='_blank' rel="noopener noreferrer"><LinkedinOutlined /></a></li>
                        <li><a href='mailto:david1_43@hotmail.com'><MailOutlined /></a></li>
                    </ul>
                </div>
            </div>
            <Modal
                centered={true}
                title='Contacto'
                visible={isVisibleModal}
                footer={null}
                className='home-modal'
                onCancel={closed}
            >
                {modalContent}
            </Modal>
        </div>
    )
}




class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
      
  }

    render() {
      const { status } = this.state;
      const { TextArea } = Input;
      
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xpzojyol"
        method="POST"
      >
        <Row gutter={24}>
                <Col span={24} className='modal'>
                    <Input 
                        type='text'
                        name='text'
                        prefix={<UserOutlined />}
                        placeholder='Nombre'
                    />
                </Col>
                <Col span={24} className='modal'>
                    <Input 
                        type='email'
                        name='email'
                        prefix={<MailOutlined />}
                        placeholder='Correo electronico'
                    />
                </Col>
                <Col span={24} className='modal'>
                    <TextArea 
                        
                        type='textarea'
                        name='mensaje'
                        placeholder='Mensaje'
                    />
                </Col>
            </Row>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className='btn-send'>Enviar</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
          this.setState({ status: "SUCCESS" });
          this.props.setIsVisibleModal(false)
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
