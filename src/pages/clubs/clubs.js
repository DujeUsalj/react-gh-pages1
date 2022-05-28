import React from "react";
import classes from "./clubs.module.css";
import Navbar from "../../navbar/navbar";
import RealMadrid from "../../clubs/real-madrid-c-f.svg";
import Liverpool from "../../clubs/liverpool-fc-4.svg";
import ManCiry from "../../clubs/manchester-city-fc.svg";
import VillaReal from "../../clubs/villarreal.svg";
import Atletico from "../../clubs/athletic-club-madrid-85137.svg";
import Bayern from "../../clubs/bayern.svg";
import Benfica from "../../clubs/benfica.svg";
import Atalanta from "../../clubs/atalanta-1.svg";
import Besiktas from "../../clubs/besiktas-jk.svg";
import Barcelona from "../../clubs/fc-barcelona.svg";
import ClubBrugge from "../../clubs/club-brugge.svg";
import Dortmund from "../../clubs/dortmu-1.svg";
import DinamoKyiv from "../../clubs/dinamo-moscow.svg";
import Leipzig from "../../clubs/leipzig.svg";
import Malmo from "../../clubs/malmo.svg";
import Milan from "../../clubs/ac-milan.svg";
import Porto from "../../clubs/porto.svg";
import ShakhtarDonesk from "../../clubs/shakhtar.svg";
import Sherrif from "../../clubs/sheriff-3.svg";
import Wolfsburg from "../../clubs/vfl-wolfsburg.svg";
import YoungBoys from "../../clubs/young-boys.svg";
import Zenit from "../../clubs/zenit-sankt-peterburg.svg";
import Sevilla from "../../clubs/sevilla-fc.svg";
import Ajax from "../../clubs/ajax-4.svg";
import Inter from "../../clubs/inter-milan-2021.svg";
import Juventus from "../../clubs/juventus-fc-2017-2.svg";
import LOSC from "../../clubs/lille.svg";
import ManUTD from "../../clubs/manchester-united.svg";
import PSG from "../../clubs/psg-3.svg";
import Salzburg from "../../clubs/redbull.svg";
import Sporting from "../../clubs/sporting.svg";
import Chelsea from "../../clubs/chelsea-fc-2.svg";

function clubs() {
  return (
    <div className={classes.App}>
      <Navbar />
      <div className={classes.Column}>
        <p className={classes.Text1}>Clubs</p>
        <p className={classes.Text2}>Final</p>
        <div className={classes.Column8}>
          <div className={classes.ColumnFlex}>
            <img src={Liverpool} />
            <p className={classes.Text3}>Liverpool</p>
            <p className={classes.Text4}>(ENG)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={RealMadrid} />
            <p className={classes.Text3}>Real Madrid</p>
            <p className={classes.Text4}>(ESP)</p>
          </div>
        </div>
        <p className={classes.Text2}>Semi - finals</p>
        <div className={classes.Column8}>
          <div className={classes.ColumnFlex}>
            <img src={ManCiry} />
            <p className={classes.Text3}>Man. City</p>
            <p className={classes.Text4}>(ENG)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={VillaReal} />
            <p className={classes.Text3}>VillaReal</p>
            <p className={classes.Text4}>(ESP)</p>
          </div>
        </div>
        <p className={classes.Text2}>Quarter - finals</p>
        <div className={classes.Column8}>
          <div className={classes.ColumnFlex}>
            <img src={Atletico} />
            <p className={classes.Text3}>Atletico</p>
            <p className={classes.Text4}>(ESP)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Bayern} />
            <p className={classes.Text3}>Bayern</p>
            <p className={classes.Text4}>(GER)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Benfica} />
            <p className={classes.Text3}>Benfica</p>
            <p className={classes.Text4}>(POR)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Chelsea} />
            <p className={classes.Text3}>Chelsea</p>
            <p className={classes.Text4}>(ENG)</p>
          </div>
        </div>
        <p className={classes.Text2}>Round of 16</p>
        <div className={classes.Column8}>
          <div className={classes.ColumnFlex}>
            <img src={Ajax} />
            <p className={classes.Text3}>Ajax</p>
            <p className={classes.Text4}>(NED)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Inter} />
            <p className={classes.Text3}>Inter</p>
            <p className={classes.Text4}>(ITA)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Juventus} />
            <p className={classes.Text3}>Juventus</p>
            <p className={classes.Text4}>(ITA)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={LOSC} />
            <p className={classes.Text3}>LOSC</p>
            <p className={classes.Text4}>(FRA)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={ManUTD} />
            <p className={classes.Text3}>M. United</p>
            <p className={classes.Text4}>(ENG)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={PSG} />
            <p className={classes.Text3}>Paris</p>
            <p className={classes.Text4}>(FRA)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Salzburg} />
            <p className={classes.Text3}>Salzburg</p>
            <p className={classes.Text4}>(AUT)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Sporting} />
            <p className={classes.Text3}>Sporting</p>
            <p className={classes.Text4}>(POR)</p>
          </div>
        </div>
        <p className={classes.Text2}>Group stage</p>
        <div className={classes.Column8}>
          <div className={classes.ColumnFlex}>
            <img src={Atalanta} />
            <p className={classes.Text3}>Atalanta</p>
            <p className={classes.Text4}>(ITA)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Barcelona} />
            <p className={classes.Text3}>Barcelona</p>
            <p className={classes.Text4}>(ESP)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Besiktas} />
            <p className={classes.Text3}>Besiktas</p>
            <p className={classes.Text4}>(TUR)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={ClubBrugge} />
            <p className={classes.Text3}>ClubBrugge</p>
            <p className={classes.Text4}>(BEL)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Dortmund} />
            <p className={classes.Text3}>Dortmund</p>
            <p className={classes.Text4}>(GER)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={DinamoKyiv} />
            <p className={classes.Text3}>Dinamo Kyiv</p>
            <p className={classes.Text4}>(UKR)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Leipzig} />
            <p className={classes.Text3}>Leipzig</p>
            <p className={classes.Text4}>(GER)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Malmo} />
            <p className={classes.Text3}>Malmo</p>
            <p className={classes.Text4}>(SWE)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Milan} />
            <p className={classes.Text3}>Milan</p>
            <p className={classes.Text4}>(ITA)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Porto} />
            <p className={classes.Text3}>Porto</p>
            <p className={classes.Text4}>(POR)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Sevilla} />
            <p className={classes.Text3}>Sevilla</p>
            <p className={classes.Text4}>(ESP)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={ShakhtarDonesk} />
            <p className={classes.Text3}>Shakhtar Donesk</p>
            <p className={classes.Text4}>(UKR)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Sherrif} />
            <p className={classes.Text3}>Sherrif</p>
            <p className={classes.Text4}>(MDA)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Wolfsburg} />
            <p className={classes.Text3}>Wolfsburg</p>
            <p className={classes.Text4}>(GER)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={YoungBoys} />
            <p className={classes.Text3}>YoungBoys</p>
            <p className={classes.Text4}>(SUI)</p>
          </div>
          <div className={classes.ColumnFlex}>
            <img src={Zenit} />
            <p className={classes.Text3}>Zenit</p>
            <p className={classes.Text4}>(RUS)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default clubs;
