import React from "react";
import classes from "./history.module.css";
import realMadrid from "../../clubs/real-madrid-c-f.svg";
import Liverpool from "../../clubs/liverpool-fc-4.svg";
import Bayern from "../../clubs/bayern.svg";
import Barcelona from "../../clubs/fc-barcelona.svg";
import Ajax from "../../clubs/ajax-4.svg";
import ManUTD from "../../clubs/manchester-united.svg";
import Inter from "../../clubs/inter-milan-2021.svg";
import Chelsea from "../../clubs/chelsea-fc-2.svg";
import Benfica from "../../clubs/benfica.svg";
import Juventus from "../../clubs/juventus-fc-2017-2.svg";
import Porto from "../../clubs/porto.svg";
import Milan from "../../clubs/ac-milan.svg";

import Ronaldo from "../../clubs/CRISTIANO.png";
import Messi from "../../clubs/ashraf-zamrani_lionelmessi.gif";
import Benzema from "../../clubs/Benzema.png";
import Lewandowski from "../../clubs/Lewandowski.png";
import RGonazlez from "../../clubs/Gonzalez.png";
import Nistelrooy from "../../clubs/Nistelrooy.png";
import Shevchenko from "../../clubs/Shevchenko.png";
import Muller from "../../clubs/Muller.webp";
import Henry from "../../clubs/Henry.png";
import FInzaghi from "../../clubs/Inzaghi.png";
import Ibrahimovic from "../../clubs/Ibrahimovic.png";
function history() {
  return (
    <div className={classes.App}>
      <div className={classes.History}>
        <div className={classes.DisplayColumn}>
          <iframe
            className={classes.DivVideo}
            src="https://www.youtube.com/embed/KcQjBpehDAY?"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className={classes.DivStatsDisplay}>
            <div className={classes.DivStats}>
              <div className={classes.DisplayColumn11}>
                <p className={classes.Text1}>All-time stats</p>
                <p className={classes.Text2}>Most titles</p>
                <div className={classes.DisplayWrapper}>
                  <div className={classes.DisplayColumn2}>
                    <img src={realMadrid} />
                    <p className={classes.Text3}>Real madrid</p>
                    <p className={classes.Text4}>13</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Milan} />
                    <p className={classes.Text3}>Milan</p>
                    <p className={classes.Text4}>7</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Liverpool} />
                    <p className={classes.Text3}>Liverpool</p>
                    <p className={classes.Text4}>6</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Bayern} />
                    <p className={classes.Text3}>Bayern</p>
                    <p className={classes.Text4}>6</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Barcelona} />
                    <p className={classes.Text3}>Barcelona</p>
                    <p className={classes.Text4}>5</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Ajax} />
                    <p className={classes.Text3}>Ajax</p>
                    <p className={classes.Text4}>4</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={ManUTD} />
                    <p className={classes.Text3}>Manchester</p>
                    <p className={classes.Text4}>3</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Inter} />
                    <p className={classes.Text3}>Inter</p>
                    <p className={classes.Text4}>3</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Chelsea} />
                    <p className={classes.Text3}>Chelsea</p>
                    <p className={classes.Text4}>2</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Benfica} />
                    <p className={classes.Text3}>Benfica</p>
                    <p className={classes.Text4}>2</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Juventus} />
                    <p className={classes.Text3}>Juventus</p>
                    <p className={classes.Text4}>2</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Porto} />
                    <p className={classes.Text3}>Porto</p>
                    <p className={classes.Text4}>1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.DivStats}>
              <div className={classes.DisplayColumn11}>
                <p className={classes.Text5}>Top goalscorers</p>
                <div className={classes.DisplayWrapper1}>
                  <div className={classes.DisplayColumn2}>
                    <img src={Ronaldo} />
                    <p className={classes.Text3}>Ronaldo</p>
                    <p className={classes.Text4}>141</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Messi} />
                    <p className={classes.Text3}>Messi</p>
                    <p className={classes.Text4}>125</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Benzema} />
                    <p className={classes.Text3}>Benzema</p>
                    <p className={classes.Text4}>86</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Lewandowski} />
                    <p className={classes.Text3}>Lewandowski</p>
                    <p className={classes.Text4}>86</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={RGonazlez} />
                    <p className={classes.Text3}>R. Gonzalez</p>
                    <p className={classes.Text4}>71</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Nistelrooy} />
                    <p className={classes.Text3}>Nistelrooy</p>
                    <p className={classes.Text4}>60</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Shevchenko} />
                    <p className={classes.Text3}>Shevchenko</p>
                    <p className={classes.Text4}>59</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Muller} />
                    <p className={classes.Text3}>Muller</p>
                    <p className={classes.Text4}>52</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Henry} />
                    <p className={classes.Text3}>Henry</p>
                    <p className={classes.Text4}>51</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={FInzaghi} />
                    <p className={classes.Text3}>F. Inzaghi</p>
                    <p className={classes.Text4}>50</p>
                  </div>
                  <div className={classes.DisplayColumn2}>
                    <img src={Ibrahimovic} />
                    <p className={classes.Text3}>Ibrahimović</p>
                    <p className={classes.Text4}>49</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default history;
