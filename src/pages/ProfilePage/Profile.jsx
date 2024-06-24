import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, notification, Descriptions,Row, Col } from 'antd';
import moment from 'moment';
import  useGetMemberInfo  from './useGetProfile';


const UserProfile = () => {
  const { data } = useGetMemberInfo();
  console.log('Profile Data:', data);
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    memberName: 'JohnDoe123',
    name: 'John Doe',
    yearOfBirth: 1990,
  });

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleFormSubmit = (values) => {
    console.log('Form Values:', values);
    setEditing(false);
  };

  return (
    <div className='p-10 m-6'>
      {!editing ? (
        <Descriptions title="User Profile" bordered column={1}>
          <Descriptions.Item label="Member Name">{profile.memberName}</Descriptions.Item>
          <Descriptions.Item label="Name">{profile.name}</Descriptions.Item>
          <Descriptions.Item label="Year of Birth">{profile.yearOfBirth}</Descriptions.Item>
        </Descriptions>
      ) : (
        <Form layout="vertical" onFinish={handleFormSubmit} initialValues={{...profile, yearOfBirth: moment(profile.yearOfBirth, 'YYYY')}}>
          <Form.Item name="memberName" label="Member Name" rules={[{ required: true, message: 'Please input your member name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="yearOfBirth" label="Year of Birth" rules={[{ required: true, message: 'Please select your year of birth!' }]}>
            <DatePicker picker="year" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save Profile
          </Button>
        </Form>
      )}
      <Row justify="end" style={{ marginTop: '20px' }}>
        <Col>
          <Button type="primary" onClick={handleEditToggle}>
            {editing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;