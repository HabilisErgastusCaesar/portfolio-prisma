import { useStargateContext } from "./useContext/stargateComponents"
import { useState } from "react";

export const MainLayout = ({router}) => {
    console.log(router);
    const { Context } = useStargateContext();
    console.log(Context.windowWidth.optionButtons)
    
    const [selectOptionToggle, setSelectOptionToggle] = useState("Episodes");
    
    const selectOption = (type) => {
        //const destination = router.asPath.replaceAll("Episodes","").replaceAll("Cast","").replaceAll("Info","")
        if( selectOptionToggle !== type ) setSelectOptionToggle(type);
        //event.preventDefault();
        //router.push(`${destination}${type}`);
    }
    return(<div>
        {Context.windowWidth.optionButtons ? (
            <div className="smaller-screen">
                {!Context.search && !Context.open.select && (
                <div className="option-button">
                    <section className={selectOptionToggle === "Cast" ? "selected selected-cast" : "not-selected not-selected-cast"} onClick={() => selectOption("Cast")}>Cast</section>
                    <section className={selectOptionToggle === "Episodes" ? "selected" : "not-selected"} onClick={() => selectOption("Episodes")}>Episodes</section>
                    <section className={selectOptionToggle === "Info" ? "selected selected-info" : "not-selected not-selected-info"} onClick={() => selectOption("Info")}>Info</section>
                </div>
            )}
                small screen
            </div>
        ):(
            <h1>big screen</h1>
        )}
        </div>)
}