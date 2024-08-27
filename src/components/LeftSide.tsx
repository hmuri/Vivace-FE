import Image from "next/image";
import HomeIcon from "../../public/homebutton.png";
import { useRouter } from "next/router";

const LeftSide = () => {
  const router = useRouter();
  return (
    <nav className=" h-[100vh] w-[300px] border-r border-[#465069] py-[16px]">
      <div className="flex flex-col text-white ">
        <Image
          className="w-[20px] h-[20px] ml-[16px] cursor-pointer"
          src={HomeIcon}
          alt=""
          onClick={() => router.push("/projects")}
        />
        <div className="text-[28px] py-[10px] px-[16px]">Vivace Project</div>
        <div className="text-[10px] px-[16px]">명의 멤버</div>
        <div className="text-[20px] mt-[40px] flex gap-[10px] flex-col">
          <div className="py-[10px] px-[16px] w-full bg-[#132147]">
            대시보드
          </div>
          <div className="py-[10px] px-[16px] w-full">프로젝트</div>
          <div className="py-[10px] px-[16px] w-full">산출물 관리</div>
        </div>
      </div>
    </nav>
  );
};

export default LeftSide;
