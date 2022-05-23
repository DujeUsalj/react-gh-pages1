import React from "react";
import classes from "./Groups.module.css";
import Navbar from "../../navbar/navbar";
import ManCiry from "../../clubs/manchester-city-fc.svg";
import PSG from "../../clubs/psg-3.svg";
import Lepizig from "../../clubs/leipzig.svg";
import ClubBrugge from "../../clubs/club-brugge.svg";
import Milan from "../../clubs/ac-milan.svg";
import Atletico from "../../clubs/athletic-club-madrid-85137.svg";
import Liverpool from "../../clubs/liverpool-fc-4.svg";
import Porto from "../../clubs/porto.svg";
import Besiktas from "../../clubs/besiktas-jk.svg";
import Sporting from "../../clubs/sporting.svg";
import Dortmund from "../../clubs/dortmu-1.svg";
import Ajax from "../../clubs/ajax-4.svg";
import realMadrid from "../../clubs/real-madrid-c-f.svg";
import Inter from "../../clubs/inter-milan-2021.svg";
import ShakhtarDonesk from "../../clubs/shakhtar.svg";
import Bayern from "../../clubs/bayern.svg";
import Benfica from "../../clubs/benfica.svg";
import ManUTD from "../../clubs/manchester-united.svg";
import VillaReal from "../../clubs/villarreal.svg";
import Atalanta from "../../clubs/atalanta-1.svg";
import YoungBoys from "../../clubs/young-boys.svg";
import Barcelona from "../../clubs/fc-barcelona.svg";
import DinamoKyiv from "../../clubs/dinamo-moscow.svg";
import Sherrif from "../../clubs/sheriff-3.svg";
import LOSC from "../../clubs/lille.svg";
import Salzburg from "../../clubs/redbull.svg";
import Sevilla from "../../clubs/sevilla-fc.svg";
import Wolfsburg from "../../clubs/vfl-wolfsburg.svg";
import Juventus from "../../clubs/juventus-fc-2017-2.svg";
import Chelsea from "../../clubs/chelsea-fc-2.svg";
import Zenit from "../../clubs/zenit-sankt-peterburg.svg";
import Malmo from "../../clubs/malmo.svg";

