import React from 'react'

const style = {
    transferPropContainer: `bg-[#20242A] pl-8 rounded-2xl text-3xl  border border-[#20242A] hover:border-[#41444F]  flex flex-1`,
    transferPropInput: `bg-transparent text-gray-200 placeholder:text-[#B2B9D2] outline-none mb-3 w-full text-2xl`,
 }

const CustomInput =({placeholder,value,onChange})=>(
    <div className={style.transferPropContainer}>
    <input
      value={value}
      type='text'
      className={style.transferPropInput}
      placeholder={placeholder}
      onChange={onChange}
    />

  </div>
)


export default CustomInput
