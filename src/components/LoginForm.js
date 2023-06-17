import React, {useState} from 'react'

const LoginForm = () => {
  const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[number, setNumber] = useState("");
    const[password, setPassword] = useState("");

    const [allEntry , setAllEntry] = useState([]);

    const submitForm = (e) => {
      e.preventDefault();
       
      if(name && email && number && password ){
        const newEntry = { name:name, email: email,number:number, password: password };

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);

        setEmail("");
        setPassword("");
      } else {
        alert("plz fill the data")
      }

    }
    return (
    <>  
    <div className='Form'>
          <form action="" onSubmit={submitForm}>

          <div className='cenForm'>
            <label htmlFor="name">Name</label>
              <input type="text" className='inptbox' name="name" id="name" autoComplete='off'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
        </div>

          <div className='cenForm'>
            <label htmlFor="email">Email</label>
              <input type="email" className='inptbox' name="email" id="email" autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
        </div>

        <div className='cenForm'>
            <label htmlFor="number">Mobile No</label>
              <input type="number" className='inptbox' name="number" id="number" autoComplete='off'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              />
        </div>

        <div className='cenForm'>
            <label htmlFor="password">Password</label>
              <input type="password" className='inptbox' name="password" id="password" autoComplete='off'
              value={password}
              
              onChange={(e) => setPassword(e.target.value)}
              />
              
        </div>

        <div className='btn'>
              <button   type='submit' className="btn btn-primary">Login</button>
              </div>
        </form>
        </div>

        <div className='result'>
          {
            allEntry.map( (curElem) => {
             return (
                <div className='showDataStyle'>
                  <p>{curElem.name}</p>
                  <p>{curElem.email}</p>
                  <p>{curElem.number}</p>
                 <p>{curElem.password}</p>
                 </div>
                )  
            })
          }
        </div>
    </>
  )
}

export default LoginForm
