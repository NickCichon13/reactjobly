import React, {useContext, useState} from "react";


function JobCard({id, title, salary, equity,company}) {
    console.debug("JobCard");

    const {hasApplied, applyToJob} = useContext(UserContext);
    const [applied, setApplied] = useState();

    async function handleApply(evt) {
        if(hasApplied(id)) return;
        applyToJob(id);
        setApplied(true);
    }
    return (
        <div className="JobCard card">
            {applied}
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p>{companyName}</p>
                {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
                {equity !== undefined && <div><small>Equity: {equity}</small></div>}
                <button className="btn btn-danger font-weight-bold text-uppercase float-right"
                    onClick={handleApply}
                    disable={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    );

    function formatSalary(salary) {
        const digitsRev = [];
        const salaryStr = salary.toString();

        for (let i = salaryStr.length -1; i >=0; i--) {
            digitsRev.push(salaryStr[i]);
            if(i > 0 && i % 3 === 0) digitsRev.push(",");

        }
        return digitsRev.reverse().join("");
    }
}

export default JobCard;