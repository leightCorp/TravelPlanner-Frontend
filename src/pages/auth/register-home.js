import RegisterTypeCard from "../../components/auth/RegisterTypeCard";

function RegisterHome() {
  const userRegisterCardContent = {
    title: "Are you looking for hotels that match your elegance ?",
    linkText:
      "You are at the right place, we offer you diverse options under affordable rates",
    link: "/register/user",
  };

  const hotelRegisterCardContent = {
    title: "Are you looking for expanding your hotel business ?",
    linkText:
      "Join us and we guarantee to make sure you reach the right customers",
    link: "/register/hotel",
  };

  return (
    <div className="w-100 h-75 p-5">
      <div className="d-flex align-items-center h-50 p-5">
        <RegisterTypeCard
          title={userRegisterCardContent.title}
          linkText={userRegisterCardContent.linkText}
          link={userRegisterCardContent.link}
        />
      </div>
      <div className="d-flex align-items-center justify-content-end h-50 p-5">
        <RegisterTypeCard
          title={hotelRegisterCardContent.title}
          linkText={hotelRegisterCardContent.linkText}
          link={hotelRegisterCardContent.link}
        />
      </div>
    </div>
  );
}

export default RegisterHome;
