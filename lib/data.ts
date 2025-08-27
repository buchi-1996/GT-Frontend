export const conditionOptions = ["New", "Good", "Used", "Fair", "Needs repair"]

export const defaultUnmatchOptions = [
    {
        value: "item not available",
        title: "Item No Longer Available",
        description: "The item was damaged, lost, or otherwise became unavailable before collection.",
        id: "item-not-available"
    },
    {
        value: "receiver unresponsive",
        title: "Receiver Unresponsive",
        description: "No response to confirmation messages or failure to confirm collection details.",
        id: "receiver-unresponsive"
    },
    {
        value: "receiver missed communication",
        title: "Receiver Missed Communication Window",
        description: "Collection information or response not provided within the agreed communication period.",
        id: "receiver-missed-communication"
    },
    {
        value: "changed decision personal",
        title: "Changed Decision – Personal Reasons",
        description: "Item reconsidered for giving away due to personal or emotional attachment.",
        id: "changed-decision-personal"
    },
    {
        value: "item re-evaluated",
        title: "Item Re-evaluated for Use",
        description: "A new personal use or need for the item was found.",
        id: "item-re-evaluated"
    },
    {
        value: "item donated elsewhere",
        title: "Item Donated Elsewhere",
        description: "Item donated through another platform, organization, or in person before confirmation.",
        id: "item-donated-elsewhere"
    },
    {
        value: "logistical constraints",
        title: "Logistical Constraints",
        description: "Collection arrangements became unfeasible (e.g., unavailability of someone to hand over the item).",
        id: "logistical-constraints"
    },
    {
        value: "health emergency",
        title: "Health or Emergency Issues",
        description: "Personal or family emergency, illness, or another urgent issue made the transfer impossible.",
        id: "health-emergency"
    },
    {
        value: "trust concerns",
        title: "Suspicion or Trust Concerns",
        description: "Discomfort due to suspicious or inappropriate communication.",
        id: "trust-concerns"
    },
    {
        value: "incorrect listing",
        title: "Incorrect Listing Details",
        description: "Key information in the listing (item type, condition, availability) was inaccurate and needs correction.",
        id: "incorrect-listing"
    },
    {
        value: "receiver attempted payment",
        title: "Receiver Attempted Negotiation or Payment",
        description: "Money or barter was offered, which is against GT's core values.",
        id: "receiver-attempted-payment"
    },
    {
        value: "receiver missed appointment",
        title: "Receiver Missed an Earlier Collection Appointment",
        description: "No show at a prior agreed-upon time without reasonable justification.",
        id: "receiver-missed-appointment"
    },
    {
        value: "policy conflict",
        title: "Community or Neighbourhood Policy Conflict",
        description: "Local rules or building policies do not allow handover at the specified location.",
        id: "policy-conflict"
    },
    {
        value: "incomplete or misleading",
        title: "Receiver's Profile Incomplete or Misleading",
        description: "Inconsistencies or missing critical information identified in profile.",
        id: "incomplete-or-misleading"
    }
];

export const GiverNoshowReasons = [
    { value: "emergency-situation", label: "Emergency Situation (e.g., medical, family emergency)" },
    { value: "work-commitment", label: "Unexpected Work Commitment" },
    { value: "health-issues", label: "Personal Health Issues on the Day" },
    { value: "transportation-challenges", label: "Transportation or Mobility Challenges" },
    { value: "forgot-appointment", label: "Forgot the Appointment" },
    { value: "dependent-care", label: "Dependent Care Responsibilities (e.g., no babysitter)" },
    { value: "misunderstood-time", label: "Misunderstood or Confused Collection Date/Time" },
    { value: "receiver-failed-confirm", label: "Receiver Failed to Confirm in Time" },
    { value: "could-not-locate", label: "Could Not Locate the Receiver or Their Contact" },
    { value: "receiver-breached-condition", label: "Receiver Breached a Pre-agreed Condition or Requirement" },
    { value: "change-of-mind", label: "Change of Mind Due to Concerns About the Receiver" },
    { value: "safety-concerns", label: "Safety or Security Concerns" },
    { value: "weather-conditions", label: "Weather Conditions Prevented Travel" },
    { value: "platform-error", label: "Platform/App Notification Error or Miscommunication" },
    { value: "item-damaged", label: "Item Was Damaged or Lost Before Handover" },
    { value: "double-booking", label: "Double Booking or Scheduling Conflict" },
    { value: "other", label: "Other reasons", hasTextarea: true }
];
