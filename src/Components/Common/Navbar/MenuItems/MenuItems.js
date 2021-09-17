const getCurrentUser = () => {
  if (localStorage.getItem("Role") === "Admin") {
    return "Admin";
  } else {
    return "Teacher";
  }
};

export const MenuItems = [
  {
    title: "Admission Form",
    path: "/TAdmissionForm",
    cName: "heropanti-link",
    hide: getCurrentUser() === "Admin" ? false : true,
  },
  {
    title: "Admission Report",
    path: "/TAdmissionReport",
    cName: "heropanti-link",
    hide: getCurrentUser() === "Admin" ? false : true,
  },
  {
    title: "Responsiblity Form",
    path: "/ResponsiblityForm",
    cName: "heropanti-link",
    hide: false,
  },
  {
    title: "Resp-Report",
    path: "/ResponsiblityReport",
    cName: "heropanti-link",
    hide: false,
  },
];
