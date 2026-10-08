/**
 * Post-purchase onboarding. The AI-assisted Website Brief interview isn't built yet: while
 * `briefUrl` is null, the welcome page explains that the private brief link arrives by email.
 * When the interview exists, set `briefUrl` and the "Start My Website Brief" button appears.
 */
export const onboarding = {
    briefUrl: null as string | null,
    interviewIntro: {
        title: 'Let’s get to know your business.',
        text: 'We’ll ask you a few questions one at a time. Don’t worry about writing perfect answers.',
    },
    /** What the interview covers; mirrors the WebsiteBrief type */
    briefCovers: [
        'Your business',
        'Who you serve',
        'What makes you different',
        'Your services',
        'Your brand’s personality',
        'Proof and credentials',
        'What visitors should do',
    ],
}
