import React from "react";
import classes from "./stats.module.css";
import Navbar from "../../navbar/navbar";
import stadion from "./pitch (1).svg";
import goal from "./net.svg";
import Bayern from "../../clubs/bayern.svg";
import Liverpool from "../../clubs/liverpool-fc-4.svg";
import ManCiry from "../../clubs/manchester-city-fc.svg";
import Ajax from "../../clubs/ajax-4.svg";
import Chelsea from "../../clubs/chelsea-fc-2.svg";
import Shakhtar from "../../clubs/shakhtar.svg";
import Paris from "../../clubs/psg-3.svg";
import Barcelona from "../../clubs/fc-barcelona (1).svg";
import Benfica from "../../clubs/benfica.svg";
import Sporting from "../../clubs/sporting.svg";
import Salzburg from "../../clubs/redbull.svg";
import Atletico from "../../clubs/athletic-club-madrid-85137.svg";

import RealMadrid from "../../clubs/real-madrid-c-f.svg";
import Benzema from "../../clubs/Benzema.png";
import Lewandowski from "../../clubs/Lewandowski.png";
import Haller from "./players/Halller.png";
import Salah from "./players/Salah.jpeg";
import Mahrez from "./players/Mahrez.jpeg";
import BrunoF from "./players/BrunoF.png";
import Vinicius from "./players/Vinicius.jpeg";
import Sane from "./players/Sane.webp";
import Antony from "./players/Antony.png";
import Modric from "./players/Modric.png";
import Erkohin from "./players/Erkohin.webp";
import EricG from "./players/EricGarcia.png";
import Ulreich from "./players/Ulreich.png";
import Rugani from "./players/Rugani.png";
import Mbappe from "./players/Mbappe.png";
import JTimber from "./players/Jtimber.png";

