# FITFORGE FITNESS TRACKER
## Final Master Requirements, Module Breakdown & Implementation Roadmap

**Project Name:** FitForge — Fitness Tracker  
**Project Type:** Full-Stack MERN Application  
**Specification Status:** Finalized Scope  
**Purpose:** Professional, responsive, feature-complete fitness tracking platform for a portfolio, academic project, and live exhibition.

---

# PART 1 — PROJECT FOUNDATION

## 1.1 Technology Stack

### Frontend
- React
- TypeScript
- Vite
- React Router
- Reusable component architecture
- Responsive CSS/UI system
- Charting library for analytics
- Form validation
- API integration layer
- State management appropriate to the application

### Backend
- Node.js
- Express.js
- TypeScript
- REST API architecture
- Mongoose ODM
- Centralized error handling
- Request validation
- Authentication and authorization middleware

### Database
- MongoDB
- Mongoose schemas and relationships
- Database indexes
- Pagination for large datasets
- Appropriate timestamps and data validation

### Development and Quality Tools
- ESLint
- Prettier
- Automated tests
- Environment configuration
- Git and GitHub
- API documentation
- Logging and monitoring
- Deployment documentation

## 1.2 Required Application Structure

The project will use two main application folders:

- `frontend/` — React application
- `backend/` — Express API and server-side logic

Additional root-level items may include:
- `docs/` — project documentation
- Root `README.md`
- Root `.gitignore`
- Optional root `package.json` for development scripts

Do not introduce an `apps/` and `packages/` monorepo structure.

## 1.3 Application Roles

Exactly two roles will exist.

### Admin
- Access the admin panel.
- Manage users and account status.
- Oversee subscriptions and platform activity.
- Moderate community content.
- Manage support requests.
- View system statistics and audit logs.
- Access administrative controls according to explicit permissions.

### User
- Manage their own profile and fitness information.
- Complete onboarding.
- Use workout, nutrition, progress, and other fitness features.
- Participate in community features subject to platform rules.
- Manage their own account and preferences.
- Access features according to their subscription entitlements.

**Security rule:** Public registration must never allow someone to choose the Admin role. Admin access must be provisioned securely and enforced by the backend.

## 1.4 Subscription Tiers

Exactly two subscription tiers will exist.

### Free
- Access to the features and usage limits defined for the Free tier.
- Basic fitness tracking and personal records.
- Defined limits on selected advanced functionality where appropriate.

### Premium
- Access to the additional features and higher usage limits defined for Premium.
- Premium entitlements must be enforced by the backend, not only hidden in the frontend.

The precise Free/Premium feature matrix and limits will be documented before subscription implementation.

**Important:** User role and subscription tier are separate concepts. An Admin is not automatically a Premium User, and a Premium User does not become an Admin.

---

# PART 2 — FINAL MODULE BREAKDOWN

# MODULE 1: Authentication & Account Management

## Purpose
Provide secure account creation, login, account recovery, and session management.

## Functional Requirements
- User registration with name, email, and password.
- Email format and password validation.
- Duplicate email prevention.
- Secure password hashing.
- Login and logout.
- Email verification.
- Forgot-password flow.
- Secure password reset with expiring, single-use reset tokens.
- Session or token lifecycle management.
- Protected routes and protected API endpoints.
- Appropriate handling of invalid credentials.
- Account status checks.
- Secure account deletion or deactivation workflow.
- User-friendly authentication errors.
- Login and registration loading states.
- Protection against brute-force attempts and common authentication attacks.

## Required Screens
- Register
- Login
- Verify Email
- Forgot Password
- Reset Password
- Authentication Error/Expired Link states

## Completion Criteria
A user can register, verify their email, log in, recover access, log out, and access only authorized resources. Invalid and expired tokens must be rejected.

---

# MODULE 2: User Profile & Fitness Onboarding

## Purpose
Collect the information required to personalize the user's fitness experience.

## Functional Requirements
- Profile name and email display.
- Profile picture upload.
- Basic profile information.
- Age or date-of-birth handling where needed, with privacy safeguards.
- Height and weight.
- Preferred measurement units.
- Fitness goal selection:
  - Muscle gain
  - Fat loss
  - Strength
  - Endurance
  - General fitness
- Training experience.
- Available equipment.
- Preferred workout days and schedule.
- Workout duration preferences.
- Relevant fitness preferences.
- Onboarding progress and completion status.
- Save progress between onboarding steps.
- Edit onboarding answers later.
- Generate initial recommendations from completed onboarding data.

