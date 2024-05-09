const Description = () => {
  return (
    <div className="flex w-[calc(1380/1920*100vw)] mx-auto px-40 pt-[12%]">
      <div className="flex flex-col gap-[calc(50/1920*100vw)]">
        <h2 className="text-[calc(74/1920*100vw)] text-white font-[300] leading-[1] tracking-[1.6px]">
          <span>Welcome to the</span>
          <br />
          <span>Onchain Renaissance</span>
        </h2>
        <p className="whitespace-pre-wrap text-white font-[300] text-[calc(24/1920*100vw)] leading-[1.3] tracking-[0.5px]">
          Creativity is the bedrock of culture. Story
          <br />
          Protocol provides the tools to seamlessly
          <br />
          capture IPs, ushering in a new era of remixing
          <br />
          with ownership built in.
        </p>
      </div>
    </div>
  );
};

export default Description;
