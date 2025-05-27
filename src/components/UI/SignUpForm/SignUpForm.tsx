import React from 'react';
import "./SignUpForm.scss"
import { ConfigProvider, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const SignUpForm = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Inter"
                },
                components: {
                    Input: {
                        borderRadius: 5,
                        paddingInline: 15,
                        controlHeight: 50,
                        activeBorderColor: "#000",
                        hoverBorderColor: "#979797",
                    },
                    Form: {
                        itemMarginBottom: 15
                    }

                },
            }}
        >
            <div className='signUp'>
                <Form 
                    className='signUpForm'
                    layout='vertical'
                    autoComplete="off"
                >
                    <Form.Item
                        name="phone"
                        rules={[
                            { required: true, message: "Введите номер телефона" },
                            {
                                pattern: phoneRegex,
                                message: "Неверный формат номера"
                            }
                        ]}
                    >
                        <Input placeholder="Телефон" maxLength={12} />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: "Введите имя" }]}
                    >
                        <Input placeholder="Имя" maxLength={30} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Введите пароль" }]}
                    >
                        <Input.Password placeholder="Пароль" maxLength={50}/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Повторите пароль' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Повторите пароль" maxLength={50} />
                    </Form.Item>

                    <Form.Item>
                        <Flex justify='center'>
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                color='default' 
                                variant='solid' 
                                style={{ height: 50, fontSize: 16, marginTop: 20, width: "100%" }}
                            >
                                Регистрация
                            </Button>
                        </Flex>
                    </Form.Item>
                </Form>
                <div className="signUpWarning">
                    <p className='signUpWarning__title'>
                        При входе вы принимаете <a href='/' className='signUpWarning__title--underlined'>условия использования</a> сайта и соглашаетесь на обработку 
                        персональных данных согласно <a href='/' className='signUpWarning__title--underlined'>политике конфиденциальности.</a>
                    </p>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default SignUpForm;