## Required Screens
- Multi-step onboarding
- Fitness goal selection
- Experience and equipment selection
- Schedule preferences
- Profile completion
- Profile edit page

## Completion Criteria
A user can complete onboarding, leave and resume it if supported, update their information later, and see recommendations based on saved preferences.

---

# MODULE 3: User Dashboard

## Purpose
Provide a polished overview of the user's fitness activity and next actions.

## Functional Requirements
- Personalized greeting.
- Today's workout or planned activity.
- Workout completion summary.
- Recent workout history.
- Daily calorie and macronutrient summary.
- Water intake summary.
- Weight and goal progress.
- Weekly activity overview.
- Consistency and streak information.
- Recent achievements.
- Notifications and reminders.
- Quick actions:
  - Start Workout
  - Log Meal
  - Record Measurement
  - View Progress
- Premium feature prompts where appropriate.
- Empty states for new users.
- Loading and error states.
- Responsive dashboard layout.

## Design Requirements
- Professional fitness analytics interface.
- Clear information hierarchy.
- Compact but readable data panels.
- Consistent spacing, typography, and chart styles.
- Restrained accent colors.
- Charts must show real stored data rather than decorative placeholder values.

## Completion Criteria
The dashboard displays current database-backed information and updates appropriately after users record workouts, meals, measurements, or other activity.

---

# MODULE 4: Exercise Library

## Purpose
Maintain a searchable catalogue of exercises for workout creation and tracking.

## Functional Requirements
- Exercise catalogue.
- Exercise detail page or panel.
- Exercise name and description.
- Target muscle groups.
- Secondary muscles where applicable.
- Equipment requirements.
- Difficulty level.
- Exercise category and movement type.
- Step-by-step instructions.
- Safety notes where appropriate.
- Search by exercise name.
- Filters for muscle group, equipment, and difficulty.
- Sorting and pagination where needed.
- Exercise selection from workout-building screens.
- Admin management of exercise data.
- Seeded exercise data for a working demonstration.

## Completion Criteria
Users can search, filter, inspect, and select exercises. Exercise records must be reusable across workout plans and workout history.

---

# MODULE 5: Workout Builder & Personalized Plans

## Purpose
Allow users to create structured routines and receive plans based on their goals and preferences.

## Functional Requirements
- Create custom workouts.
- Edit and delete custom workouts.
- Add and remove exercises.
- Arrange exercise order.
- Configure sets and target repetitions.
- Configure target weights or other relevant training parameters.
- Configure rest periods.
- Add workout notes.
- Categorize and organize routines.
- Create weekly workout schedules.
- Generate personalized plan recommendations from onboarding information.
- Support different training goals and experience levels.
- Respect equipment availability and preferred schedule.
- Save and reuse workout templates.
- Edit plans without corrupting historical workout records.
- Display upcoming scheduled workouts.

## Completion Criteria
Users can create, save, edit, schedule, and reuse workout plans. Recommendations must follow defined rules and must not be presented as medically validated prescriptions.

---

# MODULE 6: Live Workout Tracking

## Purpose
Track a workout while the user is actively training.

## Functional Requirements
- Start a workout from a saved plan or supported custom session.
- Display the current exercise.
- Record completed sets.
- Record repetitions and actual weights.
- Record other relevant exercise metrics where supported.
- Edit an incorrectly entered set.
- Delete an erroneous set.
- Start, pause, resume, and complete a session where applicable.
- Rest timer.
- Exercise-to-exercise navigation.
- Session notes.
- Workout duration.
- Save workout history.
- Cancel an incomplete session with clear confirmation.
- Handle accidental page navigation and interrupted sessions appropriately.
- Display previous performance when useful.
- Update personal records when verified by saved workout data.

## Completion Criteria
A completed workout is saved reliably and appears in history and analytics. Repeated submissions must not accidentally create duplicate sessions.

---

# MODULE 7: Nutrition & Hydration

## Purpose
Allow users to record food, calories, macronutrients, and water intake.

## Functional Requirements
- Food catalogue.
- Food name and serving size.
- Calories.
- Protein.
- Carbohydrates.
- Fat.
- Meal categorization:
  - Breakfast
  - Lunch
  - Dinner
  - Snacks