function stats() {
  return (
    <div className={classes.App}>
      <Navbar />
      <div className={classes.Stats}>
        <p className={classes.Title}>Competition stats 2021/22</p>
        <div className={classes.divColumn}>
          <div className={classes.divColumnBox}>
            <p className={classes.Text}>Matches</p>
            <div className={classes.displayFlex1}>
              <div className={classes.displayFlex}>
                <p className={classes.TextMatch}>125 </p>
                <p className={classes.TextMatch}>/125</p>
              </div>
              <img src={stadion} />
            </div>
            <p className={classes.Played}>Matches Played</p>
            <div className={classes.Line}></div>
          </div>
          <div className={classes.divColumnBox}>
            <p className={classes.Text}>Goals</p>
            <div className={classes.displayFlex1}>
              <div className={classes.displayFlex}>
                <p className={classes.TextMatch3}>379 </p>
              </div>
              <img src={goal} />
            </div>
            <p className={classes.Played}>Total goals</p>
            <div className={classes.display3}>
              <div className={classes.Column}>
                <p className={classes.TextMatch4}>3.06</p>
                <p className={classes.Played}>Goals per match</p>
              </div>
              <div className={classes.Column}>
                <p className={classes.TextMatch4}>29'</p>
                <p className={classes.Played}>Minutes per goal</p>
              </div>
              <div className={classes.Column}></div>
            </div>
          </div>
          <div className={classes.divColumnBox1}>
            <p className={classes.Text}>goals were scored</p>
            <div className={classes.display8}>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>42</p>
                <div className={classes.Height1}></div>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>48</p>
                <div className={classes.Height2}></div>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>45</p>
                <div className={classes.Height3}></div>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>7</p>
                <div className={classes.Height4}></div>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>46</p>
                <div className={classes.Height5}></div>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>57</p>
                <div className={classes.Height6}></div>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>58</p>
                <div className={classes.Height7}></div>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch5}>19</p>
                <div className={classes.Height8}></div>
              </div>
            </div>
            <div className={classes.display8}>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>1-15</p>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>16-30</p>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>31-45</p>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>45+</p>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>46-60</p>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>61-75</p>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>76-90</p>
              </div>
              <div className={classes.Column1}>
                <p className={classes.TextMatch6}>90+</p>
              </div>
            </div>
          </div>
        </div>
        <p className={classes.ClubStat}>Club stats</p>
        <div className={classes.DisplayColumn4}>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>Goals</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={Bayern} />
                  <p className={classes.Text10}>Bayern</p>
                </div>
                <p className={classes.Text11}>31</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={Liverpool} />
                <p className={classes.Text101}>Liverpool</p>
              </div>
              <p className={classes.Text110}>30</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={ManCiry} />
                <p className={classes.Text101}>Man City</p>
              </div>
              <p className={classes.Text110}>29</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={RealMadrid} />
                <p className={classes.Text101}>Real Madrid</p>
              </div>
              <p className={classes.Text110}>28</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={Ajax} />
                <p className={classes.Text101}>Ajax</p>
              </div>
              <p className={classes.Text110}>22</p>
            </div>
          </div>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>Possesion (%)</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={Bayern} />
                  <p className={classes.Text10}>Bayern</p>
                </div>
                <p className={classes.Text11}>60.1</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={Liverpool} />
                <p className={classes.Text101}>Liverpool</p>
              </div>
              <p className={classes.Text110}>60.1</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={ManCiry} />
                <p className={classes.Text101}>Man City</p>
              </div>
              <p className={classes.Text110}>59.8</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={Ajax} />
                <p className={classes.Text101}>Ajax</p>
              </div>
              <p className={classes.Text110}>59.5</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={Chelsea} />
                <p className={classes.Text101}>Chelsea</p>
              </div>
              <p className={classes.Text110}>59.1</p>
            </div>
          </div>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>Passing (%)</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={Shakhtar} />
                  <p className={classes.Text10}>Shakhtar</p>
                </div>
                <p className={classes.Text11}>90.3</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={ManCiry} />
                <p className={classes.Text101}>Man City</p>
              </div>
              <p className={classes.Text110}>90.2</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={Paris} />
                <p className={classes.Text101}>PSG</p>
              </div>
              <p className={classes.Text110}>90</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={Chelsea} />
                <p className={classes.Text101}>Chelsea</p>
              </div>
              <p className={classes.Text110}>89.1</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={Bayern} />
                <p className={classes.Text101}>Bayern</p>
              </div>
              <p className={classes.Text110}>88.8</p>
            </div>
          </div>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>Tackles</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={RealMadrid} />
                  <p className={classes.Text10}>Real Madrid</p>
                </div>
                <p className={classes.Text11}>31</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={Benfica} />
                <p className={classes.Text101}>Benfica</p>
              </div>
              <p className={classes.Text110}>131</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={Atletico} />
                <p className={classes.Text101}>Atletico</p>
              </div>
              <p className={classes.Text110}>126</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={Sporting} />
                <p className={classes.Text101}>Sporting</p>
              </div>
              <p className={classes.Text110}>119</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={Salzburg} />
                <p className={classes.Text101}>Salzburg</p>
              </div>
              <p className={classes.Text110}>116</p>
            </div>
          </div>
        </div>
        <p className={classes.ClubStat}>Player stats</p>
        <div className={classes.DisplayColumn4}>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>Goals</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={Benzema} />
                  <p className={classes.Text10}>Benzema</p>
                </div>
                <p className={classes.Text11}>15</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={Lewandowski} />
                <p className={classes.Text101}>Lewandowski</p>
              </div>
              <p className={classes.Text110}>13</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={Haller} />
                <p className={classes.Text101}>Haller</p>
              </div>
              <p className={classes.Text110}>11</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={Salah} />
                <p className={classes.Text101}>Salah</p>
              </div>
              <p className={classes.Text110}>8</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={Mahrez} />
                <p className={classes.Text101}>Mahrez</p>
              </div>
              <p className={classes.Text110}>7</p>
            </div>
          </div>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>Assists</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={BrunoF} />
                  <p className={classes.Text10}>Bruno F.</p>
                </div>
                <p className={classes.Text11}>7</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={Vinicius} />
                <p className={classes.Text101}>Vinicius J.</p>
              </div>
              <p className={classes.Text110}>6</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={Sane} />
                <p className={classes.Text101}>Sane</p>
              </div>
              <p className={classes.Text110}>6</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={Antony} />
                <p className={classes.Text101}>Antony</p>
              </div>
              <p className={classes.Text110}>5</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={Modric} />
                <p className={classes.Text101}>Modric</p>
              </div>
              <p className={classes.Text110}>4</p>
            </div>
          </div>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>On target</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={Benzema} />
                  <p className={classes.Text10}>Benzema</p>
                </div>
                <p className={classes.Text11}>23</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={Lewandowski} />
                <p className={classes.Text101}>Lewandowski</p>
              </div>
              <p className={classes.Text110}>19</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={Mahrez} />
                <p className={classes.Text101}>Mahrez</p>
              </div>
              <p className={classes.Text110}>18</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={Mbappe} />
                <p className={classes.Text101}>Mbappe</p>
              </div>
              <p className={classes.Text110}>16</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={Salah} />
                <p className={classes.Text101}>Salah</p>
              </div>
              <p className={classes.Text110}>16</p>
            </div>
          </div>
          <div className={classes.DisplayRow6}>
            <div className={classes.DisplayFlexColumn}>
              <p className={classes.Text12}>Passing accuracy (%)</p>
              <div className={classes.DisplayFlex2}>
                <div className={classes.DisplayFlex22}>
                  <p className={classes.SmalltextNumber}>1</p>
                  <img src={Erkohin} />
                  <p className={classes.Text10}>Erkohin</p>
                </div>
                <p className={classes.Text11}>98</p>
              </div>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>2</p>
                <img src={EricG} />
                <p className={classes.Text101}>Eric G.</p>
              </div>
              <p className={classes.Text110}>97.5</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>3</p>
                <img src={Ulreich} />
                <p className={classes.Text101}>Ulreich</p>
              </div>
              <p className={classes.Text110}>97</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>4</p>
                <img src={Rugani} />
                <p className={classes.Text101}>Rugani</p>
              </div>
              <p className={classes.Text110}>96.8</p>
            </div>
            <div className={classes.DisplayFlex27}>
              <div className={classes.DisplayFlex22}>
                <p className={classes.SmalltextNumber1}>5</p>
                <img src={JTimber} />
                <p className={classes.Text101}>J. Timber</p>
              </div>
              <p className={classes.Text110}>95.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stats;
