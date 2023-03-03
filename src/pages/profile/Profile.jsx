import React, { useState } from 'react'
import student from "../../assets/fstudent.jpg"
import Button from '../../components/Button'
import PageMenu from '../../components/PageMenu';

const initialState = {
  name: "Tunde",
  email: "Tunde@gmail.com",
  phone: "123",
  bio: "hello",
  photo: "",
  role: "",
  isVerfied: false,
  
};

const Profile = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, phone, bio, photo, } = formData;  
  const handleInputChange = (e) => {
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
  };

  const handleImageChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  };


const profile = () => {};
  return (
    <div className='bg-bg-off-white  min-h-screen pt-20 px-10'>
      <PageMenu />
      <div className='hero'>
        <div className="card w-96 bg-bg-off-white text-bg-black shadow-2xl my-5 ">
          <h1 className='text-bg-black text-3xl font-bold p-2 '>Profile:</h1>
          <div className='text-center bg-white'>
            <figure className="mx-8 pt-5">
            <img src={student} alt="profile img" className="rounded-xl" />
            </figure>
            <h3 className='mt-2 text-bg-purple text-2xl'>Role:<span className='pl-3 text-bg-black text-xl'>Admin</span></h3>
          </div>
          <div className="card-body text-center">
            <form onSubmit={profile}>
              <div className="form-control">
                <label className="label">
                    <span className="label-text text-bg-black">Change Photo:</span>
                </label>
                <input type="file" accept='image/*' name='photo' value={photo} onChange={handleImageChange} className="file-input file-input-bg-secondary max-w-xs shadow-2xl bg-bg-white"/>
              </div>
              
              <div className="form-control">
                <label className="label">
                    <span className="label-text text-bg-black">Name</span>
                </label>
                <input type="text" placeholder="Name" required name='name' value={name} onChange={handleInputChange} className="input input-bordered bg-bg-white shadow-2xl" />
              </div>

              <div className="form-control">
              <label className="label">
                  <span className="label-text text-bg-black">Email</span>
              </label>
              <input type="email" placeholder="Email" disabled name='email' value={email} onChange={handleInputChange} className="input input-bordered bg-bg-white shadow-2xl text-bg-off-white" />
              </div>

              <div className="form-control">
              <label className="label">
                  <span className="label-text text-bg-black">Phone</span>
              </label>
              <input type="text" placeholder="Phone No" name='phone' value={phone} onChange={handleInputChange} className="input input-bordered bg-bg-white shadow-2xl " />
              </div>

              <div className="form-control">
              <label className="label">
                  <span className="label-text text-bg-black">Bio</span>
              </label>
              <textarea type="text" placeholder="Bio" name='bio' value={bio} rows="10" onChange={handleInputChange} className="textarea max-w-xs bg-bg-white shadow-2xl "></textarea>
              </div>
              <Button>update profile</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile