import React, { useState, useEffect } from "react";
import "../Styles/status.css";
import IndiaHistory from "../Graphs/IndiaHistory";
import GlobalHistory from "../Graphs/GlobalHistory";
import { Paper } from "@material-ui/core";
import Footer from './footer';
import DistrictWise from "../Graphs/DistrictWise";
import { url, mapGit_LINK } from "../Configure";
import Loader from "../Extras/Loader";
import KeralaStatus from "../Graphs/KeralaStatus";
import IndiaStatus from "../Graphs/IndiaStatus";
import GlobalStatus from "../Graphs/GlobalStatus";
import KeralaHistory from "../Graphs/KeralaHistory";
import { useViewport } from "../Extras/ViewportProvider";

const Status = () => {
  const { width, height } = useViewport();
  const [data, setData] = useState({
    isLoading: false,
    keralaCurrent: {
      deaths: 0,
      confirmed: 0,
      recovered: 0,
    },
    indiaTdeath: 0,
    worldTdeath: 0,
    worldTcases: 0,
    indiaTcases: 0,
    worldRecover: 0,
    indiaRecover: 0,
  });

  useEffect(() => {
    const fetchData = () => {
      fetch(`${url}/homePage`)
        .then((r) => r.json())
        .then((res) => {
          setData({
            indiaRecover: res["india"]["TotalRecovered"],
            indiaTdeath: res["india"]["TotalDeaths"],
            worldRecover: res["global"]["recovered"],
            worldTdeath: res["global"]["deaths"],
            worldTcases: res["global"]["cases"],
            indiaTcases: res["india"]["TotalCases"],
            keralaCurrent: {
              deaths: res["keralaLive"]["deaths"],
              recovered: res["keralaLive"]["recovered"],
              confirmed: res["keralaLive"]["confirmed"],
            },
            isLoading: true,
          });
        });
    };
    fetchData();
  }, []);

  return (
    <>
      {data.isLoading === true ? (
        <div>
              <center>
              <b
              style={{

                fontFamily: "arch",
                fontSize: 50
              }}
            >
             Some Detailed Analysis
            </b>
                <KeralaHistory />
                <br />
                <IndiaHistory />
                <br />
                <br />
                 <GlobalHistory />
                <br />
              </center>
              <br />
              <center>
                <Paper
                  elevation={10}
                  style={{
                    width: window.innerWidth*.8,
                  }}
                >
                  <br />
                  <h3 style={{ textAlign: "center" }}>
                    Kerala DistrictWise Active Cases
                  </h3>
                  <DistrictWise />
                  <br />
                </Paper>
              </center>

              <br />
              <div
                style={{
                  display: "flex",
                  marginTop: window.innerHeight * .07,
                  marginLeft: window.innerHeight * .07
                }}>
                <h2 style={{ marginLeft: height * 0.05 }}>Kerala</h2>
                <div
                  style={{
                    marginTop: -height * 0.2,
                    marginLeft: -height * 0.25,
                  }}>
                  <KeralaStatus
                    cases={parseInt(data.keralaCurrent.confirmed)}
                    deaths={parseInt(data.keralaCurrent.deaths)}
                    recovered={parseInt(data.keralaCurrent.recovered)}
                  />
                </div>
                <h2 style={{ textAlign: "center" }}>India</h2>
                <div
                  style={{
                    marginTop: height * 0.05,
                    marginLeft: -height * 0.05,
                  }}
                >
                  <IndiaStatus
                    cases={parseInt(data.indiaTcases)}
                    deaths={parseInt(data.indiaTdeath)}
                    recovered={parseInt(data.indiaRecover)}
                  />
                </div>
                <h2 style={{ marginLeft: 5 }}>World</h2>
                <div
                  style={{
                    marginTop: height * 0.05,
                    marginLeft: -height * 0.07,
                  }}
                >
                  <GlobalStatus
                    cases={parseInt(data.worldTcases)}
                    deaths={parseInt(data.worldTdeath)}
                    recovered={parseInt(data.worldRecover)}
                  />
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />
              <div className="footer_wrapper">
                <Footer/>
              </div>
            </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Status;
