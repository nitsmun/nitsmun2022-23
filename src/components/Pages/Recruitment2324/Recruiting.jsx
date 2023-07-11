import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from "moment-timezone";
import './Recruiting.css'
const Recruiting = () => {
    const [name, setName] = useState("");
    const [mobileno, setMobileno] = useState("")
    const [wpno, setWpno] = useState("")
    const [whynitsmun, setWhynitsmun] = useState("");
    const [whyrecruit, setWhyrecruit] = useState("")
    const [experience, setExperience] = useState("")
    const [achievement, setAchievement] = useState("")
    const [hobby, setHobby] = useState("")
    const [content, setContent] = useState("")
    const [branch, setBranch] = useState("");
    const [team, setTeam] = useState("")
    const [partinmun, setPartinmun] = useState("")
    const [yesmun, setYesmun] = useState("")
    const [email, setEmail] = useState("");
    const [scholarId, setScholarId] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [emailVerification, setEmailVerification] = useState(false);
    const [scholarIdVerification, setScholarIdVerification] = useState(false);
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [captchaAnswer, setCaptchaAnswer] = useState("");
    const [otpVerification, setOtpVerification] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpgoing, setOtpgoing] = useState(false)
    const [verifyotp, setVerifyotp] = useState(false)
    const [poster, setPoster] = useState("")
    const [disableotpsend, Setdisableotpsend] = useState(false)
    const [disableformsbmt, setDisableformsbmt] = useState(false)
    // const [resume, setResume] = useState("")
    const [hideteam, setHideteam] = useState(false)
    const [hideTechnical, setHideTechnical] = useState(true)
    const [posterLink, setPosterLink] = useState(false)
    const [Contentwriting, setContentwriting] = useState(false)
    const [ifyesmun, setIfyesmun] = useState(false)


    useEffect(() => {
        generateCaptchaNumbers();
    }, []);

    const generateCaptchaNumbers = () => {
        const first = Math.floor(Math.random() * 20);
        const second = Math.floor(Math.random() * 20);
        setFirstNumber(first);
        setSecondNumber(second);
    };

    //checking if all required fiels are filled
    const isFormValid = () => {
        if (partinmun === "Yes" && team === "Research & Development Team") {
            return (
                name !== "" &&
                email !== "" &&
                whynitsmun !== "" &&
                mobileno !== "" &&
                branch !== "" &&
                scholarId !== "" && wpno !== "" && whyrecruit !== "" && experience !== "" && hobby !== "" && team !== "" && partinmun !== "" && yesmun !== "" && content !== ""
            );
        }
        else if (partinmun === "Yes" && team === "Media & Design Team") {
            return (
                name !== "" &&
                email !== "" &&
                whynitsmun !== "" &&
                mobileno !== "" &&
                branch !== "" &&
                scholarId !== "" && wpno !== "" && whyrecruit !== "" && experience !== "" && hobby !== "" && team !== "" && partinmun !== "" && yesmun !== "" && poster !== ""
            );
        }
        else if (team === "Media & Design Team") {
            return (
                name !== "" &&
                email !== "" &&
                whynitsmun !== "" &&
                mobileno !== "" &&
                branch !== "" &&
                scholarId !== "" && wpno !== "" && whyrecruit !== "" && experience !== "" && hobby !== "" && team !== "" && partinmun !== "" && poster !== ""
            );
        } else if (team === "Research & Development Team") {
            return (
                name !== "" &&
                email !== "" &&
                whynitsmun !== "" &&
                mobileno !== "" &&
                branch !== "" &&
                scholarId !== "" && wpno !== "" && whyrecruit !== "" && experience !== "" && hobby !== "" && team !== "" && partinmun !== "" && content !== ""
            );
        } else if (partinmun === "Yes") {
            return (
                name !== "" &&
                email !== "" &&
                whynitsmun !== "" &&
                mobileno !== "" &&
                branch !== "" &&
                scholarId !== "" && wpno !== "" && whyrecruit !== "" && experience !== "" && hobby !== "" && team !== "" && partinmun !== "" && yesmun !== ""
            );
        }
        else {
            return (
                name !== "" &&
                email !== "" &&
                whynitsmun !== "" &&
                mobileno !== "" &&
                branch !== "" &&
                scholarId !== "" && wpno !== "" && whyrecruit !== "" && experience !== "" && hobby !== "" && team !== "" && partinmun !== ""
            );
        }
    };

    const generateRandomNumbers = () => {
        const min = 1;
        const max = 10;
        const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
        setFirstNumber(num1);
        setSecondNumber(num2);
    };

    useEffect(() => {
        generateRandomNumbers();
    }, []);


    /* form submit button onClick function*/
    const createUser = async () => {

        // Check if all inputs are filled
        if (!isFormValid()) {
            alert("Please fill all the required fields");
            return;
        }

        if (!/^\d+$/.test(mobileno)) {
            alert("Mobile number should only contain numeric characters");
            return;
        }

        // Check if the math captcha is filled
        if (captchaAnswer === "") {
            alert("Please fill the captcha");
            return;
        }

        // Check if the math captcha answer is correct
        const actualAnswer = firstNumber + secondNumber;
        if (parseInt(captchaAnswer) !== actualAnswer) {
            alert("Captcha verification failed. Please try again.");
            return;
        }

        // Check if the OTP is filled
        if (otp === "") {
            alert("Please enter the OTP");
            return;
        }

        // Check if the name contains numeric or symbols
        if (/[\d!@#$%^&*(),.?":{}|<>]/.test(name)) {
            alert("Name should only contain alphabetic characters");
            return;
        }

        // Check if the scholarId is valid
        if (!/^221[1-6][01]\d{2}$/.test(scholarId) || (scholarId[3] === '1' && parseInt(scholarId.slice(-3)) > 157) || (scholarId[3] === '2' && parseInt(scholarId.slice(-3)) > 167) || (scholarId[3] === '3' && parseInt(scholarId.slice(-3)) > 167) || (scholarId[3] === '4' && parseInt(scholarId.slice(-3)) > 166) || (scholarId[3] === '5' && parseInt(scholarId.slice(-3)) > 84) || (scholarId[3] === '6' && parseInt(scholarId.slice(-3)) > 160)) {
            alert("Invalid scholar id");
            return;
        }

        // Check if the email contains uppercase letters
        if (/[A-Z]/.test(email)) {
            alert("Email should be in lowercase");
            return;
        }

        // Check if the email contains symbols
        if (/[!#$%^&*(),?":{}|<>]/.test(email)) {
            alert("Email should not contain symbols");
            return;
        }

        // Check if the email contains symbols before the @ symbol
        const atIndex = email.indexOf("@");
        if (/[!@#$%^&*(),.?":{}|<>]/.test(email.slice(0, atIndex))) {
            alert("Email should not contain symbols before @ symbol");
            return;
        }

        // Check if the email is unique on the server i.e user already registered or not
        try {
            setEmailVerification(true); // Display "Verifying email" message
            setDisableformsbmt(true)
            const response = await axios.post(process.env.REACT_APP_AXIOSPOST_CHECKEMAIL_RAILWAY, {
                // const response = await axios.post("http://localhost:3005/check-email", {
                email: email
            });

            if (!response.data.unique) {
                alert("Email already exist");
                return;
            }
        } catch (error) {
            console.log("Error checking email uniqueness:", error);
            alert("An error occurred while checking email uniqueness");
            return;
        } finally {
            setEmailVerification(false);
            setDisableformsbmt(false)
        }

        // check if scholar id is unique i.e user already registered or not
        try {
            setScholarIdVerification(true);
            setDisableformsbmt(true)
            const response = await axios.post(process.env.REACT_APP_AXIOSPOST_CHECKSCHOLARID_RAILWAY, {
                // const response = await axios.post("http://localhost:3005/check-scholarid", {
                scholarId: scholarId
            });

            if (!response.data.unique) {
                alert("Scholar Id already exist");
                return;
            }
        } catch (error) {
            console.log("Error checking scholar id uniqueness:", error);
            alert("An error occurred while checking scholar id uniqueness");
            return;
        } finally {
            setScholarIdVerification(false);
            setDisableformsbmt(false)
        }

        //verifying otp if correct or not
        try {
            setVerifyotp(true)
            setDisableformsbmt(true)
            const response = await axios.post(process.env.REACT_APP_VERIFYOTP_RAILWAY, {
                // const response = await axios.post("http://localhost:9898/verify-otp", {
                otp, email
            });

            if (response.data.message === "OTP verified successfully") {
                // OTP verified successfully, proceed with form submission

                console.log('OTP verified');
            } else {
                // Wrong OTP entered
                alert('Wrong OTP. Please try again');
                return;
            }
        } catch (error) {
            console.log('Error verifying OTP:', error);
            alert('Wrong OTP. Please try again');
            return
        } finally {
            setVerifyotp(false)
            setDisableformsbmt(false)
        }

        // Check if the email matches the allowed domains i.e only institute emails are accepted
        const emailRegex = /^.+22@(cse|civil|mech|ece|ee|ei)\.nits\.ac\.in$/;

        if (!emailRegex.test(email)) {
            alert("Only first year's INSTITUTE email id are accepted.");
            return;
        }

        //retrieve time in ist
        const timestamp = moment().tz("Asia/Kolkata").format();
        setSubmitting(true);
        setDisableformsbmt(true)
        axios

            .post(process.env.REACT_APP_AXIOSPOST_RAILWAY, {
                // .post('http://localhost:9898/createUser', {
                name,
                mobileno,
                whynitsmun,
                email,
                branch,
                scholarId,
                timestamp,
                poster,
                wpno, whyrecruit, experience, achievement, hobby, content, team, partinmun, yesmun
            })
            .then((response) => {
                setName("");
                setMobileno("");
                setWhynitsmun("");
                setEmail("");
                setBranch("");
                setScholarId("");
                // setResume("")
                setCaptchaAnswer("");
                generateRandomNumbers()
                setOtp("")
                setPoster("")
                setWpno("")
                setWhyrecruit("")
                setExperience("")
                setAchievement("")
                setHobby("")
                setContent("")
                setTeam("")
                setPartinmun("")
                setYesmun("")
                setSubmitting(false);
                setDisableformsbmt(false)
                alert("Form Successfully submitted.");
            });
    };

    /* sending otp */
    const sendOTP = async () => {
        // Check if the email is empty i.e email mandatory
        if (email === "") {
            alert("Please enter an email address");
            return;
        }

        // Check if the email matches the allowed domains i.e only institute emails are accepted
        const emailRegex = /^.+22@(cse|civil|mech|ece|ee|ei)\.nits\.ac\.in$/;

        if (!emailRegex.test(email)) {
            alert("Only first year's INSTITUTE email id are accepted.");
            return;
        }

        // sending otp to email entered by the user
        try {
            setOtpgoing(true); // Display "Sending OTP" message
            Setdisableotpsend(true)
            const response = await axios.post(
                process.env.REACT_APP_OTPSEND_RAILWAY,
                // "http://localhost:9898/send-otp",
                {
                    email,
                }
            );
            if (response.status === 200) {
                alert('OTP sent successfully! Please check your inbox and SPAM folder also.');
                setOtpSent(true);
            }
        } catch (error) {
            console.log('Error sending OTP:', error);
            alert('An error occurred while sending the OTP');
        } finally {
            setOtpgoing(false);
            Setdisableotpsend(false)
        }
    };

    const handleTeamVisible = () => {
        setHideteam(true)
        setHideTechnical(false)
    }

    useEffect(() => {
        if (team === "Media & Design Team") {
            setPosterLink(true)
        } else {
            setPosterLink(false)
        }
    }, [team])

    useEffect(() => {
        if (team === "Research & Development Team") {
            setContentwriting(true)
        } else {
            setContentwriting(false)
        }
    }, [team])

    useEffect(() => {
        if (partinmun === "Yes") {
            setIfyesmun(true)
        } else {
            setIfyesmun(false)
        }
    }, [partinmun])

    return (
        <div className="recruiting-cont">
            <div className='recruitingmain'>
                <div className="form-head">
                    <h2 className='form-header'>NITSMUN RECRUITMENT 2023-24</h2>
                </div>

                <div id='importantinstructionsifcont'>
                    <h2>Important instructions. Please read properly.</h2>
                    <div className="points-list-out-ul">

                        <p>1) Use only your institute email id for filling the form.</p>
                        <p>2) Check your Institute email inbox or SPAM folder for the otp.</p>
                        <p>3) You can only fill this form once so please be attentive while filling the form.</p>
                        <p>4) Input with placeholder * are mandatory to be filled.</p>
                        <p>5) In case of any issue while filling the form please contact <a href="https://wa.me/+918133072305" target='_blank' rel="noreferrer"><span style={{ textDecoration: "Underline", fontFamily: "Nunito", color: "white" }}>Dorothy</span></a> or <a href="https://wa.me/+918812959563" target='_blank' rel="noreferrer"><span style={{ textDecoration: "Underline", fontFamily: "Nunito", color: "white" }}>Ankit</span></a> or <a href="https://wa.me/+919431875819" target='_blank' rel="noreferrer"><span style={{ textDecoration: "Underline", fontFamily: "Nunito", color: "white" }}>Aditya</span></a></p>
                        <p>4)Last date to fill the form is 19th July 2023 EOD.</p>
                    </div>
                </div>
                <div className="form-top">
                    <input
                        type="text"
                        placeholder="Name*"
                        className='input-a'
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="Scholar ID*"
                        value={scholarId}
                        className='input-b'
                        onChange={(event) => {
                            setScholarId(event.target.value);
                        }}
                    />
                </div>

                <div className='form-branch'>
                    <h4 className='form-branch-head' style={{ color: "white" }}>Branch:</h4>
                    <label >
                        <input
                            type="radio"
                            name="branch"
                            value="CE"
                            checked={branch === "CE"}
                            onChange={(event) => {
                                setBranch(event.target.value);
                            }}
                        />
                        CE
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="branch"
                            value="CSE"
                            checked={branch === "CSE"}
                            onChange={(event) => {
                                setBranch(event.target.value);
                            }}
                        />
                        CSE
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="branch"
                            value="ECE"
                            checked={branch === "ECE"}
                            onChange={(event) => {
                                setBranch(event.target.value);
                            }}
                        />
                        ECE
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="branch"
                            value="EE"
                            checked={branch === "EE"}
                            onChange={(event) => {
                                setBranch(event.target.value);
                            }}
                        />
                        EE
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="branch"
                            value="EI"
                            checked={branch === "EI"}
                            onChange={(event) => {
                                setBranch(event.target.value);
                            }}
                        />
                        EI
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="branch"
                            value="ME"
                            checked={branch === "ME"}
                            onChange={(event) => {
                                setBranch(event.target.value);
                            }}
                        />
                        ME
                    </label>



                </div>
                <div className="form-email">
                    <div className="form-email-a">
                        <input
                            type="email"
                            placeholder="Institute email*"
                            value={email}
                            className='input-c'
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <button onClick={sendOTP} disabled={disableotpsend || disableformsbmt} style={{ opacity: disableotpsend || disableformsbmt ? 0.5 : 1, cursor: disableotpsend || disableformsbmt ? "not-allowed" : "pointer" }} className='form-btn-a'>Send OTP to Institute email</button>



                    </div>
                    <div className="form-email-b">
                        <input
                            type="text"
                            placeholder="Enter OTP*"
                            value={otp}
                            className='input-d'
                            onChange={(event) => {
                                setOtp(event.target.value);
                            }}
                        />
                    </div>


                </div>
                {otpgoing && <p id='sendotpmsgid'>Sending otp...</p>}
                <div className="form-contact">
                    <input
                        type="text"
                        placeholder="Contact number*"
                        value={mobileno}
                        className='input-e'
                        onChange={(event) => {
                            setMobileno(event.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="Whatsapp number*"
                        value={wpno}
                        className='input-f'
                        onChange={(event) => {
                            setWpno(event.target.value);
                        }}
                    />

                </div>


                <div className='form-team'>
                    <h4 className='team-head'>Team applying for*</h4>
                    <div className="team-options">

                        <label className='team-label'>
                            <input
                                type="radio"
                                name="team"
                                value="Research & Development Team"
                                checked={team === "Research & Development Team"}
                                onChange={(event) => {
                                    setTeam(event.target.value);
                                }}
                            />
                            Research & Development Team
                        </label>

                        <label className='team-label'>
                            <input
                                type="radio"
                                name="team"
                                value="Public Relations & Outreach Team"
                                checked={team === "Public Relations & Outreach Team"}
                                onChange={(event) => {
                                    setTeam(event.target.value);
                                }}
                            />
                            Public Relations & Outreach Team
                        </label>

                        <label className='team-label'>
                            <input
                                type="radio"
                                name="team"
                                value="Media & Design Team"
                                checked={team === "Media & Design Team"}
                                onChange={(event) => {
                                    setTeam(event.target.value);
                                }}
                            />
                            Media & Design Team
                        </label>

                        {hideTechnical && <label className='team-label' onClick={handleTeamVisible} >
                            <input type="radio" />
                            Technical Team
                        </label>}


                        {hideteam && <div>
                            <label className='team-label' id='somedistancebruh'>
                                <input
                                    type="radio"
                                    name="team"
                                    value="Web Development"
                                    checked={team === "Web Development"}
                                    onChange={(event) => {
                                        setTeam(event.target.value);
                                    }}
                                />
                                Web Development
                            </label>
                            <label className='team-label' id='somedistancebruh'>
                                <input
                                    type="radio"
                                    name="team"
                                    value="UI/UX"
                                    checked={team === "UI/UX"}
                                    onChange={(event) => {
                                        setTeam(event.target.value);
                                    }}
                                />
                                UI/UX
                            </label>
                            <label className='team-label' id='somedistancebruh'>
                                <input
                                    type="radio"
                                    name="team"
                                    value="Flutter"
                                    checked={team === "Flutter"}
                                    onChange={(event) => {
                                        setTeam(event.target.value);
                                    }}
                                />
                                Flutter
                            </label>
                        </div>}

                    </div>
                </div>

                <br />
                <div className="form-team">
                    <h4 className='team-head'>Have you ever participated in an MUN conference?*</h4>

                    <div className='form-options'>
                        <label className='team-label'>
                            <input
                                type="radio"
                                name="partinmun"
                                value="Yes"
                                checked={partinmun === "Yes"}
                                onChange={(event) => {
                                    setPartinmun(event.target.value);
                                }}
                            />
                            Yes
                        </label>

                        <label className='team-label'>
                            <input
                                type="radio"
                                name="partinmun"
                                value="No"
                                checked={partinmun === "No"}
                                onChange={(event) => {
                                    setPartinmun(event.target.value);
                                }}
                            />
                            No
                        </label>
                    </div>
                </div>

                <div className="form-text-input">
                    {ifyesmun && <><textarea typeof='text' placeholder="If yes, which conference and share your experience?*"
                        value={yesmun}
                        className='form-text-a'
                        onChange={(event) => {
                            setYesmun(event.target.value);
                        }}>
                    </textarea></>}


                    <textarea typeof='text' placeholder="Why do you want to be a part of NITSMUN?*"
                        value={whynitsmun}
                        className='form-text-b'
                        onChange={(event) => {
                            setWhynitsmun(event.target.value);
                        }}></textarea>

                    <textarea typeof='text' placeholder="Why should we recruit you?*"
                        value={whyrecruit}
                        className='form-text-c'
                        onChange={(event) => {
                            setWhyrecruit(event.target.value);
                        }}></textarea>

                    <textarea typeof='text' placeholder="Mention your experience supporting your desired team (club, fests, events, etc)*"
                        value={experience}
                        className='form-text-d'
                        onChange={(event) => {
                            setExperience(event.target.value);
                        }}></textarea>

                    <textarea typeof='text' placeholder="Mention your achievements supporting the desired team (if any)"
                        value={achievement}
                        className='form-text-e'
                        onChange={(event) => {
                            setAchievement(event.target.value);
                        }}></textarea>

                    <textarea typeof='text' placeholder="Mention your hobbies/interests*"
                        value={hobby}
                        className='form-text-f'
                        onChange={(event) => {
                            setHobby(event.target.value);
                        }}></textarea>

                    {posterLink && <><h4 className='team-head'>If you're applying for <span id='rddesign'>Design Team</span>  then provide poster links (max : three)*</h4>
                        <textarea typeof='text' rows="4" placeholder='Paste Canva Or G-Drive link here'
                            value={poster}
                            className='form-text-g'
                            onChange={(event) => {
                                setPoster(event.target.value);
                            }}></textarea></>}

                    {Contentwriting && <><h4 className='team-head'>If you're applying for the <span id='rddesign' style={{ fontWeight: "900" }}>Research & Development Team</span>, provide the content:*</h4>
                        <textarea placeholder='Paste content here'
                            value={content}
                            className='form-text-f'
                            onChange={(event) => {
                                setContent(event.target.value);
                            }} rows="5"></textarea></>}

                </div>


                <div className="form-end">
                    <h4 className='team-head'>Prove you're not an robot*</h4>
                    <div className='form-value'>

                        <span style={{ fontWeight: "900", color: 'white' }}>{firstNumber} + {secondNumber} = </span>
                        <span>   <input
                            type="text"
                            required

                            placeholder="Enter the answer"
                            value={captchaAnswer}
                            className='input-g'
                            onChange={(event) => {
                                setCaptchaAnswer(event.target.value);
                            }}
                        /></span>
                    </div>
                    <br />
                    <button onClick={createUser} disabled={disableotpsend || disableformsbmt} style={{ opacity: disableotpsend || disableformsbmt ? 0.5 : 1, cursor: disableotpsend || disableformsbmt ? "not-allowed" : "pointer" }} className='form-submit'>
                        {submitting ? "Submitting..." : "Submit"}{" "}
                    </button>
                </div>

                {emailVerification && <p id='msgverifyingimpot'>Verifying email...</p>}
                {scholarIdVerification && <p id='msgverifyingimpot'>Verifying Scholar Id...</p>}
                {verifyotp && <p id='msgverifyingimpot'>Verifying otp...</p>}


            </div>
        </div>
    )
}

export default Recruiting


