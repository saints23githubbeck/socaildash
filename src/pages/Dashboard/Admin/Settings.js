import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Logo from "../../../assets/images/logo.png";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { paymentType } from "./Components/adminData";

const Settings = () => {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);

  const handleOpen = (index) => {
    setShow(true);
    setActive(index);
  };

  return (
    <DashboardLayout>
      <h1>Settings</h1>
      <div className="settingHeader">
        <h5
          style={{
            background: step === 1 ? "#3578e5" : null,
            borderRadius: step === 1 ? "0 10px 10px 0px" : null,
            color: step === 1 ? "#fff" : null,
          }}
          onClick={() => setStep(1)}
        >
          site Settings
        </h5>
        <h5
          style={{
            background: step === 2 ? " #3578e5" : null,
            borderRadius: step === 2 ? "0 10px 10px 0px" : null,
            color: step === 2 ? "#fff" : null,
          }}
          onClick={() => setStep(2)}
        >
          Email Settings
        </h5>
        <h5
          style={{
            width: step === 1 ? "130px" : null,
            background: step === 3 ? " #3578e5" : null,
            borderRadius: step === 3 ? "0 10px 10px 0px" : null,
            color: step === 3 ? "#fff" : null,
          }}
          onClick={() => setStep(3)}
        >
          Payment Settings
        </h5>
      </div>
      <div>
        {step === 1 && (
          <div>
            <p className="settingTop">Site Settings</p>
            <div className="siteSetting">
              <div className="siteSettingList">
                <p className="siteSettingP">Favicon</p>
                <div className="siteSettingDiv">
                  <div className="siteSettingDivInp">
                    <div className="headerLogo DivInp">
                      <img src={Logo} alt="logo" width={60} height={60} />
                    </div>
                  </div>
                  <div className="siteFormInputBtn">Choose file here</div>
                </div>
              </div>
              <div className="siteSettingList">
                <p className="siteSettingP">Logo</p>
                <div className="siteSettingDiv">
                  <div className="siteSettingDivInp">
                    <div className="headerLogo DivInp">
                      <img src={Logo} alt="logo" width={60} height={60} />
                      <h1>SocialDash</h1>
                    </div>
                  </div>
                  <div className="siteFormInputBtn">Choose file here</div>
                </div>
              </div>
              <div className="siteSettingList">
                <p className="siteSettingP">Settings</p>
                <div className="siteSettingDiv">
                  <div className="siteFormInput">
                    <p>App Name</p>
                    <input
                      type="text"
                      required
                      id="name"
                      autoComplete="name"
                      autoFocus
                      placeholder="enter app name"
                    />
                  </div>
                  <div className="siteFormInput">
                    <p>Footer Text</p>
                    <input
                      type="text"
                      required
                      id="name"
                      autoComplete="name"
                      autoFocus
                      placeholder="enter footer text"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <FormControl component="fieldset">
                      <FormGroup
                        aria-label="position"
                        style={{ padding: "25px" }}
                      >
                        <FormControlLabel
                          style={{
                            paddingLeft: "-50px",
                            paddingRight: "30px",
                            width: "100px",
                          }}
                          value="end"
                          control={<Switch color="primary" />}
                          label="RTL"
                          labelPlacement="end"
                        />
                        <FormLabel>GDPR</FormLabel>
                        <FormLabel> Cookies</FormLabel>
                        <FormControlLabel
                          style={{
                            marginLeft: "-25px",
                            width: "100px",
                            paddingRight: "30px",
                          }}
                          control={<Switch color="primary" defaultChecked />}
                          label=" "
                          labelPlacement="top"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                  <div className="siteFormInput">
                    <input placeholder="We use this cookies to ensure that we give you the best experience." />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                justifyContent: "end",
                display: "flex",
                margin: "-20px 30px",
              }}
            >
              <p className="siteFormInputBtn">Save</p>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <p className="settingTop">Email Settings</p>

            <div className="emailSettings">
              <div className="siteFormInput">
                <p>Mail Driver</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
              <div className="siteFormInput">
                <p>Mail Host</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
              <div className="siteFormInput">
                <p>Mail Port</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
              <div className="siteFormInput">
                <p>Mail Username</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
              <div className="siteFormInput">
                <p>Mail Password</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
              <div className="siteFormInput">
                <p>Mail Encrytion</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
              <div className="siteFormInput">
                <p>Mail From Address</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
              <div className="siteFormInput">
                <p>Mail From Name</p>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  autoFocus
                />
              </div>
            </div>
            <div className="emailSettingsBtn" >
              <div
                className="siteFormInputBtn"
                style={{ background: "#1FC8ED" }}
              >
                Send Text Mail
              </div>
              <div className="siteFormInputBtn">Save Changes</div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <p className="settingTop">Payment Settings</p>
            <div>
              <div className="sitePayment">
                <div className="siteFormInput">
                  <p>Payment Settings *</p>
                  <input
                    type="text"
                    required
                    id="name"
                    autoComplete="name"
                    autoFocus
                    placeholder="$"
                  />
                </div>
                <div className="siteFormInput">
                  <p>Currency *</p>
                  <input
                    type="text"
                    required
                    id="name"
                    autoComplete="name"
                    autoFocus
                    placeholder="USD"
                  />
                </div>
              </div>
            </div>
            <div>
              <>
                {paymentType.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="paymentSetting">
                        <CreditCardIcon />
                        <h5>{item.name}</h5>
                        {show && active === index ? (
                          <p onClick={() => handleOpen(index)}>-</p>
                        ) : (
                          <p onClick={() => handleOpen(index)}>+</p>
                        )}
                      </div>
                      {show && active === index && (
                        <div>
                          <h3>{item.name}</h3>
                          <p>
                            Note : This details will be used to make checkout
                            plan
                          </p>
                          <div className="payCollaspeDetail" >
                            <div className="siteFormInput">
                              <p>{item.name} Key</p>
                              <input
                                type="text"
                                required
                                id="name"
                                autoComplete="name"
                              />
                            </div>
                            <div className="siteFormInput">
                              <p>{item.name}s Secret</p>
                              <input
                                type="text"
                                required
                                id="name"
                                autoComplete="name"
                              />
                            </div>
                            <div className="siteFormInput">
                              <p>{item.name} Webhooksecret</p>
                              <input
                                type="text"
                                required
                                id="name"
                                autoComplete="name"
                                autoFocus
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
