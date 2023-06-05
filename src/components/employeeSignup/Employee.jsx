import React, { useEffect } from "react";
import MultiSelect from "../selectBox/SelectBox";
import { useState } from "react";
import { postFetchUser } from "../api/Api";
import "./Employee.css";
// import MultipleSelectPlaceholder from "../../assets/MultipleSelectBox";

const Employe = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    JobTitle: "",
    description: "",
    skills: [],
    city: "",
    state: "",
    address: "",
  });
  const [adhar, setAdhar] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setValid(regex.test(passwordValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("firstName", data.firstName);
    myForm.append("lastName", data.lastName);
    myForm.append("email", data.email);
    myForm.append("skills", data.skills);
    myForm.append("description", data.description);
    myForm.append("JobTitle", data.JobTitle);
    myForm.append("address", data.address);
    myForm.append("gender", data.gender);
    myForm.append("phone", data.phone);
    myForm.append("state", data.state);
    myForm.append("city", data.city);
    myForm.append("password", password);
    myForm.append("lat", latitude);
    myForm.append("lng", longitude);
    myForm.append("adhar", adhar);
    try {
      const res = await postFetchUser(
        "http://localhost:8500/api/tech/create",
        myForm
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser.");
    }
  }, []);
  return (
    <div>
      <section
        className="vh-100 gradient-custom"
        style={{ overflow: "scroll" }}
      >
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            name="firstName"
                            vakue={data.firstName}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                            name="lastName"
                            vakue={data.lastName}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="address"
                            name="address"
                            vakue={data.address}
                            onChange={handleChange}
                          />
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <select
                          className="select form-control-lg w-100"
                          id="gender"
                          name="gender"
                          value={data.gender}
                          onChange={handleChange}
                        >
                          <option>Choose option</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others </option>
                        </select>
                        <label className="form-label select-label ms-3">
                          Select Gender
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-12">
                        <select
                          className="select form-control-lg w-100"
                          id="JobTitle"
                          name="JobTitle"
                          value={data.JobTitle}
                          onChange={handleChange}
                        >
                          <option>Choose option</option>
                          <option>Electrician</option>
                          <option>Mechanic</option>
                          <option>Plumber </option>
                          <option>Guard </option>
                          <option>Coaching Teacher </option>
                          <option>Cleaning </option>
                          <option>Cooking </option>
                        </select>
                        <label className="form-label select-label ms-3">
                          Select JOBTITLE
                        </label>
                      </div>
                    </div>

                    <MultiSelect onChange={handleChange} data={data} />

                    <div className="row mt-4">
                      <div className="col-md-6 mb-4 ">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="city"
                            className="form-control form-control-lg"
                            name="city"
                            value={data.city}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="city">
                            City
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="state"
                            className="form-control form-control-lg"
                            name="state"
                            value={data.state}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="state">
                            state
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="desc"
                            className="form-control form-control-lg"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="desc">
                            Desc
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="Mixed character of A-a-@-1"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            minLength={8}
                          />
                          {password ? (
                            valid ? (
                              <p style={{ color: "green" }}>
                                Password is strong
                              </p>
                            ) : (
                              <p style={{ color: "red" }}>Password is weak</p>
                            )
                          ) : (
                            ""
                          )}
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="file"
                          id="file"
                          className="form-control form-control-lg"
                          name="adhar"
                          //   value={adhar}
                          onChange={(e) => setAdhar(e.target.files[0])}
                        />
                        <label className="form-label" htmlFor="file">
                          Upload Adhar
                        </label>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        defaultValue="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employe;
