import React, {useState, useEffect} from "react";
import Search from "..common/SearchForm";
import JoblyApi from "../api"
import JobCardList from "./JobCardList";


function JobList() {
    console.debug("JobList");
    
    const [jobs, setJobs] = useState(null)

    useEffect(function getAllJobsOnMount(){
        console.debug("JobList useEffect getAllJobsOnMount");
        Search();
    }, []);

    async function search(title) {
        let jobs = await JobApi.getJobs(title);
        setJobs(jobs);
    }
    if(!jobs)
        return <LoadingSpinner/>;

    return (
        <div className="JobList col-md-8 offset-md-2">
            <Search searchFor={search} />
            {jobs.length
                ? <JobCardList jobs={jobs} />
                : <p className="lead"> Sorry, no results were found!</p>
            }
        </div>
    );
}

export default JobList;