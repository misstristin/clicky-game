import React from "react";
import dog1 from "../images/dog1.jpg";
import dog2 from "../images/dog2.jpg";
import dog3 from "../images/dog3.jpg";
import dog4 from "../images/dog4.jpg";
import dog5 from "../images/dog5.jpg";
import dog6 from "../images/dog6.jpg";
import dog7 from "../images/dog7.jpg";
import dog8 from "../images/dog8.jpg";
import dog9 from "../images/dog9.jpg";
import dog10 from "../images/dog10.jpg";
import dog11 from "../images/dog11.jpg";
import dog12 from "../images/dog12.jpg";


const data = [
    {dog1}, {dog2}, {dog3}, {dog4}, {dog5}, {dog6}, {dog7}, {dog8}, {dog9}, {dog10}, {dog11}, {dog12}
]

const MainGame = () => (
  <div>

      {data.map(  (datum) => { 
          return <div><img src={dog1}></img></div>
      })}

</div>
);

export default MainGame;