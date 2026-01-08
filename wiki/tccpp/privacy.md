# Privacy on Together C & C++

**Last Updated:** November 2025

Privacy expectations for the Together C & C++ Discord server.

## General

This is a public Discord server - messages in public channels can be seen by anyone and may be screenshotted or shared.

We use Discord bots that comply with Discord's [terms of service][terms], [privacy policy][privacy], [developer terms of
service][dev-terms], [developer policy][dev-policy], and [GDPR][gdpr]. Each bot maintains its own privacy policy.

[terms]: https://discord.com/terms
[privacy]: https://discord.com/privacy
[dev-terms]: https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service
[dev-policy]: https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy
[gdpr]: https://gdpr-info.eu/

## Wheatley

Wheatley is our in-house moderation bot. Data is collected for moderation, safety, and server features as follows:

### What We Collect

We store:

- **Messages** - Content, timestamps, ids, author info, edits, and deletions
- **Moderation logs** - Warnings, mutes, bans, kicks, timeouts, and notes
- **Server activity** - Roles, joins, and leaves
- **Short-term activity data** - Temporary activity data for spam, scam, and raid prevention (automatically deleted
  after minutes/hours)
- **Feature data** - Information for suggestions, starboard, mini-games, and other server features
- **Attachments** - Briefly analyzed to determine file type, executables and archives are virus scanned (deleted after
  analysis)
- **Bot logs** - Commands, interactions, actions, errors, and other diagnostic telemetry

Wheatley has no access to private user information, user DMs, non-Discord data, or anything outside the server.

### The Importance of Recording Messages

Messages are the primary user data wheatley collects. Maintaining a database of messages is necessary for keeping the
server safe. Discord's API doesn't provide complete information about edited or deleted messages, so we maintain our own
record to:

- Track message content before edits and deletions, enabling moderation of offensive content that users attempt to hide
- Preserve edit history to prevent abuse where users retroactively alter conversations to manipulate context or make
  others appear to violate rules
- Facilitate purging messages from problematic users server-wide

### AI-Assisted Moderation

We are experimenting with machine learning and LLM-backed tools to provide useful context and early warning to help us
better meet the moderation needs for the server with more timely, accurate, and informed action.

For example, we may perform automated scanning of recent messages using text classification models like
[toxic-bert][bert] and we may use LLMs to provide conversation summaries at moderator request.

**Important:** Your messages are **never** used for training AI models.

[bert]: https://huggingface.co/unitary/toxic-bert

### Third-Party Services & Data Sharing

**We never sell your data.** Information is only shared with moderators with legitimate need it or as required by law.

We use limited third-party services like OpenAI, VirusTotal, and Sentry (for diagnostic telemetry) that retain data
appropriately and do not use data for training.

We may use data for limited research and publish anonymized findings, such as
[historical conversation trends](https://github.com/jeremy-rifkin/tccpp-ngrams).

### Data Retention

- **Messages** - Stored to accurately reflect current server contents and support moderation
- **Deleted messages** - Kept for 180 days after the bot becomes aware of deletion, then removed
- **Moderation records** - Kept indefinitely
- **Temporary security data** - Automatically deleted after minutes/hours
- **Feature data** - Stored as needed

### Contact

Questions and requests: Contact [jeremy@rifkin.dev](mailto:jeremy@rifkin.dev).
