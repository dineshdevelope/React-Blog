import React from "react";

const HomePage = () => {
  const blogData = [
    {
      id: 1,
      title: "I am Learning HTML",
      description: "Learning HTML from Cyber Dude Networks Pvt Ltd",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
    },
    {
      id: 2,
      title: "I am Learning CSS",
      description: "Learning CSS from Cyber Dude Networks Pvt Ltd",
      img: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
    },
    {
      id: 3,
      title: "I am Learning Javascript",
      description: "Learning JAVASCRIPT from Cyber Dude Networks Pvt Ltd",
      img: "https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc",
    },
    {
      id: 4,
      title: "I am Learning REACT JS",
      description: "Learning REACT JS from Cyber Dude Networks Pvt Ltd",
      img: "https://bilginc.com/editorFiles/3147aa77.png",
    },
  ];
  const myData = blogData.map((item) => {
    return (
      <div
        className="bg-white p-10 rounded flex items-center space-x-10 mb-3"
        key={item.id}
      >
        <img src={item.img} alt="React Js Logo" className="w-28" />
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="m-10">
      <h4 className="text-2xl font-semibold mb-5">Latest Posts</h4>
      {myData}
    </div>
  );
};

export default HomePage;