function Groups() {
  return (
    <div className={classes.App}>
      <Navbar />
      <div className={classes.Groups}>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group A</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={ManCiry} alt="nema slike" />
                <p className={classes.Text4}>Man.City</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>18</p>
              <p className={classes.Number}>19</p>
              <p className={classes.Number}>8</p>
              <p className={classes.Number}>12</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={PSG} alt="nema slike" />
                <p className={classes.Text4}>Paris</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>13</p>
              <p className={classes.Number}>8</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>11</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Lepizig} alt="nema slike" />
                <p className={classes.Text4}>Leipzig</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>15</p>
              <p className={classes.Number}>14</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>7</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={ClubBrugge} alt="nema slike" />
                <p className={classes.Text4}>Club Brugge</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>20</p>
              <p className={classes.Number}>-14</p>
              <p className={classes.Number}>4</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group B</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Liverpool} alt="nema slike" />
                <p className={classes.Text4}>Liverpool</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>17</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>11</p>
              <p className={classes.Number}>18</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Atletico} alt="nema slike" />
                <p className={classes.Text4}>Atletico</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>7</p>
              <p className={classes.Number}>8</p>
              <p className={classes.Number}>-1</p>
              <p className={classes.Number}>7</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Porto} alt="nema slike" />
                <p className={classes.Text4}>Porto</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>11</p>
              <p className={classes.Number}>-7</p>
              <p className={classes.Number}>5</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Milan} alt="nema slike" />
                <p className={classes.Text4}>Milan</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>9</p>
              <p className={classes.Number}>-3</p>
              <p className={classes.Number}>4</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group C</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Ajax} alt="nema slike" />
                <p className={classes.Text4}>Ajax</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>20</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>15</p>
              <p className={classes.Number}>18</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Sporting} alt="nema slike" />
                <p className={classes.Text4}>Sporting CP</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>14</p>
              <p className={classes.Number}>12</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>9</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Dortmund} alt="nema slike" />
                <p className={classes.Text4}>Dortmund</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>10</p>
              <p className={classes.Number}>11</p>
              <p className={classes.Number}>-1</p>
              <p className={classes.Number}>9</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Besiktas} alt="nema slike" />
                <p className={classes.Text4}>Besiktas</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>19</p>
              <p className={classes.Number}>-16</p>
              <p className={classes.Number}>0</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group D</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={realMadrid} alt="nema slike" />
                <p className={classes.Text4}>Real Madrid</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>14</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>11</p>
              <p className={classes.Number}>15</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Inter} alt="nema slike" />
                <p className={classes.Text4}>Inter</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>8</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>10</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Sherrif} alt="nema slike" />
                <p className={classes.Text4}>Sherrif</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>7</p>
              <p className={classes.Number}>11</p>
              <p className={classes.Number}>-4</p>
              <p className={classes.Number}>7</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={ShakhtarDonesk} alt="nema slike" />
                <p className={classes.Text4}>Shakhtar</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>12</p>
              <p className={classes.Number}>-10</p>
              <p className={classes.Number}>2</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group E</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Bayern} alt="nema slike" />
                <p className={classes.Text4}>Bayern</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>22</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>19</p>
              <p className={classes.Number}>18</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Benfica} alt="nema slike" />
                <p className={classes.Text4}>Benfica</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>7</p>
              <p className={classes.Number}>9</p>
              <p className={classes.Number}>-2</p>
              <p className={classes.Number}>8</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Barcelona} alt="nema slike" />
                <p className={classes.Text4}>Barcelona</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>9</p>
              <p className={classes.Number}>-7</p>
              <p className={classes.Number}>7</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={DinamoKyiv} alt="nema slike" />
                <p className={classes.Text4}>Dinamo Kyiv</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>11</p>
              <p className={classes.Number}>-10</p>
              <p className={classes.Number}>1</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group F</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={ManUTD} alt="nema slike" />
                <p className={classes.Text4}>M. United</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>11</p>
              <p className={classes.Number}>8</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>11</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={VillaReal} alt="nema slike" />
                <p className={classes.Text4}>VillaReal</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>12</p>
              <p className={classes.Number}>9</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>10</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Atalanta} alt="nema slike" />
                <p className={classes.Text4}>Atalanta</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>12</p>
              <p className={classes.Number}>13</p>
              <p className={classes.Number}>-1</p>
              <p className={classes.Number}>6</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={YoungBoys} alt="nema slike" />
                <p className={classes.Text4}>Young Boys</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>7</p>
              <p className={classes.Number}>12</p>
              <p className={classes.Number}>-5</p>
              <p className={classes.Number}>5</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group G</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={LOSC} alt="nema slike" />
                <p className={classes.Text4}>LOSC Lille</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>7</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>11</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Salzburg} alt="nema slike" />
                <p className={classes.Text4}>Salzburg</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>8</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>10</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Sevilla} alt="nema slike" />
                <p className={classes.Text4}>Sevilla</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>6</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Wolfsburg} alt="nema slike" />
                <p className={classes.Text4}>Wolfsburg</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>10</p>
              <p className={classes.Number}>-5</p>
              <p className={classes.Number}>5</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
        <div className={classes.DisplayColumn}>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <p className={classes.Text1}>Group H</p>
            </div>
            <div className={classes.DisplayColumn9}></div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}></div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Text3}>Played</p>
              <p className={classes.Text3}>Won</p>
              <p className={classes.Text3}>Drafts</p>
              <p className={classes.Text3}>Lost</p>
              <p className={classes.Text3}>For</p>
              <p className={classes.Text3}>Against</p>
              <p className={classes.Text3}>Goals difference</p>
              <p className={classes.Text3}>Points</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Juventus} alt="nema slike" />
                <p className={classes.Text4}>Juventus</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>10</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>15</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line}></div>
                <img src={Chelsea} alt="nema slike" />
                <p className={classes.Text4}>Chelsea</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>13</p>
              <p className={classes.Number}>4</p>
              <p className={classes.Number}>9</p>
              <p className={classes.Number}>13</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Zenit} alt="nema slike" />
                <p className={classes.Text4}>Zenit</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>2</p>
              <p className={classes.Number}>3</p>
              <p className={classes.Number}>10</p>
              <p className={classes.Number}>10</p>
              <p className={classes.Number}>0</p>
              <p className={classes.Number}>5</p>
            </div>
          </div>
          <div className={classes.DisplayColumn22}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}>
                <div className={classes.Line1}></div>
                <img src={Malmo} alt="nema slike" />
                <p className={classes.Text4}>Malmo</p>
              </div>
            </div>
            <div className={classes.DisplayColumn9}>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>6</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>5</p>
              <p className={classes.Number}>1</p>
              <p className={classes.Number}>14</p>
              <p className={classes.Number}>-13</p>
              <p className={classes.Number}>1</p>
            </div>
          </div>
          <div className={classes.DisplayColumn2}>
            <div className={classes.DisplayColumn3}>
              <div className={classes.DisplayFlexRow}></div>
            </div>
            <div className={classes.DisplayFlexEnd}>
              <p className={classes.Qualified}>Qualified</p>
              <div className={classes.Kocka} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
