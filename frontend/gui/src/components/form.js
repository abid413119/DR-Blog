import React from 'react';
import axios from 'axios';
import {Form, Input, Button,} from 'antd';
const { TextArea } = Input;


  class CustomForm extends React.Component {
  
    handleFormSubmit = (event, requestType, articleID) => {

        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch ( requestType ) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
                break;

            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
                break;
        }
    }

    render() {
      return (
            <div>
                <Form onSubmit={event => this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.articleID
                    )}>
                    <Form.Item
                    label="Title"
                    >
                    <Input name="title" placeholder="put a title here" />
                    </Form.Item>
                    <Form.Item
                    label="Content"
                    >
                    <TextArea name="content" placeholder="put your content here..." rows={4} />
                    </Form.Item>
                    <Form.Item >
                    <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
      );
    }
  }
  export default CustomForm;