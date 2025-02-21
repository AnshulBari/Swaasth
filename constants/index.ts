export const GenderOptions = ["male", "female", "other"];


export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,

  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driving License",
  "Medical Insurance Card/Policy",
  "PAN Card",
  "National Identity Card",
  "Passport",
  "AADHAR Card",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Anshul Bari",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Sakshi Sharma",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Kushagra Verma",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Yuvraj Mishra",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Tanu Singh",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Aditya Singh",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Vidhan Gupta",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Shraddha Shukla",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  canceled: "/assets/icons/canceled.svg",
};
