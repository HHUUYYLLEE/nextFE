import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full text-white">
      <div className="mx-[2rem] sm:flex sm:gap-x-[7rem] 2xl:gap-x-[15rem]">
        <div className="py-[2rem]">
          <div className=" text-white italic text-lg">Liên lạc qua</div>
          <div className="flex items-center gap-x-3 sm:mt-[1.5rem]">
            <a href="https://www.facebook.com/huy.leba.75">
              <Image src="/images/facebook.png" alt="" width={20} height={20} />
            </a>
            <div>Huy Lê</div>
          </div>
          <div className="flex mt-[0.5rem] items-center gap-x-3">
            <Image src="/images/email.png" alt="" width={20} height={20} />
            <div>lebahuybk@gmail.com</div>
          </div>
          <div className="flex mt-[0.5rem] items-center gap-x-3">
            <Image src="/images/phone.png" alt="" width={20} height={20} />
            <div>0833471885</div>
          </div>
        </div>
        <div className=" sm:py-[2rem]">
          <div className=" sm:text-white sm:italic sm:text-lg">Địa chỉ</div>
          <a href="https://maps.app.goo.gl/sgkvz8YxsUW29rSi8">
            <div className="sm:flex sm:mt-[1.5rem] sm:items-center sm:gap-x-3">
              <Image
                src="/images/pinlocation.png"
                alt=""
                width={20}
                height={5}
              />
              <div>
                <div className="sm:text-[0.9rem]">
                  204-K1, Nguyễn Hiền. Bách Khoa, Hai Bà Trưng, Hà Nội
                </div>
                <div className="sm:text-[0.9rem]">
                  Toà Golden Park, 2 Phạm Văn Bạch, Yên Hoà, Nam Từ Liêm, Hà Nội
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/pepegakeyboard.gif"
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
