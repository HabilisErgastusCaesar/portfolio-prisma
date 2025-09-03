import { useRouter } from "next/router"
import { useEffect } from "react";

import { useStargateContext } from "../../components/stargate/useContext/stargateComponents";
import { MainLayout } from "../../components/stargate/mainLayout";
import { UpperBar } from "../../components/stargate/upperBar";

const StargatePage = () => {
    const router = useRouter();
    const { Context } = useStargateContext();

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };
    
    useEffect(() => {
        const handleResize = debounce(() => { 
            if (window.innerWidth <= 830) { 
                if (!Context.windowWidth.searchFilter) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        searchFilter:true
                    }));
                }
            } else {
                if (Context.windowWidth.searchFilter) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        searchFilter:false
                    }));
                }
            } if (window.innerWidth <= 1199) { 
                if (!Context.windowWidth.optionButtons) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        optionButtons:true
                    }));
                }
            } else {
                if (Context.windowWidth.optionButtons) {
                    Context.setWindowWidth((prev) => ({
                        ...prev,
                        optionButtons:false
                    }));
                }
            }
        }, 300); 
        if (typeof window !== "undefined") 
            { handleResize(); window.addEventListener("resize", handleResize); } 
        return () => { 
            if (typeof window !== "undefined") 
                { window.removeEventListener("resize", handleResize); 
        } };
    },[Context.windowWidth])
    
    return(<div>
        {router.query.stargatePage && <>
            <UpperBar router={router.query.stargatePage}/>
            <MainLayout router={router.query.stargatePage}/>
        </>}
    </div>)
}

export default StargatePage