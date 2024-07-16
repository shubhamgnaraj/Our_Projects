function HeaderContainer({children}) {
    return (
        <div className=" w-full h-[7vh]  flex items-center px-3 justify-between bg-[hsl(132,11%,64%)]">
            {children}
        </div>
    )
} 

export default HeaderContainer;