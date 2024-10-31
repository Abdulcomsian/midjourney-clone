'use client'
import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/reducer/auth';
import { connect } from "react-redux";
import { login, register } from "../../redux/action/authAction";

function AuthModal({showModal,handleCloseAuthModal,authFlag}) {
  const [userName, setUserName]= useState('');
  const [userEmail, setUserEmail]= useState('');
  const [userPassword, setUserPassword]= useState('');
  const [userLanguage, setUserLangauge]= useState('');
  const [userCountry, setUserCountry]= useState('');
  localStorage.getItem("token");
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  const postLoginHandler = async (event) => {
    event.preventDefault();
    try {
      if (userEmail !== "" && userPassword !== "") {
        if (regEmail.test(userEmail) === false) {
          setUserEmail(userEmail);
          return false;
        } else {
          setUserEmail(userEmail);
          try {
            await props.loginHandler(userEmail, userPassword);
          } catch (err) {
          }
        }
      } else {
        alert("Please Enter Login Credential Carefully !");
      }
    } catch (error) {}
  };
  const registerHandler = async (event) => {
    event.preventDefault();
    try {
      if (
        userName != "" &&
        userName != "" &&
        userPassword != "" &&
        userLanguage != "" &&
        userCountry != ""
      ) {
        if (regEmail.test(userEmail) === false) {
          setUserEmail(userEmail);
          return false;
        } else {
          setUserEmail(userEmail);
          try {
            await props.registerHandler(
              userName,
              userName,
              userPassword,
              userLanguage,
              userCountry,
            );
          } catch (err) {
            alert(err.message);
          }
        }
      } else {
        alert("Please fill all Information Carefully !");
      }
    } catch (error) {
    }
  };
    return(
        <>
        <Modal show={showModal} centered className='auth-modal border' onHide={handleCloseAuthModal}>
          <Modal.Header closeButton className='pt-4 px-4 close-modal-button border-0'>
          </Modal.Header>
          <Modal.Body className='pt-0'>
          {authFlag === "login" ? (
            <p className="pb-3 text-center fs-5 fw-500">Log</p>
          ) : (
            <p className="pb-3 text-center fs-5 fw-500">Sign up</p>
          ) }
            
            {/* <Button className="border btn mb-3 p-3 w-100 bg-transparent text-dark d-flex justify-content-center gap-2 align-items-center fs-14">
                <span><svg className="inline-block text-[#5865f2]" width="24" height="24" viewBox="0 0 256 256" fill="#5865f2" stroke="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><g id="DiscordLogo"><g fill="#5865f2" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"><g transform="scale(5.33333,5.33333)"><path d="M40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4c-6.961,0 -10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.681,0.537 -10,4 -10,4c0,0 -5.121,7.425 -6,22c5.162,5.953 13,6 13,6l1.639,-2.185c-2.782,-0.967 -5.924,-2.694 -8.639,-5.815c3.238,2.45 8.125,5 16,5c7.875,0 12.762,-2.55 16,-5c-2.715,3.121 -5.857,4.848 -8.639,5.815l1.639,2.185c0,0 7.838,-0.047 13,-6c-0.879,-14.575 -6,-22 -6,-22zM17.5,30c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4c1.933,0 3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4zM30.5,30c-1.933,0 -3.5,-1.791 -3.5,-4c0,-2.209 1.567,-4 3.5,-4c1.933,0 3.5,1.791 3.5,4c0,2.209 -1.567,4 -3.5,4z"></path></g></g></g></svg></span>
                <span>Continue with Discord</span>
            </Button> */}
              {authFlag === "login" ? (
                <div className='login-form'>
                  <form onSubmit={postLoginHandler}>
                    <div className='input-group mb-2'>
                      <input className='form-control py-3' placeholder='Enter your Email/Username' type='text' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}/>
                    </div>
                    <div className='input-group mb-2'>
                      <input className='form-control py-3' placeholder='Enter your Password' type='password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
                    </div>
                  
                    <Button  type='submit' className="border-0 btn mb-3 p-3 w-100 common-btn d-flex justify-content-center gap-2 align-items-center fs-14">
                      <span>Login</span>
                    </Button>
                  </form>
                </div>
              ) : (
                <div className='login-form'>
                  <form onSubmit={registerHandler}>
                    <div className='input-group mb-2'>
                      <input className='form-control py-3' placeholder='Enter your Username' type='text' />
                    </div>
                    <div className='input-group mb-2'>
                      <input className='form-control py-3' placeholder='Enter your Username' type='text' />
                    </div>
                    <div className='input-group mb-2'>
                    <select placeholder="Choose a Language..."  className='form-control py-3'>
                      <option value="AF">Afrikaans</option>
                      <option value="SQ">Albanian</option>
                      <option value="AR">Arabic</option>
                      <option value="HY">Armenian</option>
                      <option value="EU">Basque</option>
                      <option value="BN">Bengali</option>
                      <option value="BG">Bulgarian</option>
                      <option value="CA">Catalan</option>
                      <option value="KM">Cambodian</option>
                      <option value="ZH">Chinese (Mandarin)</option>
                      <option value="HR">Croatian</option>
                      <option value="CS">Czech</option>
                      <option value="DA">Danish</option>
                      <option value="NL">Dutch</option>
                      <option value="EN">English</option>
                      <option value="ET">Estonian</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finnish</option>
                      <option value="FR">French</option>
                      <option value="KA">Georgian</option>
                      <option value="DE">German</option>
                      <option value="EL">Greek</option>
                      <option value="GU">Gujarati</option>
                      <option value="HE">Hebrew</option>
                      <option value="HI">Hindi</option>
                      <option value="HU">Hungarian</option>
                      <option value="IS">Icelandic</option>
                      <option value="ID">Indonesian</option>
                      <option value="GA">Irish</option>
                      <option value="IT">Italian</option>
                      <option value="JA">Japanese</option>
                      <option value="JW">Javanese</option>
                      <option value="KO">Korean</option>
                      <option value="LA">Latin</option>
                      <option value="LV">Latvian</option>
                      <option value="LT">Lithuanian</option>
                      <option value="MK">Macedonian</option>
                      <option value="MS">Malay</option>
                      <option value="ML">Malayalam</option>
                      <option value="MT">Maltese</option>
                      <option value="MI">Maori</option>
                      <option value="MR">Marathi</option>
                      <option value="MN">Mongolian</option>
                      <option value="NE">Nepali</option>
                      <option value="NO">Norwegian</option>
                      <option value="FA">Persian</option>
                      <option value="PL">Polish</option>
                      <option value="PT">Portuguese</option>
                      <option value="PA">Punjabi</option>
                      <option value="QU">Quechua</option>
                      <option value="RO">Romanian</option>
                      <option value="RU">Russian</option>
                      <option value="SM">Samoan</option>
                      <option value="SR">Serbian</option>
                      <option value="SK">Slovak</option>
                      <option value="SL">Slovenian</option>
                      <option value="ES">Spanish</option>
                      <option value="SW">Swahili</option>
                      <option value="SV">Swedish </option>
                      <option value="TA">Tamil</option>
                      <option value="TT">Tatar</option>
                      <option value="TE">Telugu</option>
                      <option value="TH">Thai</option>
                      <option value="BO">Tibetan</option>
                      <option value="TO">Tonga</option>
                      <option value="TR">Turkish</option>
                      <option value="UK">Ukrainian</option>
                      <option value="UR">Urdu</option>
                      <option value="UZ">Uzbek</option>
                      <option value="VI">Vietnamese</option>
                      <option value="CY">Welsh</option>
                      <option value="XH">Xhosa</option>
                    </select>
                    </div>
                    <div className='input-group mb-2'>
                      <input className='form-control py-3' placeholder='Enter your Password' type='password' />
                    </div>
                    <Button type='submit' className="border-0 btn mb-3 p-3 w-100 common-btn d-flex justify-content-center gap-2 align-items-center fs-14">
                      <span>Sign up</span>
                    </Button>
                  </form>
                  
                </div>
              )}

          </Modal.Body>
        </Modal>
      </>
    )
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  error: state.auth.error,
  authenticated: state.auth.authenticated,
  statusLogout: state.auth.statusLogout
});

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (userEmail, userPassword) => dispatch(login(userEmail, userPassword)),
  registerHandler: (
    userName,
    userEmail,
    userPassword,
    userLanguage,
    userCountry,
  ) =>
    dispatch(
      register(
        userName,
        userEmail,
        userPassword,
        userLanguage,
        userCountry,
      )
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
