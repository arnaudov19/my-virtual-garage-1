import { Form, Input, Button as AntButton } from "antd"
import CreateUserCredentials from "../sign-up/CreateUser-Credentials"
import React, { SyntheticEvent, useState } from "react"
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/outline"
import "../../img/my-virtual-garage-logo.png"
import { Button } from "../../components/buttons/Button"
import { LeftCircleOutlined, UpCircleOutlined } from "@ant-design/icons"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { PasswordInput } from "../../components/inputs/PasswordInput"
import { TextInput } from "../../components/inputs/TextInput"
import { LoginForm, LoginFormValues } from "./LoginForm"

type Props = {
    currentPageLogin: number
    onSetPage: (page: number) => void
    customerEmail?: string
    customerPassword?: string
    image?: HTMLImageElement
    onCollectLoginData: (values: any) => void
}

const LoginPage = (props: Props): any => {
    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")

    const getUserEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value)
    }
    console.log(userEmail)

    const setUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPass(event.target.value)
    }

    const signInClicked = () => {
        props.onSetPage(2)
    }
    const forgottenPasswordClicked = () => {
        props.onSetPage(6)
    }
    const createAccBtnClicked = () => {
        props.onSetPage(3)
    }
    const backButtonClicked = () => {
        props.onSetPage(1)
    }

    const collectLoginData = (values: LoginFormValues) => {
        props.onCollectLoginData(values)
        signInClicked()
    }

    return (
        <div className="bg-gray-200 h-screen w-screen flex flex-col justify-center items-center">
            <div className="bg-white rounded-xl shadow-lg shadow-slate-500 flex flex-col w-full h-full overflow-auto lg:w-5/6 lg:h-5/6 lg:flex-row">
                <div className="flex justify-center items-center w-screen h-4/6 lg:w-5/6 lg:h-full">
                    <div className="flex justify-center items-center flex-col gap-4">
                        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md w-full space-y-8">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                        Sign in to your account
                                    </h2>
                                </div>

                                <LoginForm onSumbit={collectLoginData} />

                                {/*<Form*/}
                                {/*     className="mt-8 space-y-6"*/}
                                {/*     initialValues={{*/}
                                {/*         remember: true,*/}
                                {/*     }}*/}
                                {/*     autoComplete="off">*/}
                                {/*     <Input type="hidden" name="remember" defaultValue="true" />*/}

                                {/*     <Form.Item*/}
                                {/*         className="pb-6"*/}
                                {/*         name="username"*/}
                                {/*         rules={[*/}
                                {/*             {*/}
                                {/*                 required: true,*/}
                                {/*                 message: "Please input your Email!",*/}
                                {/*             },*/}
                                {/*         ]}>*/}
                                {/*         <TextInput*/}
                                {/*             onChange={getUserEmail}*/}
                                {/*             type="email"*/}
                                {/*             size="large"*/}
                                {/*             placeholder="Enter Your Email"*/}
                                {/*             value={userEmail}*/}
                                {/*         />*/}
                                {/*     </Form.Item>*/}
                                {/*     <Form.Item*/}
                                {/*         name="password"*/}
                                {/*         rules={[*/}
                                {/*             {*/}
                                {/*                 required: true,*/}
                                {/*                 message: "Please input your password!",*/}
                                {/*             },*/}
                                {/*         ]}>*/}
                                {/*         <PasswordInput*/}
                                {/*             onChange={getUserPassword}*/}
                                {/*             type="password"*/}
                                {/*             size="large"*/}
                                {/*             placeholder="Enter Your Password"*/}
                                {/*         />*/}
                                {/*     </Form.Item>*/}

                                {/*     <div className="flex items-center justify-between">*/}
                                {/*         <div className="flex items-center">*/}
                                {/*             <input*/}
                                {/*                 id="remember-me"*/}
                                {/*                 name="remember-me"*/}
                                {/*                 type="checkbox"*/}
                                {/*                 className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-gray-300 rounded"*/}
                                {/*             />*/}
                                {/*             <label htmlFor="remember-me" className="ml-2 block text-md text-gray-900">*/}
                                {/*                 Remember me*/}
                                {/*             </label>*/}
                                {/*         </div>*/}

                                {/*         <div className="text-md">*/}
                                {/*             <a*/}
                                {/*                 onClick={forgottenPasswordClicked}*/}
                                {/*                 className="font-medium text-sky-600 hover:text-sky-500">*/}
                                {/*                 Forgot your password?*/}
                                {/*             </a>*/}
                                {/*         </div>*/}
                                {/*     </div>*/}
                                {/*     <div>*/}
                                {/*         <Button*/}
                                {/*             onClick={signInClicked}*/}
                                {/*             label="Sign in"*/}
                                {/*             prefixIcon={*/}
                                {/*                 <LockClosedIcon*/}
                                {/*                     className="h-5 w-5 text-sky-500 group-hover:text-sky-400"*/}
                                {/*                     aria-hidden="true"*/}
                                {/*                 />*/}
                                {/*             }*/}
                                {/*         />*/}
                                {/*     </div>*/}
                                {/*     <div className="text-md flex justify-center">*/}
                                {/*         <a*/}
                                {/*             onClick={createAccBtnClicked}*/}
                                {/*             className="font-medium text-lg text-sky-600 hover:text-sky-500">*/}
                                {/*             or Create Account*/}
                                {/*         </a>*/}
                                {/*     </div>*/}
                                {/* </Form>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex rounded-r-lg bg-sky-600 w-screen h-2/6 overflow-auto md:w-full md:h-full"></div>
            </div>
        </div>
    )
}

export default LoginPage
