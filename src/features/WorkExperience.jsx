import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "./resume/resumeSlices";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button, Snackbar, Alert } from "@mui/material";

function WorkExperience() {
    const { setIsWorkExperienceUpdated, setIsPersonalInfoUpdated } = useOutletContext();
    const workExperience = useSelector((state) => state.resume.experience);
    const [jobTitle, setJobTitle] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [validationError, setValidationError] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const [alreadyUpdatedMessage, setAlreadyUpdatedMessage] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setJobTitle(workExperience.jobTitle || '');
        setOrganisationName(workExperience.organisationName || '');
        setStartYear(workExperience.startYear || '');
        setEndYear(workExperience.endYear || '');
    }, [workExperience]);

    const validateFields = () => {
        if (!jobTitle || !organisationName || !startYear || !endYear) {
            setValidationError("Please fill in all fields");
            return false;
        }
        setValidationError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const currentData = {
            jobTitle,
            organisationName,
            startYear,
            endYear,
        };

        if (JSON.stringify(currentData) === JSON.stringify(workExperience)) {
            setAlreadyUpdatedMessage(true);
            return;
        }

        dispatch(setExperience(currentData));
        setSuccessMessage(true);
        setIsWorkExperienceUpdated(true);
    };

    const handleNext = () => {
        if (!validateFields()) return;
        navigate("/FormDetailsMainPage/educationInfo");
    };

    return (
        <div className="InfoDiv">
            <form onSubmit={handleSubmit} className="FormInfoDiv">
                <div className="formGroup">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={jobTitle}
                        placeholder="Job Title"
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="organisationName">Organisation Name</label>
                    <input
                        type="text"
                        id="organisationName"
                        name="organisationName"
                        value={organisationName}
                        placeholder="Organisation Name"
                        onChange={(e) => setOrganisationName(e.target.value)}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="startYear">Start Year</label>
                    <input
                        type="text"
                        id="startYear"
                        name="startYear"
                        value={startYear}
                        placeholder="Start Year"
                        onChange={(e) => setStartYear(e.target.value)}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="endYear">End Year</label>
                    <input
                        type="text"
                        id="endYear"
                        name="endYear"
                        value={endYear}
                        placeholder="End Year"
                        onChange={(e) => setEndYear(e.target.value)}
                        required
                    />
                </div>

                <div className="ButtonDiv">
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                    >
                        Update
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            navigate("/FormDetailsMainPage/personalInfo")
                        }
                        sx={{ marginLeft: '10px' }}
                    >
                        BACK
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleNext}
                        sx={{ marginLeft: '10px' }}
                    >
                        NEXT
                    </Button>
                </div>
            </form>

            {validationError && (
                <Snackbar
                    open={Boolean(validationError)}
                    autoHideDuration={6000}
                    onClose={() => setValidationError("")}
                >
                    <Alert
                        onClose={() => setValidationError("")}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        {validationError}
                    </Alert>
                </Snackbar>
            )}

            <Snackbar
                open={successMessage}
                autoHideDuration={6000}
                onClose={() => setSuccessMessage(false)}
            >
                <Alert
                    onClose={() => setSuccessMessage(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Updated successfully
                </Alert>
            </Snackbar>

            <Snackbar
                open={alreadyUpdatedMessage}
                autoHideDuration={6000}
                onClose={() => setAlreadyUpdatedMessage(false)}
            >
                <Alert
                    onClose={() => setAlreadyUpdatedMessage(false)}
                    severity="info"
                    sx={{ width: "100%" }}
                >
                    Already Updated
                </Alert>
            </Snackbar>
        </div>
    );
}

export default WorkExperience;