- Add, edit, and delete food entries.
- Daily meal log.
- Daily calorie and macronutrient totals.
- User-defined nutrition targets.
- Water intake logging.
- Daily hydration progress.
- Historical nutrition logs.
- Search and filtering for food entries.
- Clear distinction between verified food data and user-entered estimates.
- Support for custom food entries.
- Input validation for serving sizes and nutrient values.

## Completion Criteria
Nutrition totals must be calculated consistently from stored food entries and serving sizes. Missing nutrient values must not silently be treated as verified zero values.

---

# MODULE 8: Goals, Measurements & Progress Analytics

## Purpose
Track long-term fitness progress using measurable data and visual reports.

## Functional Requirements
- Set fitness goals.
- Record body weight.
- Record body measurements.
- Store progress photos with appropriate privacy controls.
- Track strength metrics from workout history.
- Track goal milestones.
- Show historical trends.
- Display weight and measurement charts.
- Display workout consistency.
- Compare selected periods.
- Show goal progress.
- Detect and display personal bests where supported.
- Maintain dated measurement history.
- Edit or correct erroneous entries.
- Provide empty states for users without sufficient history.
- Distinguish recorded measurements from estimated values.

## Completion Criteria
Charts and statistics must be calculated from saved records. Date ranges, units, missing data, and corrected entries must be handled correctly.

---

# MODULE 9: AI Fitness Assistant

## Purpose
Provide contextual fitness assistance based on the user's goals and available application data.

## Functional Requirements
- Fitness-related question and answer interface.
- Context-aware assistance using permitted profile and activity information.
- Workout and nutrition guidance.
- Explanations of exercises and training concepts.
- Suggestions aligned with stated goals and equipment.
- Conversation history where appropriate.
- Loading and error handling.
- AI usage limits according to subscription entitlements.
- Clear indication when a response is AI-generated.
- Fallback behavior if the AI service is unavailable.
- Protection of API keys and private user data.
- Avoid unsupported medical claims or guaranteed fitness outcomes.
- Avoid presenting AI-generated nutrient or exercise estimates as verified facts.

## Completion Criteria
The assistant works with configured AI credentials, handles service failures, respects user authorization, and does not expose sensitive data or server-side secrets.

---

# MODULE 10: Gamification & Challenges

## Purpose
Encourage consistent activity through milestones, achievements, and challenges.

## Functional Requirements
- Achievement definitions.
- Achievement unlocking rules.
- Badges.
- Workout streaks.
- Milestones.
- Fitness challenges.
- Challenge participation.
- Challenge start and end dates.
- Progress tracking.
- Challenge completion status.
- Achievement history.
- Dashboard achievement summaries.
- Notifications for unlocked achievements where appropriate.
- Protection against duplicate achievement awards.
- Validation of progress using saved activity data.

## Completion Criteria
Achievements and challenge progress must be calculated from legitimate activity records. Users must not be able to award themselves achievements by directly changing frontend data.

---

# MODULE 11: Social & Community

## Purpose
Allow users to share progress and interact with other members.

## Functional Requirements
- Community feed.
- Create and edit permitted posts.
- Delete own posts.
- Like and unlike posts.
- Comment on posts.
- Edit or delete permitted comments.
- Connect with or follow other users if included in the selected community design.
- Community challenges.
- User profile visibility controls.
- Report inappropriate content.
- Admin moderation.
- Pagination for feeds and comments.
- Authorization for editing and deleting content.
- Rate limiting and spam prevention.
- Appropriate handling of abusive or inappropriate content.

## Completion Criteria
Community content is persistent, permission-controlled, and moderated. Users must not be able to modify another user's private content without authorization.

---

# MODULE 12: Notifications & Smart Reminders

## Purpose
Notify users about relevant activity and scheduled reminders.

## Functional Requirements
- In-app notification centre.
- Read and unread status.
- Mark one notification as read.
- Mark all notifications as read.
- Workout reminders.
- Hydration reminders.
- Goal and achievement notifications.
- Relevant subscription notifications.
- Reminder scheduling.
- User-controlled reminder preferences.
- Time-zone-aware scheduling where supported.
- Notification history.
- Appropriate handling of expired or disabled reminders.
- Background scheduling mechanism where needed.
- Prevent duplicate notifications when jobs retry.

## Completion Criteria
Notifications must be generated only under the defined conditions, stored correctly, and displayed to the intended user. Reminders must respect user preferences and scheduling rules.

---

# MODULE 13: Analytics, Reports & Data Export

