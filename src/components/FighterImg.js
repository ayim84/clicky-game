
import React from "react";

const styles =
{
    img:
    {
        display: "inline-block",
        width: "20%",
        margin: "1% 2%",
        borderStyle: "outset"
    }
}

const FighterImg = (props) =>
{
    return(
        <img src={props.image} style={styles.img} onClick={() => props.fighterClick(props.id)}/>
    )
}

export default FighterImg;