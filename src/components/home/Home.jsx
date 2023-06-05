import React, { useEffect, useState } from "react";
import "./Home.css";
import { getFetch } from "../api/Api";
const Home = () => {
  const [data, setData] = useState(null);

  const getProfileData = async () => {
    try {
      const res = await getFetch("http://localhost:8500/api/tech/me");
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfileData();
  }, []);

  let skills = data?.skills[0]?.split(",");
  // console.log(data);
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>{`${data?.firstName} ${data?.lastName}`}</h5>
                    <p>Mechanic</p>
                    <i className="far fa-edit mb-5" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{data?.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{data?.phone}</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Skills</h6>
                          {skills?.map((elem) => {
                            return (
                              <div key={elem}>
                                <p className="text-muted">{elem}</p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">{data?.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
