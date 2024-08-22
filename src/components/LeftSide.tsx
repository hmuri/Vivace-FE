const LeftSide = () => {
  return (
    <nav className="fixed top-0 left-0 h-[100vh] w-[220px] border-r border-[#465069] py-[16px]">
      <div className="flex flex-col text-white ">
        <div className="text-[20px] px-[16px]">{`<`}</div>
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
