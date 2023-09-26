const Button = (props) => {

  const { value, handelClick } = props

  return (
    <div >
      <button onClick={handelClick} className='w-[100px] h-[100px] font-bold text-3xl border px-6 py-4 border-gray-900'>{value}</button>
    </div>
  )
}

export default Button