const style = {
	headerLogo: `flex items-center cursor-pointer flex-grow sm:flex-grow-0`,
    }
const Logo = ({imageUrl,height,width,objectFit,alt,logoStyle})=>(
    <div className={style.headerLogo}>
    <img src={imageUrl} alt={alt} height={height} width={width} className={logoStyle}/>
    </div>
)


export default Logo
