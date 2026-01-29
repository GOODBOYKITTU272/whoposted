import React from 'react';
import './JobCard.css';

export default function JobCard({ job }) {
    const getTimeColor = (hoursAgo) => {
        if (hoursAgo <= 12) return 'time-fresh';
        if (hoursAgo <= 48) return 'time-recent';
        return 'time-old';
    };

    const hoursAgo = Math.floor((Date.now() - job.postedTimeRaw) / (1000 * 60 * 60));

    return (
        <div className="job-card">
            <div className="job-header">
                <h3 className="job-title">{job.jobTitle}</h3>
                <p className="job-company">{job.company}</p>
            </div>

            <div className="job-meta">
                <span className="job-role-badge">{job.jobRole}</span>
            </div>

            <div className="job-posted-section">
                <div className="posted-by">
                    <span className="posted-by-label">Posted by:</span>
                    <span className="posted-by-name">{job.postedBy.name}</span>
                    <a
                        href={job.postedBy.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="posted-by-profile"
                    >
                        <svg className="linkedin-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        View LinkedIn Profile
                    </a>
                </div>

                <div className="posted-time">
                    <span className={`time-badge ${getTimeColor(hoursAgo)}`}>
                        {job.postedTime}
                    </span>
                </div>
            </div>

            <div className="job-actions">
                <a
                    href={job.jobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view-job"
                >
                    <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>View Job</span>
                </a>
            </div>
        </div>
    );
}
