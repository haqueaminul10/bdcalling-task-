import bg from '@/components/assets/Bg.png';
const SpecialOffer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      ></div>
    </>
  );
};

export default SpecialOffer;
