import React from 'react'

interface AuthButtonProps{
    buttonAction : string,
}


const AuthButton : React.FC<AuthButtonProps> =(
    {
    buttonAction,
}) => {
  return (
    <>
        <div>
                <button
                  type={"submit"}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {buttonAction}
                </button>
              </div>
    </>
  )
}

export default AuthButton