## Purpose
Provide useful summaries of fitness activity and allow users to export their information.

## Functional Requirements
- Workout summary reports.
- Exercise performance reports.
- Nutrition reports.
- Weight and measurement reports.
- Goal progress reports.
- Date-range selection.
- Weekly and monthly summaries.
- PDF export.
- CSV export.
- User data export where required.
- Validation of date ranges.
- Correct units and totals.
- Empty-report handling.
- Secure report generation.
- Authorization to access exported data.

## Completion Criteria
Reports must match the underlying stored data. CSV files must contain correctly structured fields, and PDFs must be readable and correctly formatted.

---

# MODULE 14: Subscription & Billing

## Purpose
Manage the Free and Premium plans and enforce feature entitlements.

## Functional Requirements
- Display Free and Premium plans.
- Define plan features and usage limits.
- Show the user's current subscription.
- Upgrade flow.
- Downgrade or cancellation flow as supported.
- Subscription status.
- Billing history where supported by the provider.
- Payment status handling.
- Failed-payment handling.
- Subscription expiration and renewal handling.
- Backend entitlement checks.
- Premium feature access controls.
- Subscription-related notifications.
- Webhook verification where the payment provider supports webhooks.
- Secure handling of payment-provider integration.
- Never store raw payment-card details in the application database.

## Completion Criteria
The application must accurately reflect verified subscription status. A frontend-only flag must never grant Premium access.

Payment-provider selection, credentials, and available regional payment methods must be confirmed before implementation. The project must not claim to process real payments until a genuine provider integration has been configured and tested.

---

# MODULE 15: Settings, Privacy & Data Controls

## Purpose
Give users control over their account preferences and personal information.

## Functional Requirements
- Edit profile settings.
- Preferred measurement units.
- Theme preferences.
- Notification preferences.
- Privacy settings.
- Account deactivation or deletion.
- Data export access.
- Clear confirmation for destructive actions.
- Appropriate session handling after account changes.
- Privacy controls for progress photos and community content.
- Data-retention rules where applicable.

## Completion Criteria
Settings must persist after reload and must be enforced by the backend wherever they affect security, privacy, or access.

---

# MODULE 16: Help & Support

## Purpose
Provide help documentation and a manageable support workflow.

## Functional Requirements
- FAQ page.
- Help documentation.
- Contact/support request form.
- Support ticket creation.
- Ticket status.
- User ticket history.
- Admin ticket list.
- Admin ticket status updates.
- Ticket replies or response history where implemented.
- Input validation.
- Spam prevention.
- Clear success and failure states.

## Completion Criteria
Support requests must be stored, associated with the correct user where applicable, and manageable by authorized administrators.

---

# MODULE 17: Admin Panel & System Operations

## Purpose
Provide administrators with secure oversight of the platform.

## Functional Requirements

### User Management
- View users.
- Search and filter users.
- View account status.
- Suspend or reactivate accounts where authorized.
- View relevant account and subscription metadata.
- Never expose password hashes or unnecessary sensitive information.

### Subscription Oversight
- View subscription statuses.
- Inspect relevant billing metadata.
- Identify subscription errors or inconsistencies.
- Do not grant paid entitlements without a trusted authorization process.

### Community Moderation
- Review reported content.
- Take authorized moderation actions.
- Track moderation status.
- Record relevant administrative actions.

### Support Management
- View support requests.
- Update ticket statuses.
- Respond through the implemented support workflow.

### Platform Statistics
- User counts.
- Activity summaries.
- Workout and nutrition usage statistics.
- Subscription distribution.
- Relevant operational metrics.

### Audit and Operations
- Audit logs for important administrative actions.
- Error and application logs.
- System health indicators.
- Monitoring of relevant background jobs and integrations.

## Completion Criteria
Admin endpoints must enforce role checks on the server. Administrative actions must be auditable where appropriate, and sensitive information must remain protected.

---

# PART 3 — CROSS-CUTTING ENGINEERING REQUIREMENTS

These are mandatory requirements across the whole application, not optional add-ons.

# REQUIREMENT 18: Professional UI/UX & Design System

- Professional, cohesive visual identity.
- Responsive desktop, tablet, and mobile layouts.
- Consistent typography and spacing.
- Reusable buttons, inputs, cards, dialogs, menus, tables, and charts.
- Consistent navigation and page layouts.
- Appropriate loading indicators.
- Empty states with useful next actions.
- Clear validation errors.
- Success and failure feedback.
- Accessible color contrast and keyboard navigation.
- Clear chart labels, legends, and units.
- No broken layouts or decorative fake statistics.
- Consistent design across user and admin interfaces.

