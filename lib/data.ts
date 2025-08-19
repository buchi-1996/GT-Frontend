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
