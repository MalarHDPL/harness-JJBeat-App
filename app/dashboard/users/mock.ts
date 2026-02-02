export const columns = [
  { field: "createdon", header: "CREATED ON", shortable: true },
  { field: "createdname", header: "CHAIN NAME", shortable: true },
  { field: "source", header: "SOURCE", shortable: true },
  { field: "desitination", header: "DESTINATION", shortable: true },
  { field: "leads", header: "LEADS", shortable: true },
  { field: "createdby", header: "CREATED BY", shortable: true },
  { field: "status", header: "STATUS", shortable: true },
  { field: "recentleaddata", header: "RECENT LEAD DATA", shortable: true },
];

export const products = [
  {
    id: "1",
    createdon: "14 Feb 2023 02:15 PM",
    createdname: "Zylker's Lead chain 1",
    source: "Zylker Travels → Dynamic Leads Ads",
    destination: "Zoho CRM → SEND LEADS To Zoho CRM",
    leads: 43,
    createdby: "User 1",
    status: "Active",
    recentleaddata: "25 Feb 2023 05:23 PM",
  },
  {
    id: "2",
    createdon: "13 Feb 2023 07:23 PM",
    createdname: "Lead Automation",
    source: "Zylker Travels → Lead form 1",
    destination: "Zoho CRM → SEND LEADS To Zoho CRM",
    leads: 15,
    createdby: "User 2",
    status: "Inactive",
    recentleaddata: "19 Feb 2023 08:45 AM",
  },
  {
    id: "3",
    createdon: "10 Feb 2023 01:10 PM",
    createdname: "New year offer form",
    source: "Zylker Travels → Customer offer form",
    destination: "Zoho CRM → SEND LEADS To Zoho CRM",
    leads: "-",
    createdby: "User 3",
    status: "Draft",
    recentleaddata: "-",
  },
  {
    id: "4",
    createdon: "09 Jan 2023 02:05 AM",
    createdname: "Mount Everest Trip",
    source: "Zylker Travels → Mount Everest Trip Form",
    destination: "Zoho CRM → SEND LEADS To Zoho CRM",
    leads: 12,
    createdby: "User 4",
    status: "Inactive",
    recentleaddata: "29 Feb 2023 10:35 PM",
  },
  {
    id: "5",
    createdon: "21 Dec 2022 11:42 AM",
    createdname: "Zylker Photography",
    source: "Zylker Photography → Mail Signup Form",
    destination: "Zoho CRM → SEND LEADS To Zoho CRM",
    leads: 38,
    createdby: "User 5",
    status: "Active",
    recentleaddata: "25 Feb 2023 09:28 AM",
  },
  {
    id: "6",
    createdon: "14 Dec 2022 02:15 PM",
    createdname: "Lead Automation 2",
    source: "Cafe De Ville → Online Customer Form",
    destination: "Zoho CRM → SEND LEADS To Zoho CRM",
    leads: 24,
    createdby: "User 6",
    status: "Active",
    recentleaddata: "23 Feb 2023 07:38 PM",
  },
  {
    id: "7",
    createdon: "08 Dec 2022 12:00 AM",
    createdname: "Winter Offers",
    source: "Zylker Travels → Europe Trip Form",
    destination: "Zoho CRM → SEND LEADS To Zoho CRM",
    leads: "-",
    createdby: "User 7",
    status: "Draft",
    recentleaddata: "-",
  },
];



export const classOptions = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}`,
  value: `${i + 1}`,
}));

export const sectionOptions = [
  { label: " A", value: "Section A" },
  { label: "B", value: "Section B" },
  { label: " C", value: "Section C" },
  { label: " D", value: "Section D" },
];

export const bloodGroupOptions = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

export const categoryOptions = [
  { label: "General", value: "General" },
  { label: "OC", value: "OC" },
  { label: "SC", value: "SC" },
  { label: "ST", value: "ST" },
  { label: "BC", value: "BC" },
  { label: "MBC", value: "MBC" },
  { label: "OBC", value: "OBC" },
  { label: "DNT", value: "DNT" },
];

export const religionOptions = [
  { label: "Hinduism", value: "Hinduism" },
  { label: "Islam", value: "Islam" },
  { label: "Christianity", value: "Christianity" },
  { label: "Sikhism", value: "Sikhism" },
  { label: "Buddhism", value: "Buddhism" },
  { label: "Jainism", value: "Jainism" },
];

export const houseOptions = [
  { label: "Red", value: "Red" },
  { label: "Blue", value: "Blue" },
  { label: "Green", value: "Green" },
  { label: "Yellow", value: "Yellow" },
];

export const routeListOptions = [
  { label: "Anna Salai (Mount Road)", value: "Anna Salai (Mount Road)" },
  { label: "Poonamallee High Road", value: "Poonamallee High Road" },
  { label: "Jawaharlal Nehru Road", value: "Jawaharlal Nehru Road" },
  { label: "Arcot Road", value: "Arcot Road" },
  { label: "Velachery Main Road", value: "Velachery Main Road" },
  { label: "OMR", value: "OMR" },
];

export const pickupPointOptions = [
  { label: "T. Nagar Bus Terminus", value: "T. Nagar Bus Terminus" },
  { label: "Tambaram Railway Station", value: "Tambaram Railway Station" },
  { label: "Velachery Railway Station", value: "Velachery Railway Station" },
  { label: "Adyar Bus Depot", value: "Adyar Bus Depot" },
  { label: "Guindy Railway Station", value: "Guindy Railway Station" },
  { label: "Anna Nagar Roundtana", value: "Anna Nagar Roundtana" },
  { label: "Thiruvanmiyur Bus Depot", value: "Thiruvanmiyur Bus Depot" },
];

export const feesMonthOptions = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];

export const GenderOption = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "Others" },
];

export const options = ["Father", "Mother", "Other"];
export const RTEOptions = ["Yes", "No"];