# REQUIREMENT 19: Security & Authorization

- Secure password hashing.
- Request validation.
- Authentication middleware.
- Server-side role authorization.
- Server-side subscription entitlement checks.
- Rate limiting where appropriate.
- Safe handling of cookies and tokens.
- Secure configuration and environment variables.
- CORS configuration appropriate to deployment.
- Protection against common web vulnerabilities.
- Safe file-upload validation where uploads exist.
- Protection against unauthorized object access.
- Secrets stored outside committed source code.
- No real credentials in `.env.example`.
- Safe error responses without exposing stack traces or secrets in production.

# REQUIREMENT 20: Testing & Quality Assurance

- Unit tests for business logic.
- Integration tests for API endpoints.
- Authentication and authorization tests.
- Validation and error-handling tests.
- Database-related tests.
- Frontend component and interaction tests where useful.
- End-to-end tests for critical user journeys.
- Subscription entitlement tests.
- Regression tests for previously fixed issues.
- Tests for empty states and edge cases.
- Verification that calculations match expected values.

# REQUIREMENT 21: Performance & Reliability

- Database indexes for frequently queried fields.
- Pagination for large lists.
- Efficient API responses.
- Avoid unnecessary repeated database queries.
- Centralized error handling.
- Structured logging.
- Appropriate handling of external-service failures.
- Backup and recovery plan.
- Health-check endpoint.
- Monitoring of important failures.
- Graceful shutdown where appropriate.
- Reliable background jobs for scheduled reminders.
- Avoid duplicate processing when jobs or requests are retried.

# REQUIREMENT 22: Deployment & Documentation

- Complete project README.
- Installation instructions.
- Development instructions.
- Environment variable reference.
- Database setup instructions.
- API documentation.
- Testing instructions.
- Production build instructions.
- Deployment guide.
- Seed-data instructions.
- Troubleshooting documentation.
- Architecture and folder-structure documentation.
- Clear documentation of implemented and unsupported features.

---

# PART 4 — IMPLEMENTATION PHASES

## Phase 0: Requirements, Architecture & Project Foundation

### Scope
- Confirm the final module list.
- Confirm Admin/User roles.
- Confirm Free/Premium subscription model.
- Establish frontend and backend folder structure.
- Initialize React + TypeScript frontend.
- Initialize Node.js + Express + TypeScript backend.
- Configure MongoDB and Mongoose.
- Set up environment variables.
- Configure ESLint and Prettier.
- Add basic logging and centralized error handling.
- Establish API conventions.
- Create README and initial documentation.
- Configure root development scripts if required.

### Exit Criteria
Both applications start successfully. Environment configuration works, the database connection is verified, and the repository structure and development instructions are documented.

---

## Phase 1: Design System, Application Layout & Public Pages

### Scope
- Establish the visual design system.
- Create reusable UI components.
- Implement responsive layouts.
- Build public landing page.
- Build product introduction and pricing page.
- Create navigation and footer.
- Implement user application layout.
- Implement admin layout foundations.
- Add loading, error, and empty-state patterns.

### Exit Criteria
The main visual system is consistent and responsive. Public pages and application layouts work without placeholder navigation or broken links.

---

## Phase 2: Authentication & Account Security

### Scope
- Registration and login.
- Logout.
- Password hashing.
- Email verification.
- Forgot-password and reset-password flows.
- Session or token handling.
- Authentication middleware.
- Protected frontend routes.
- Backend authorization foundations.
- Account status checks.
- Initial authentication tests.

### Exit Criteria
The complete authentication lifecycle works. Protected endpoints reject unauthenticated users, and public registration cannot create Admin accounts.

---

## Phase 3: Profiles, Onboarding & User Dashboard

### Scope
- User profile.
- Profile picture handling.
- Fitness onboarding flow.
- Fitness goals and preferences.
- Equipment and schedule selection.
- Onboarding persistence.
- Personalized initial recommendations.
- Dashboard layout and data integration.
- Empty states for new users.

### Exit Criteria
A new user can register, complete onboarding, update their profile, and see a dashboard populated from their own saved data.

---

## Phase 4: Exercise Library

