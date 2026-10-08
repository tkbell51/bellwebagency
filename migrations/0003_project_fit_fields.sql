-- Quick Project Fit fields. `need` now holds "what are you looking for", `project_type` the chosen path
-- (launch | custom), and `status` starts as checkout_started (launch) or inquiry (custom).
ALTER TABLE project_requests ADD COLUMN business_description TEXT;
ALTER TABLE project_requests ADD COLUMN scope TEXT;
ALTER TABLE project_requests ADD COLUMN notes TEXT;
