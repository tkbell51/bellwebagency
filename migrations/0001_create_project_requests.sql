-- Submissions from the Start a Project form (/start).
-- `status` is for the future onboarding system: new → contacted → onboarding → active / declined.
CREATE TABLE project_requests (
    id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    business TEXT NOT NULL,
    website TEXT,
    need TEXT NOT NULL,
    goals TEXT NOT NULL,
    project_type TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    email_status TEXT NOT NULL DEFAULT 'pending',
    country TEXT
);

CREATE INDEX idx_project_requests_created_at ON project_requests (created_at);
CREATE INDEX idx_project_requests_status ON project_requests (status);
