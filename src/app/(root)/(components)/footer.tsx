import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full text-white">
      <div className="mx-[2rem] sm:flex sm:gap-x-[7rem] 2xl:gap-x-[15rem]">
        <div className="py-[2rem]">
          <div className=" text-white italic text-lg select-none">
            Liên lạc qua
          </div>

          <div className="sm:mt-[1.5rem] mr-[7rem]">
            <a
              href="https://www.facebook.com/huy.leba.75"
              className="flex items-center gap-x-3 [&>div]:hover:underline"
            >
              <Image src="/images/facebook.png" alt="" width={20} height={20} />
              <div>Huy Lê</div>
            </a>
          </div>

          <div className="flex mt-[0.5rem] items-center gap-x-3">
            <Image src="/images/email.png" alt="" width={20} height={20} />
            <div className="pointer-events-none">lebahuybk@gmail.com</div>
          </div>
          <div className="flex mt-[0.5rem] items-center gap-x-3">
            <Image src="/images/phone.png" alt="" width={20} height={20} />
            <div className="pointer-events-none">0833471885</div>
          </div>
        </div>
        <div className=" sm:py-[2rem]">
          <div className=" sm:text-white sm:italic sm:text-lg select-none">
            Địa chỉ
          </div>

          <div className="sm:flex sm:mt-[1.5rem] sm:items-center sm:gap-x-3">
            <Image src="/images/pinlocation.png" alt="" width={20} height={5} />
            <div>
              <a href="https://maps.app.goo.gl/sgkvz8YxsUW29rSi8">
                <div
                  className="sm:text-[0.9rem] hover:underline"
                  draggable="false"
                >
                  204-K1, Nguyễn Hiền. Bách Khoa, Hai Bà Trưng, Hà Nội
                </div>
              </a>
              <a href="https://maps.app.goo.gl/8zw8hJ2M9fLbkB4f8">
                <div
                  className="sm:text-[0.9rem] hover:underline"
                  draggable="false"
                >
                  Toà Golden Park, 2 Phạm Văn Bạch, Yên Hoà, Nam Từ Liêm, Hà Nội
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/pepegakeyboard.gif"
            alt=""
            width={200}
            height={200}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