### Scope
- Exercise schema and seed data.
- Exercise catalogue API.
- Exercise detail endpoints.
- Search and filters.
- Exercise detail UI.
- Admin exercise-data management.
- Exercise selection integration.

### Exit Criteria
Exercise data can be searched, filtered, inspected, and selected by authorized users. Seed data is reproducible and documented.

---

## Phase 5: Workout Builder & Personalized Plans

### Scope
- Workout and workout-template models.
- Create/edit/delete workout routines.
- Exercise ordering.
- Sets, repetitions, weights, and rest configuration.
- Workout scheduling.
- Plan generation rules based on onboarding.
- Reusable workout templates.
- Workout builder UI.
- Backend validation and tests.

### Exit Criteria
Users can create and maintain routines, schedule workouts, and receive recommendations that respect their saved preferences and defined rules.

---

## Phase 6: Live Workout Tracking

### Scope
- Start and complete sessions.
- Active exercise interface.
- Set and repetition logging.
- Actual weights and workout notes.
- Rest timer.
- Session navigation.
- Session history.
- Personal-record detection.
- Interrupted and cancelled session handling.
- Workout tracking tests.

### Exit Criteria
A user can complete a full workout, save it, reopen it in history, and see the correct recorded results without duplicate sessions.

---

## Phase 7: Nutrition & Hydration

### Scope
- Food catalogue and custom foods.
- Serving-size calculations.
- Meal logging.
- Calorie and macronutrient totals.
- Daily nutrition targets.
- Water intake logging.
- Daily and historical summaries.
- Nutrition dashboard integration.

### Exit Criteria
Food entries can be managed reliably, totals are correct, and nutrition records are displayed consistently across the application.

---

## Phase 8: Goals, Measurements & Progress Analytics

### Scope
- Goal creation and tracking.
- Weight and body measurements.
- Progress-photo handling.
- Strength and performance metrics.
- Historical data.
- Charts and date-range filtering.
- Milestones and personal records.
- Progress dashboard integration.

### Exit Criteria
Users can record and review progress over time. Charts and goal calculations match the underlying database records.

---

## Phase 9: AI Fitness Assistant

### Scope
- Configure the selected AI provider.
- Secure server-side API integration.
- Build the assistant interface.
- Add contextual user information with appropriate permissions.
- Implement supported fitness and nutrition assistance.
- Add usage controls and Premium entitlement checks.
- Handle timeouts, provider errors, and unavailable service.
- Add safety and response-quality tests.

### Exit Criteria
The assistant works with valid configuration, protects secrets and private data, handles service failures, and follows the application's usage rules.

---

## Phase 10: Gamification & Challenges

### Scope
- Achievement definitions.
- Badge-awarding rules.
- Workout streak calculations.
- Milestones.
- Challenge creation and participation.
- Challenge progress.
- Achievement history.
- Dashboard integration.
- Duplicate-award prevention.

### Exit Criteria
Achievements and challenges update correctly from legitimate user activity and remain consistent when records are edited or recalculated.

---

## Phase 11: Notifications & Smart Reminders

### Scope
- Notification data model.
- In-app notification centre.
- Read/unread management.
- Workout reminders.
- Hydration reminders.
- Achievement and relevant account notifications.
- Scheduling mechanism.
- Reminder preferences.
- Background job handling.
- Duplicate-notification protection.

### Exit Criteria
Notifications reach the correct user under the intended conditions. Scheduled reminders respect preferences and do not repeatedly fire due to job retries.

---

## Phase 12: Social & Community

### Scope
- Community feed.
- Post creation and management.
- Likes and comments.
- Connections/following if included in the finalized design.
- Community challenges.
- Reporting content.
- Admin moderation integration.
- Privacy and authorization controls.
- Feed pagination and spam protection.

### Exit Criteria
Users can interact with community content according to permissions. Unauthorized edits are rejected, and reported content can be managed by Admins.

---

## Phase 13: Analytics, Reports & Data Export

### Scope
- Workout reports.
- Nutrition reports.
- Goal and measurement reports.
- Date-range summaries.
- PDF export.
- CSV export.
- User data export.
- Report formatting.
- Authorization and privacy checks.

### Exit Criteria
Exported files are valid, readable, correctly formatted, and consistent with the data visible in the application.

---

## Phase 14: Subscription & Billing

