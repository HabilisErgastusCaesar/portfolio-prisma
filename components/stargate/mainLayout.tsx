import { useStargateContext } from "./useContext/stargateComponents"

export const MainLayout = ({router}) => {
    console.log(router);
    const { Context } = useStargateContext();
    console.log(Context.windowWidth.optionButtons)
    return(<div>
        {Context.windowWidth.optionButtons ? (
            <h1>small screen</h1>
        ):(
            <h1>big screen</h1>
        )}
        </div>)
}