export const MenuItems1 = [
  {
    title: 'Addmission Form',
    path:'/addmissionForm',
    cName: 'heropanti-link',
    hide: localStorage.getItem("Role") === "Admin" ? false : true,
  },
  {
    title: 'Addmission Report',
    path: '/AdmissionReport',
    cName: 'heropanti-link',
    hide: localStorage.getItem("Role") === "Admin" ? false : true,
  },
  {
    title: 'Promotion Form',
    path: '/PromotionReport',
    cName: 'heropanti-link'
  },
 
];
