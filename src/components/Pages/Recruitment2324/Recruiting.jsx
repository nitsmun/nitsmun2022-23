import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from "moment-timezone";
import './Recruiting.css'
import Ip from './Ip';
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
    // const [resume, setResume] = useState("")

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
        return (
            name !== "" &&
            email !== "" &&
            whynitsmun !== "" &&
            mobileno !== "" &&
            branch !== "" &&
            scholarId !== "" && wpno !== "" && whyrecruit !== "" && experience !== "" && hobby !== "" && team !== "" && partinmun !== ""

        );
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
        if (!/^221\d{4}$/.test(scholarId)) {
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
            const response = await axios.post(process.env.REACT_APP_AXIOSPOST_CHECKEMAIL_RAILWAY, {
            // const response = await axios.post("http://localhost:3005/check-email", {
                email: email
            });
            setEmailVerification(false);
            if (!response.data.unique) {
                alert("Email already exist");
                return;
            }
        } catch (error) {
            console.log("Error checking email uniqueness:", error);
            alert("An error occurred while checking email uniqueness");
            return;
        }

        // check if scholar id is unique i.e user already registered or not
        try {
            setScholarIdVerification(true);
            const response = await axios.post(process.env.REACT_APP_AXIOSPOST_CHECKSCHOLARID_RAILWAY, {
            // const response = await axios.post("http://localhost:3005/check-scholarid", {
                scholarId: scholarId
            });
            setScholarIdVerification(false);
            if (!response.data.unique) {
                alert("Scholar Id already exist");
                return;
            }
        } catch (error) {
            console.log("Error checking scholar id uniqueness:", error);
            alert("An error occurred while checking scholar id uniqueness");
            return;
        }

        //verifying otp if correct or not
        try {
            setVerifyotp(true)
            const response = await axios.post(process.env.REACT_APP_VERIFYOTP_RAILWAY, {
            // const response = await axios.post("http://localhost:3005/verify-otp", {
                otp,
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
        }

        // Check if the email matches the allowed domains i.e only institute emails are accepted
        const allowedDomains = [
            "cse.nits.ac.in",
            "civil.nits.ac.in",
            "me.nits.ac.in",
            "ece.nits.ac.in",
            "ee.nits.ac.in",
            "ei.nits.ac.in",
        ];
        const domain = email.split("@")[1];

        if (!allowedDomains.includes(domain)) {
            alert("Only nits insitute email accepted.");
            return;
        }

        //retrieve time in ist
        const timestamp = moment().tz("Asia/Kolkata").format();
        setSubmitting(true);
        axios

            .post(process.env.REACT_APP_AXIOSPOST_RAILWAY, {
            // .post('http://localhost:3005/createUser', {
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
                alert("Form Successfully submitted.");
            });
    };

    const sendOTP = async () => {
        // Check if the email is empty i.e email mandatory
        if (email === "") {
            alert("Please enter an email address");
            return;
        }

        // Check if the email matches the allowed domains i.e only nits institute email are accepted
        const allowedDomains = [
            "cse.nits.ac.in",
            "civil.nits.ac.in",
            "me.nits.ac.in",
            "ece.nits.ac.in",
            "ee.nits.ac.in",
            "ei.nits.ac.in",
        ];
        const domain = email.split("@")[1];

        if (!allowedDomains.includes(domain)) {
            alert("Only NITS institute email is accepted.");
            return;
        }

        // sending otp to email entered by the user
        try {
            setOtpgoing(true); // Display "Sending OTP" message
            const response = await axios.post(
                process.env.REACT_APP_OTPSEND_RAILWAY,
                // "http://localhost:3005/send-otp",
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
        }
    };
    return (

        <div className='recruitingmain'>
            <input
                type="text"
                placeholder="Name*"
                className='plaoiods'
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Scholar ID*"
                value={scholarId}
                className='plaoiods'
                onChange={(event) => {
                    setScholarId(event.target.value);
                }}
            />

Branch*
            <div className='sasjkwe'>
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
                        value="ME"
                        checked={branch === "ME"}
                        onChange={(event) => {
                            setBranch(event.target.value);
                        }}
                    />
                    ME
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
            </div>

            <input
                type="email"
                placeholder="Institute email*"
                value={email}
                className='plaoiods'
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />

            <button onClick={sendOTP} className='djdkjsiur'>Send OTP to institute email.</button>
            {otpgoing && <p>Sending otp. It might take 10 seconds so please be patient...</p>}
            <div>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    className='plaoiods'
                    onChange={(event) => {
                        setOtp(event.target.value);
                    }}
                />
            </div>

            <input
                type="text"
                placeholder="Contact number*"
                value={mobileno}
                className='plaoiods'
                onChange={(event) => {
                    setMobileno(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Whatsapp number*"
                value={wpno}
                className='plaoiods'
                onChange={(event) => {
                    setWpno(event.target.value);
                }}
            />


            Team applying for*?
            <div className='sasjkwe'>
                <label >
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

                <label >
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

                <label >
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

                <label >
                    <input
                        type="radio"
                        name="team"
                        value="Technical Team"
                        checked={team === "Technical Team"}
                        onChange={(event) => {
                            setTeam(event.target.value);
                        }}
                    />
                    Technical Team
                </label>
            </div>

            <br />
            Have you ever participated in an MUN conference* ?
            <div className='sasjkwe'>
                <label >
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

                <label >
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

            <input
                type="text"
                placeholder="If yes, which conference and share your experience?"
                value={yesmun}
                className='plaoiods'
                onChange={(event) => {
                    setYesmun(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Why do you want to be a part of NITSMUN?*"
                value={whynitsmun}
                className='plaoiods'
                onChange={(event) => {
                    setWhynitsmun(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Why should we recruit you?*"
                value={whyrecruit}
                className='plaoiods'
                onChange={(event) => {
                    setWhyrecruit(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Mention your experience supporting your desired team (club, fests, events, etc)*"
                value={experience}
                className='plaoiods'
                onChange={(event) => {
                    setExperience(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Mention your achievements supporting the desired team (if any)"
                value={achievement}
                className='plaoiods'
                onChange={(event) => {
                    setAchievement(event.target.value);
                }}
            />

            <input
                type="text"
                placeholder="Mention your hobbies/interests*"
                value={hobby}
                className='plaoiods'
                onChange={(event) => {
                    setHobby(event.target.value);
                }}
            />

            {/* <input
                type="text"
                placeholder="Your resume"
                className='plaoiods'
                value={resume}
                onChange={(event) => {
                    setResume(event.target.value);
                }}
            /> */}

            If you're applying for deisgn team then provide links of best 3 posters:
            <input type="text" placeholder='If you are applying for the design team, upload sample designs (canva or gdrive link)'
                value={poster}
                className='plaoiods'
                onChange={(event) => {
                    setPoster(event.target.value);
                }}
            />

             If you are applying for the Research & Development Team, upload any content written by you:
            <input type="text" placeholder=' If you are applying for the content team, upload any content written by you (in .pdf or .docx format)'
                value={content}
                className='plaoiods'
                onChange={(event) => {
                    setContent(event.target.value);
                }}
            />

            <h2>Prove you're not an robot.</h2>
            <span>{firstNumber} + {secondNumber} = </span>
            <span>   <input
                type="text"
                required
                placeholder="Enter the answer"
                value={captchaAnswer}
                className='plaoiods'
                onChange={(event) => {
                    setCaptchaAnswer(event.target.value);
                }}
            /></span>

            <br />
            <button onClick={createUser} className='djdkjsiur'>
                {submitting ? "Submitting..." : "Submit"}{" "}
            </button>


        
            {emailVerification && <p>Verifying email...</p>}
            {scholarIdVerification && <p>Verifying Scholar Id...</p>}
         
            {verifyotp && <p>Verifying otp...</p>}

            <br /><br /><br /><br />
            <div className="p2 mnjkl">
                Current user :{" "}
                <div className="ipdtls">
                    <Ip />
                </div>{" "}
            </div>
        </div>
    )
}

export default Recruiting