### Scope
- Finalize Free/Premium feature matrix.
- Define subscription and usage limits.
- Implement subscription records.
- Build pricing and subscription-management UI.
- Integrate the selected payment provider where supported.
- Handle verified payment status.
- Handle renewal, expiration, cancellation, and failures.
- Verify provider webhooks where applicable.
- Enforce entitlements on the backend.
- Test unauthorized Premium access.

### Exit Criteria
Subscription status and feature access remain consistent between the provider, backend, and frontend. No user can gain Premium access simply by modifying frontend state.

---

## Phase 15: Settings, Privacy & Help/Support

### Scope
- Account preferences.
- Theme and measurement-unit settings.
- Notification preferences.
- Privacy controls.
- Account deletion/deactivation workflow.
- FAQ and help pages.
- Support request submission.
- Support ticket history.
- Admin support management.

### Exit Criteria
User preferences persist correctly, privacy controls are enforced, and support requests can be submitted and managed through a complete workflow.

---

## Phase 16: Admin Panel & System Operations

### Scope
- Admin dashboard.
- User management.
- Account status controls.
- Subscription oversight.
- Community moderation.
- Support management.
- Platform usage statistics.
- Audit logs.
- Health and operational status indicators.
- Admin authorization tests.

### Exit Criteria
Admin operations work end-to-end and are restricted to authorized administrators. Important actions are logged appropriately.

---

## Phase 17: Full Integration, Security, QA & Deployment

### Scope

**Full integration**
- Verify all module navigation.
- Verify frontend/backend API integration.
- Verify user ownership and access permissions.
- Verify subscription entitlements across all relevant modules.
- Remove dead links, placeholder actions, and mock data from completed production flows.

**Security**
- Review authentication and authorization.
- Validate request data.
- Review file-upload security.
- Check environment configuration.
- Review sensitive-data handling.
- Test rate limits and common attack scenarios.

**Quality assurance**
- Run unit tests.
- Run integration tests.
- Run end-to-end tests.
- Test critical user journeys.
- Test Admin and User permissions.
- Test Free and Premium entitlements.
- Test error, loading, and empty states.
- Test responsive layouts and browser compatibility.
- Fix regressions and verify fixes.

**Performance and reliability**
- Review database indexes and query performance.
- Verify pagination.
- Test error handling.
- Verify scheduled jobs.
- Test database backup and recovery procedures where configured.
- Configure logging and health checks.

**Documentation and deployment**
- Finalize README.
- Document environment variables.
- Document database setup and seed data.
- Document API endpoints.
- Document test execution.
- Document deployment and troubleshooting.
- Build and deploy frontend/backend.
- Verify production configuration.
- Run smoke tests against the deployed application.

### Exit Criteria
The application is deployed and usable. Critical user journeys work from start to finish, security checks pass, required tests pass, and setup/deployment documentation is complete.

---

# PART 5 — PROJECT-WIDE IMPLEMENTATION RULES

These rules apply throughout every phase.

1. Implement one phase at a time.
2. Do not begin the next phase until the current phase passes its acceptance criteria.
3. Every feature must have working frontend, backend, validation, persistence, and error handling where applicable.
4. Do not use fake data to make an unfinished feature appear complete.
5. Demo/seed data must be clearly identified and reproducible.
6. Every protected backend endpoint must enforce the required authorization.
7. All sensitive configuration must remain outside committed source code.
8. New changes must not break previously completed modules.
9. Run relevant automated tests after changes.
10. Document important architecture and implementation decisions.
11. Do not leave broken buttons, dead links, incomplete forms, or placeholder workflows in completed modules.
12. External services such as AI and payments must have documented configuration requirements and graceful failure handling.
13. Do not claim that a feature is complete merely because its UI exists.
14. Do not claim perfect accuracy for estimates, AI responses, or third-party integrations.
15. Track known limitations explicitly rather than silently presenting unfinished functionality as complete.

---

# FINAL PROJECT DEFINITION

FitForge is a full-stack fitness platform containing 17 functional modules and 5 cross-cutting engineering requirements.

It supports exactly two application roles (Admin and User) and exactly two subscription tiers (Free and Premium).

The application will be developed with React + TypeScript, Node.js + Express + TypeScript, and MongoDB + Mongoose, using a straightforward `frontend/` and `backend/` structure.

**The implementation is complete only when the modules work end-to-end, their acceptance criteria are met, critical tests pass, and the application is documented and deployable.**

This document is the master scope and implementation roadmap. Individual phase prompts, detailed database schemas, API specifications, and folder structures will be produced when their respective implementation stages begin.