export const UpperBar = ({router}) => {
    const stargate = router.replace("&Info","").replace("&Episodes","").replace("Cast","")
    console.log(stargate)
    return(<div className={`upper-bar`}></div>)
}