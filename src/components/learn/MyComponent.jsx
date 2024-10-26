// () => {}
//component = html + css + js

import './style.css';

const MyComponent = () => {
    // const hoidanit = "eric"; // string
    // const hoidanit = 18; // number   
    // const hoidanit = true; // boolean      
    // const hoidanit = undefined; // undefined  
    // const hoidanit = null; // null  
    const hoidanit = [1, 2, 3]; // array  
    // const hoidanit = {
    //     name: "hoidanit",
    //     age: 18
    // }; // object  

    return (
        <>
            <div>{JSON.stringify(hoidanit)} & hoidanit update</div>
            <div>{console.log(">>>> eric")}</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }>
                child
            </div>
        </>
    );
}

export default MyComponent;