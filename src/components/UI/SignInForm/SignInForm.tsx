import React from 'react';
import { ConfigProvider, Form, Input } from 'antd';
import { Button, Flex } from 'antd';
import "./SignInForm.scss"

const SignInForm = () => {
    return (
        <div>
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
            <div className='signIn'>
                <Form 
                    className='signInForm'
                    layout='vertical'
                    autoComplete="off"
                >
                    <Form.Item
                        name="phone"
                        rules={[
                            { required: true, message: "Введите номер телефона" },
                            {
                                message: "Неверный формат номера"
                            }
                        ]}
                    >
                        <Input placeholder="Телефон" maxLength={12} />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Введите пароль" }]}
                    >
                        <Input.Password placeholder="Пароль" maxLength={50}/>
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
                                Вход
                            </Button>
                        </Flex>
                    </Form.Item>
                </Form>
                <div className="signInWarning">
                    <p className='signInWarning__title'>
                        При входе вы принимаете <a href='/' className='signUpWarning__title--underlined'>условия использования</a> сайта и соглашаетесь на обработку 
                        персональных данных согласно <a href='/' className='signUpWarning__title--underlined'>политике конфиденциальности.</a>
                    </p>
                </div>
            </div>
        </ConfigProvider>
        </div>
    );
}

export default SignInForm;
