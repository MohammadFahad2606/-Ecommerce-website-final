const brandData = [
    {
        name :"ck",
        src :"./assets/imges/ck.svg"
    },
    {
        name :"gucci",
        src :"./assets/imges/gucci.svg"
    },
    {
        name :"prada",
        src :"./assets/imges/prada.svg"
    },
    {
        name :"versace",
        src :"./assets/imges/versace.svg"
    },
    {
        name :"zara",
        src :"./assets/imges/zara.svg"
    },
]
const BrandBanner = () => {
  return (
    <div className='flex flex-wrap justify-around p-5 gap-4  bg-black'>
    {
        brandData.map((item,index)=>(<img key={index} className= "w-20 lg:w-28" src={item.src} alt={item.name}  />)
        )
    }
    </div>
  )
}

export default BrandBanner
