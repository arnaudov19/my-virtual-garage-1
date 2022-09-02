import React from "react"

export const LoginScreenContainer = (props: any) => {
    return (
        <div className="bg-gray-200 h-screen w-screen flex flex-col justify-center items-center">
            <div className="bg-white rounded-xl shadow-lg shadow-slate-500 flex flex-col w-full h-full overflow-auto lg:w-5/6 lg:h-5/6 lg:flex-row">
                <div className="flex justify-center items-center w-screen h-screen  lg:w-5/6 lg:h-full">
                    <div className="flex justify-center items-center flex-col gap-4">
                        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md w-full space-y-8">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                        Sign in to your account
                                    </h2>
                                </div>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex rounded-r-lg overflow-auto md:w-full md:h-full">
                    <img src="https://img.freepik.com/free-vector/car-repair-service-mechanic-work-garage-tire-service-diagnostics-replacement-spare-parts-vector-illustration-flat-design-isolated-white-background-professional-is-auto_153097-1756.jpg?w=2000" />
                </div>
            </div>
        </div>
    )
}
