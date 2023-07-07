import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Resultsrecruit.css'
const Resultsrecruitment = () => {
    useEffect(() => {
        document.title = "Recruitment responses || NITSMUN"
    })

    const [errormsg, setErrormsg] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [results, setResults] = useState([])
    const [successMessage, setSuccessMessage] = useState("")
    const [nologin, setNologin] = useState(false)
    const [loggingin, setLoggingin] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState("");

    const handleUnfilteredTeam = () => {
        setSelectedTeam("")
    }

    const handleRndTeam = () => {
        setSelectedTeam('Research & Development Team');
    };

    const handlePrTeam = () => {
        setSelectedTeam("Public Relations & Outreach Team")
    }

    const handleDesignTeam = () => {
        setSelectedTeam("Media & Design Team")
    }

    const handleTechnicalTeam = () => {
        setSelectedTeam("Technical Team")
    }

    const filteredResults = selectedTeam === "" ? results : results.filter(result => result.team && result.team.includes(selectedTeam));

    const isFormFilled = () => {
        return (
            username !== "" && password !== ""
        )
    }

    const submitcred = (e) => {
        e.preventDefault()

        if (!isFormFilled()) {
            setErrormsg("Please fill all the required details")
            return
        }

        setNologin(true)
        setLoggingin(true)
        axios.post(`${process.env.REACT_APP_RECRUITMENT_MAIN_API}/auth`, {
            // axios.post("http://localhost:9898/auth", {
            username, password
        }).then((response) => {
            setUsername("")
            setPassword("")
            setNologin(false)
            setLoggingin(false)
            setResults(response.data)
            setSuccessMessage("Credentials sent to the server.")

            setTimeout(() => {
                setSuccessMessage("")
            }, 3000)
        })
            .catch((error) => {
                console.error('Error:', error)
                setNologin(false)
                setLoggingin(false)
                if (error.response && error.response.data && error.response.data.message) {
                    setErrormsg(error.response.data.message);
                    setUsername("")
                    setPassword("")
                } else {
                    setErrormsg("An error occurred. Please try again.");
                }
                setTimeout(() => {
                    setErrormsg("")
                }, 3000)
            })
    }

    return (
        <>
            <div>
                <div className='formauthenticateprovblog' id='bigonsmallscreen'>
                    <h2>Login</h2>
                    <form >
                        <div className="formlogin">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value)
                                }}
                                className='input-common-recruit'

                            />
                        </div>
                        <div className="formlogin">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                                className='input-common-recruit'

                            />
                        </div>
                        <button className='form-submit' disabled={nologin} style={{ opacity: nologin ? 0.5 : 1, cursor: nologin ? "not-allowed" : "pointer" }} type="submit" onClick={submitcred}>
                            {loggingin ? "Logging in..." : "Log in"}
                        </button>

                        {errormsg && <p style={{ color: "red",fontFamily:"Nunito",marginTop:"3vw",marginBottom:"3vw" }}>{errormsg}</p>}
                        {successMessage && <p style={{ color: "green",fontFamily:"Nunito",marginTop:"3vw" ,marginBottom:"3vw"}}>{successMessage}</p>}
                    </form>


                    {results.length > 0 && (
                        <div>
                            <h2>Results</h2>

                            <div className="filteredteamdata">
                                <button onClick={handleUnfilteredTeam} style={{ color: selectedTeam === '' ? 'red' : 'initial' }}>All Applicants</button>

                                <button onClick={handleRndTeam} style={{ color: selectedTeam === 'Research & Development Team' ? 'red' : 'initial' }}>Research & Development Team</button>

                                <button onClick={handlePrTeam} style={{ color: selectedTeam === 'Public Relations & Outreach Team' ? 'red' : 'initial' }}>Public Relations & Outreach Team </button>

                                <button onClick={handleDesignTeam} style={{ color: selectedTeam === 'Media & Design Team' ? 'red' : 'initial' }}>Design Team</button>

                                <button onClick={handleTechnicalTeam} style={{ color: selectedTeam === 'Technical Team' ? 'red' : 'initial' }}>Technical Team</button>

                            </div>

                            <ul id='ulforsmallwidth' className='anotherpropapp'>
                                <h1 style={{ color: "green" ,fontFamily:"Nunito"}}>Total applicants: {filteredResults.length}</h1><br />
                                {filteredResults.map((result, index) => (
                                    <>

                                        <li key={index} id='h1inlihehe'>
                                            <h1>Name: <span id='familtchnagekarhu' style={{ color: "red" }}>{result.name}</span></h1>
                                            <h1>email: <span id='familtchnagekarhu' style={{ color: "red" }}>{result.email}</span> </h1>
                                            <h1>Scholar Id: <span id='familtchnagekarhu' style={{ color: "red" }}>{result.scholarId}</span> </h1>
                                            <h1>branch: <span id='familtchnagekarhu' style={{ color: "red" }}>{result.branch}</span> </h1>
                                            <h1>WP number: <span id='familtchnagekarhu' style={{ color: "red" }}>{result.mobileno}</span></h1>
                                            <h1>Which team you want to apply for? <span id='familtchnagekarhu' style={{ color: "red" }}> {result.team}</span></h1>
                                            <h1>why Nitsmun: <span id='familtchnagekarhu' style={{ color: "red" }} >{result.whynitsmun}</span> </h1>
                                            <h1>Have you ever participated in an MUN conference? <span id='familtchnagekarhu' style={{ color: "red" }}>{result.partinmun}</span></h1>
                                            <h1>If yes, which conf and share your experience? <span id='familtchnagekarhu' style={{ color: "red" }}>{result.yesmun}</span> </h1>
                                            <h1>Why should we recuit you? <span id='familtchnagekarhu' style={{ color: "red" }}>{result.whyrecruit}</span> </h1>
                                            <h1>Mention your experience supporting your desired team (club, fests, events, etc): <span id='familtchnagekarhu' style={{ color: "red" }}> {result.experience}</span></h1>
                                            <h1>Mention your achievements supporting the desired team (if any): <span id='familtchnagekarhu' style={{ color: "red" }}>{result.achievement}</span> </h1>
                                            <h1>Mention your hobbies/interests: <span id='familtchnagekarhu' style={{ color: "red" }}>{result.hobby}</span> </h1>
                                            <h1>If you're applying for Design Team then provide poster links (max : three): <span id='familtchnagekarhu' style={{ color: "red" }}>{result.poster}</span> </h1>
                                            <h1>If you're applying for the Research & Development Team, provide the content: <span id='familtchnagekarhu' style={{ color: "red" }}>{result.content}</span> </h1>
                                            <hr />
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Resultsrecruitment
