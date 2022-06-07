import React from "react";
import classes from "./home.module.css";
import Navbar from "../../navbar/navbar";
import ucl from "./ucl123.jpeg";
import ger from "./ger123.jpeg";
import Rm12 from "./rM12.jpeg";
import format1 from "./format123.webp";

function home() {
  return (
    <div className={classes.App}>
      <Navbar />
      <div className={classes.Div1}>
        <p className={classes.Text1}>History of UCL</p>
        <div className={classes.Line} />
        <div className={classes.Div2}>
          <p className={classes.Para}>
            The UEFA Champions League came about as a new version of the
            European Cup and was played for the first time in the 1992-1993
            season. Already established as the most prestigious club tournament
            in football, Champions League has become even more popular with the
            introduction of a mini-league group stage system. The new concept
            had a resemblance to the FIFA World Cup with an early phase of group
            play followed by a knockout phase. On several occasions has the
            competition expanded to include more clubs – the initial 8 have
            become 32 (qualification stage excluded). The Champions League
            trophy can be kept permanently by a club that win the tournament
            five times or three times in a row (since the rule changed in 2008
            it is only a replica). It is today almost as adored as the FIFA
            World Cup Trophy.
          </p>
          <img src={ucl} />
        </div>
        <p className={classes.Text11}>Records</p>
        <div className={classes.Line1} />
        <div className={classes.Div2}>
          <p className={classes.Para}>
            The largest victory margin happened between HJK Helsinki and Bangor
            City in the second qualification round in 2011-12. If the
            qualification phase is excluded, the biggest goal difference is
            eight goals in the matches Liverpool-Besiktas (2007-2008) and Real
            Madrid-Malmö FF (2015-2016). If only finals are considered, the
            biggest win was in the 1994 final when Milan defeated Barcelona 4 to
            0. Format and participating teams In the first edition (1992-1993),
            the tournament consisted of 8 teams after a qualification phase. The
            eight teams were playing in two groups followed by a final between
            the group winners. The first season included in total 36
            participating clubs in the qualification, since when the numbers
            have increased. In the third edition of the Champions League
            (1994-1995), the tournament expanded to 16 teams (excluding the
            qualification). The format consisted of a group phase with four
            groups followed by three knockout stages. In season 1997-1998
            another expansion added more teams to 24 (excluding the
            qualification). A group phase, including six groups, was followed by
            a knockout phase in three stages. In season 1999-2000 the tournament
            expanded for the third time and would now include 32 teams
            (excluding the qualification). Now, the teams were divided into
            eight groups and the first group stage was followed by a second, and
            finally a knockout stage. In season 2014-2015, the second group
            stage was abandoned. Instead, another stage (Round of 16) in the
            knockout phase was played.
          </p>
          <img src={ger} />
        </div>
        <p className={classes.Text11}>Statistics</p>
        <div className={classes.Line12} />
        <div className={classes.Div2}>
          <p className={classes.Para}>
            Real Madrid, Barcelona, Milan, Bayern Munich, Manchester United,
            Liverpool, Chelsea, Ajax. These clubs have won the most titles in
            the Champions League, the predecessor European Cup excluded.Most
            times runners-up are Juventus (3), Milan (3), Bayern Munich (3) and
            Atlético Madrid (3). Manchester United, Valencia and Liverpool have
            also lost the final more than once. If Champions League and European
            Cup titles are combined, Real Madrid is still the best performing
            club with 13 titles (6 and 7 in European Cup and Champions League
            respectively). A comparison between countries show that Spanish
            clubs has been the most successful through history in the Champions
            League
          </p>
          <img src={Rm12} />
        </div>
        <p className={classes.Text11}>Format</p>
        <div className={classes.Line12} />
        <div className={classes.Div2}>
          <p className={classes.Para}>
            In the first edition (1992-1993), the tournament consisted of 8
            teams after a qualification phase. The eight teams were playing in
            two groups followed by a final between the group winners. The first
            season included in total 36 participating clubs in the
            qualification, since when the numbers have increased. In the third
            edition of the Champions League (1994-1995), the tournament expanded
            to 16 teams (excluding the qualification). The format consisted of a
            group phase with four groups followed by three knockout stages. In
            season 1997-1998 another expansion added more teams to 24 (excluding
            the qualification). A group phase, including six groups, was
            followed by a knockout phase in three stages. In season 1999-2000
            the tournament expanded for the third time and would now include 32
            teams (excluding the qualification). Now, the teams were divided
            into eight groups and the first group stage was followed by a
            second, and finally a knockout stage. In season 2014-2015, the
            second group stage was abandoned. Instead, another stage (Round of
            16) in the knockout phase was played.
          </p>
          <img src={format1} />
        </div>
      </div>
    </div>
  );
}

export default home;
