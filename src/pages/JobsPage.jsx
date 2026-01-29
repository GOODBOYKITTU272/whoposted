import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import jobsData from '../data/jobsData.json';
import './JobsPage.css';

export default function JobsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('recent');

    // Filter and sort jobs
    const filteredJobs = useMemo(() => {
        let filtered = jobsData;

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(job =>
                job.jobTitle.toLowerCase().includes(query) ||
                job.company.toLowerCase().includes(query) ||
                job.jobRole.toLowerCase().includes(query) ||
                job.postedBy.name.toLowerCase().includes(query)
            );
        }

        // Apply sorting
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === 'recent') {
                return a.postedTimeRaw - b.postedTimeRaw;
            } else if (sortBy === 'company') {
                return a.company.localeCompare(b.company);
            }
            return 0;
        });

        return sorted;
    }, [searchQuery, sortBy]);

    return (
        <div className="jobs-page">
            <div className="jobs-header">
                <div className="container">
                    <h1 className="page-title gradient-text">Discover Fresh Job Opportunities</h1>
                    <p className="page-subtitle">
                        {jobsData.length} jobs updated daily • Know who posted, when they posted
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="jobs-controls">
                    <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                        placeholder="Search by job title, company, role, or recruiter name..."
                    />

                    <div className="sort-filter">
                        <label htmlFor="sort">Sort by:</label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="recent">Most Recent</option>
                            <option value="company">Company Name</option>
                        </select>
                    </div>
                </div>

                <div className="jobs-stats">
                    <span className="showing-count">
                        Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
                    </span>
                    {searchQuery && (
                        <span className="search-info">
                            for "{searchQuery}"
                        </span>
                    )}
                </div>

                {filteredJobs.length > 0 ? (
                    <div className="jobs-grid">
                        {filteredJobs.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <div className="empty-icon">🔍</div>
                        <h2>No jobs found</h2>
                        <p>Try adjusting your search or filters to find what you're looking for.</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => setSearchQuery('')}
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
