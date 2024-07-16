function MainContainer({children, color}) {
    return <div className = ' w-full h-screen  flex justify-center items-end pb-5' style={{backgroundColor: color}}>{children}</div>
}

export default MainContainer;