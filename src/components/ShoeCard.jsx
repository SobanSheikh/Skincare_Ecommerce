const ShoeCard = ({ imgURL, changeBigShoeImage,changeBigShoeDescp, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.imageUrl) {
        changeBigShoeImage(imgURL.imageUrl);
        changeBigShoeDescp(imgURL.benefits)

      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-primary bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.imageUrl}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;