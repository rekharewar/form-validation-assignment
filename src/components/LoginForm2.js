import React, { useState } from "react";

const LoginFormBootstrap = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);
  const [gender, setGender] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (name && email && number && password) {
      const newEntry = {
        name: name,
        email: email,
        number: number,
        password: password,
        gender: gender,
      };

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
    } else {
      alert("plz fill the data");
    }
  };
  return (
    <>


<div className="container">
  <div className="row">
    <div className="col-sm-5 main_section">
    <div className="form_section">
          <h2 align="center" className="heading_text">
            Register Form
          </h2>
          <form onSubmit={submitForm}>
            <div class="form-group">
              <label className="laber_tag" for="name">
                Name
              </label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                required
              />
            </div>
            <div class="form-group">
              <label className="laber_tag" for="mobile">
                Mobile
              </label>
              <input
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                class="form-control"
                id="mobile"
                placeholder="Enter Mobile"
                required
              />
            </div>
            <div class="form-group">
              <label className="laber_tag" for="name">
                Email
              </label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="form-group">
              <label className="laber_tag" for="name">
                Password
              </label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group">
              <label className="laber_tag" for="gender">
                Gender
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  id="male"
                  value="male"
                  checked
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  onChange={(e) => setGender(e.target.value)}
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>
            <div class="form-group btn_section">
              <button type="submit" class="btn btn-primary submitBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
    </div>
    <div className="col-sm-7">
            <table className="table">
              <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Password</th>
              </thead>
              <tbody>
                {allEntry.map((curElem) => {
                  return (
                    <tr>
                      <td>{curElem.name}</td>
                      <td>{curElem.email}</td>
                      <td>{curElem.gender}</td>
                      <td>{curElem.number}</td>
                      <td>{curElem.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    </div>
  </div>
</div>





{/* 
      <div className="main_section">
        <div className="form_section">
          <h2 align="center" className="heading_text">
            Register Form
          </h2>
          <form onSubmit={submitForm}>
            <div class="form-group">
              <label className="laber_tag" for="name">
                Name
              </label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                required
              />
            </div>
            <div class="form-group">
              <label className="laber_tag" for="mobile">
                Mobile
              </label>
              <input
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                class="form-control"
                id="mobile"
                placeholder="Enter Mobile"
                required
              />
            </div>
            <div class="form-group">
              <label className="laber_tag" for="name">
                Email
              </label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="form-group">
              <label className="laber_tag" for="name">
                Password
              </label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group">
              <label className="laber_tag" for="gender">
                Gender
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  id="male"
                  value="male"
                  checked
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  onChange={(e) => setGender(e.target.value)}
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>
            <div class="form-group btn_section">
              <button type="submit" class="btn btn-primary submitBtn">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="result-section">
          <div className="table_section">
            <table className="table">
              <thead>
                <td>Name</td>
                <td>Email</td>
                <td>Gender</td>
                <td>Mobile</td>
                <td>Password</td>
              </thead>
              <tbody>
                {allEntry.map((curElem) => {
                  return (
                    <tr>
                      <td>{curElem.name}</td>
                      <td>{curElem.email}</td>
                      <td>{curElem.gender}</td>
                      <td>{curElem.number}</td>
                      <td>{curElem.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LoginFormBootstrap;
