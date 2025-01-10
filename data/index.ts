export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
];


export const gridItems = [
    {
        id: 1,
        title: "Mahasiswa Teknik Informatika yang sedang belajar dan mengembangkan diri dalam bidang IT.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
      },
    
      {
        id: 2,
        title: "Mari belajar mendalami teknologi terbaru dan mengembangkan aplikasi yang bermanfaat.",
        description: "",
        className: "md:col-span-3 md:row-span-2 ",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
      },
      {
        id: 3,
        title: "Apakah anda ingin memulai sebuah  proyek bersama?",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "",
        spareImg: "",
      },
  ];

  export const projects = [
    {
      id: 1,
      title: "AYO NGAJI ",
      des: "Aplikasi pembelajaran Quran berbasis web yang memudahkan pengguna dalam mempelajari Al-Quran secara online. ",
      img: "/p1.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://ayo-ngaji.vercel.app/",
    },
    {
      id: 2,
      title: "TEACH MAP POLIJE",
      des: "Website untuk mengklompokkan data dosen sesuai dengan mata kuliah yang diajarkan.",
      img: "/p2.png",
      iconLists: ["/laravel.svg", "/bootstrap.svg"],
      link: "https://pameran-jti.polije.ac.id/sipengampu/",
    },
    {
      id: 3,
      title: "MY BIMO",
      des: "Aplikasi mobile dan website bimbingan online english secara private yang memudahkan pengguna dalam mempelajari Bahasa Inggris.",
      img: "/p3.png",
      iconLists: ["/php.svg", "/java.svg", "/api.svg", "/postman.svg"],
      link: "no link website",
    },
    {
      id: 4,
      title: "SIAPUNG",
      des: "Aplikasi dekstop untuk memudahkan perawat dalam mencatat data pasien.",
      img: "/p4.png",
      iconLists: ["/java.svg"],
      link: "no link website",
    },
  ];

  export const workExperience = [
    {
      id: 1,
      title: "DIVISI IT - PT. Kutai Timber Indonesia",
      desc: "Magang sebagai IT Support dan Web Developer di PT. Kutai Timber Indonesia, membantu dalam penanganan masalah IT di perusahaan.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "SISTEM INFORMASI - HMJTI POLIJE",
      desc: "Anggota divisi Sistem Informasi di HMJTI POLIJE, membantu dalam pengembangan sistem informasi di organisasi.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App and Web Developer",
      desc: "FreeLancer sebagai Web Developer dan App Developer, membantu dalam pengembangan aplikasi dan website.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    
  ];

  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/link.svg",
    },
  ];